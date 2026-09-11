# FactsLedger Content Status

## Contextual interlinking policy

FactsLedger profiles must use **contextual internal links**, not generic related-post lists or link blocks.

For each profile:

1. Link only to entities with a direct, source-supported relationship to the subject.
2. Place the link naturally inside the sentence where that relationship is explained.
3. Link to any given target profile **at most once per source profile**. Repeated mentions remain plain text.
4. Do not use a generic `related:` block as a substitute for contextual links.
5. Do not link to missing, draft, deleted, or unrelated profiles.
6. Confirm that every internal target exists and returns HTTP 200 before deployment.
7. If no direct, sourced relationship exists, do not add an internal link merely for SEO.

Source citations remain separate from internal entity links. The internal link should clarify the entity relationship for readers, while the external citation should support the factual claim.
