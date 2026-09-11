#!/usr/bin/env python3
"""Audit FactsLedger contextual internal links.

The site-wide rule is one link to each canonical internal target per source
page, even when the entity name appears repeatedly. This checker scans Markdown
content and fails on duplicate or missing content targets. Legacy `related:`
blocks are reported as warnings; use --fail-on-related during migrations.
"""

from __future__ import annotations

import argparse
import re
import sys
from collections import Counter
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import urldefrag, urlsplit

MARKDOWN_LINK_RE = re.compile(r"\]\((/[^)\s]+/?)\)")
YAML_HREF_RE = re.compile(r"^\s+href:\s*(/[^\s#]+/?)(?:\s+#.*)?$", re.MULTILINE)
RELATED_RE = re.compile(r"^related:\s*$", re.MULTILINE)
CONTENT_PATH_RE = re.compile(r"^/(creative-works|events|organizations|people|places|schools|species|universities)/([^/]+)/?$")


@dataclass(frozen=True)
class Finding:
    kind: str
    source: str
    target: str
    detail: str


def canonical_path(raw: str) -> str:
    """Normalize a root-relative internal URL to a canonical trailing-slash path."""
    path = urlsplit(urldefrag(raw)[0]).path
    if not path.startswith("/"):
        path = "/" + path
    return path.rstrip("/") + "/"


def content_target(repo: Path, target: str) -> Path | None:
    match = CONTENT_PATH_RE.fullmatch(target)
    if not match:
        return None
    category, slug = match.groups()
    return repo / "src" / "content" / category / f"{slug}.md"


def source_files(repo: Path) -> list[Path]:
    return sorted(
        path
        for path in (repo / "src" / "content").glob("*/*.md")
        if path.name != "_TEMPLATE.md"
    )


def inspect_file(repo: Path, path: Path) -> tuple[dict[str, int], list[Finding], bool]:
    text = path.read_text(encoding="utf-8")
    source = str(path.relative_to(repo))
    raw_links = MARKDOWN_LINK_RE.findall(text) + YAML_HREF_RE.findall(text)
    links = [canonical_path(link) for link in raw_links]
    counts = Counter(links)
    findings: list[Finding] = []

    for target, count in sorted(counts.items()):
        if count > 1:
            findings.append(Finding("duplicate", source, target, f"{count} occurrences"))

    for target in sorted(counts):
        destination = content_target(repo, target)
        if destination is not None and not destination.exists():
            findings.append(Finding("missing", source, target, str(destination.relative_to(repo))))

    has_related = bool(RELATED_RE.search(text))
    return counts, findings, has_related


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument(
        "--fail-on-related",
        action="store_true",
        help="Treat legacy related: blocks as errors instead of warnings.",
    )
    args = parser.parse_args()
    repo = args.repo.resolve()

    findings: list[Finding] = []
    related_files: list[str] = []
    total_links = 0
    files = source_files(repo)

    for path in files:
        counts, file_findings, has_related = inspect_file(repo, path)
        total_links += sum(counts.values())
        findings.extend(file_findings)
        if has_related:
            related_files.append(str(path.relative_to(repo)))

    errors = [finding for finding in findings if finding.kind in {"duplicate", "missing"}]
    if args.fail_on_related:
        errors.extend(
            Finding("related", source, "", "legacy related: block found")
            for source in related_files
        )

    print("FactsLedger contextual interlink audit")
    print(f"content_files_scanned={len(files)}")
    print(f"internal_links_scanned={total_links}")
    print(f"duplicate_target_errors={sum(f.kind == 'duplicate' for f in findings)}")
    print(f"missing_target_errors={sum(f.kind == 'missing' for f in findings)}")
    print(f"legacy_related_blocks={len(related_files)}")

    if findings:
        print("\nFindings:")
        for finding in findings:
            label = finding.kind.upper()
            suffix = f" — {finding.detail}" if finding.detail else ""
            print(f"{label}\t{finding.source}\t{finding.target}{suffix}")

    if related_files:
        print("\nWarnings: legacy related: blocks are present in:")
        for source in related_files:
            print(f"  - {source}")
        if not args.fail_on_related:
            print("Use --fail-on-related to enforce the contextual-only migration rule.")

    if errors:
        print(f"\nFAILED: {len(errors)} policy violation(s) found.", file=sys.stderr)
        return 1

    print("\nPASSED: no duplicate or missing internal content targets found.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
