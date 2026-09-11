# FactsLedger Content Status

## Universal contextual interlinking policy

This is a **site-wide rule for every profile and page on `https://factsledger.com/`**. FactsLedger must use **contextual internal links**, not generic related-post lists or link blocks.

For each profile:

1. Link only to entities with a direct, source-supported relationship to the subject.
2. Place the link naturally inside the sentence where that relationship is explained.
3. Link to any given target profile or canonical internal URL **at most once per source page**. Even if the same name or keyword appears many times, only the first relevant occurrence is linked; all later mentions remain plain text.
4. Do not use a generic `related:` block as a substitute for contextual links.
5. Do not link to missing, draft, deleted, or unrelated profiles.
6. Confirm that every internal target exists and returns HTTP 200 before deployment.
7. If no direct, sourced relationship exists, do not add an internal link merely for SEO.

Source citations remain separate from internal entity links. The internal link should clarify the entity relationship for readers, while the external citation should support the factual claim.
