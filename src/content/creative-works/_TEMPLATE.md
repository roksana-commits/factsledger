---
# Copy this file into src/content/creative-works/, rename it to the URL slug you want
# (e.g. some-novel-title.md) and remove the leading underscore rules below.
# The build FAILS if a required field is missing or a profile has no tier1/tier2 source.
#
# Use this collection for novels, films, songs, plays and other creative works — but ONLY
# when the work has a documented REAL-WORLD story beyond ordinary critical reception: a
# controversy, a lawsuit or court case, a censorship or banning episode, a notable production
# or authorship dispute, a plagiarism claim, a real-world incident it caused or was accused of
# causing, etc. Reviews and critical praise alone (even strong reviews in major outlets) are
# NOT sufficient for this collection — that is ordinary critical reception, not a documented
# story, and belongs on a book/film review site, not here. If the only sourcing you have is
# reviews, this is the wrong collection for the subject.

title: Example Work
summary: >-
  One or two sentences. Shown on listing pages and used as the meta description. 40–300 characters.
entityType: CreativeWork       # only valid value for this collection
country: United States
established: "2020"            # year of first publication/release, quoted

facts:                         # rows of the key-facts box, in order
  - label: Type
    value: Novel / film / song / play
  - label: Creator
    value: Name Here
  - label: Publisher / studio / label
    value: Name Here

timeline:
  - year: "2020"
    event: What is documented to have happened (the real-world story, not the plot).
    sourceType: Major newspaper

sourceNote: >-
  Optional line shown in the source-quality box, e.g. what was checked or removed before publication.

openItems:                     # claims you could NOT verify. Publish them here, do not hide them.
  - Some specific claim that could not be independently confirmed.

related:
  - label: Related Entity
    href: /people/slug/

sources:                       # at least one, and at least one tier1 or tier2
  - title: Exact title of the article
    url: https://example.org/record
    publisher: Publisher Name
    tier: tier1                # tier1 | tier2 | tier3 | first-party  (there is no tier4 — those are not citable)
    date: "2020-01-12"
    usedFor: What this source is being used to support.
---

## Overview

Write the profile body here in Markdown, citing every claim inline with a link back to the source
that supports it. Focus on the documented real-world story — not a plot summary or review digest.
