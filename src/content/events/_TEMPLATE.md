---
# Copy this file into src/content/events/, rename it to the URL slug you want
# (e.g. sheffield-declaration.md) and remove the leading underscore rules below.
# The build FAILS if a required field is missing or a profile has no tier1/tier2 source.
#
# Use this collection for dated historical documents, declarations, battles, sieges
# and other one-time events that don't fit School/University/Person/Organization/Place.

title: Example Declaration
summary: >-
  One or two sentences. Shown on listing pages and used as the meta description. 40–300 characters.
entityType: Event             # only valid value for this collection
country: United States
location: City, Region
established: "1773"           # the date of the event/document, quoted

facts:                        # rows of the key-facts box, in order
  - label: Type
    value: Petition / manifesto
  - label: Drafted by
    value: Name Here

timeline:
  - year: "1773"
    event: What is documented to have happened.
    sourceType: Regional newspaper

sourceNote: >-
  Optional line shown in the source-quality box, e.g. what was checked or removed before publication.

openItems:                    # claims you could NOT verify. Publish them here, do not hide them.
  - Some specific claim that could not be independently confirmed.

related:
  - label: Related Entity
    href: /people/slug/

sources:                      # at least one, and at least one tier1 or tier2
  - title: Exact title of the document or article
    url: https://example.org/record.pdf
    publisher: Publisher Name
    tier: tier1               # tier1 | tier2 | tier3 | first-party  (there is no tier4 — those are not citable)
    date: "1773-01-12"
    usedFor: What this source is being used to support.
---

## Overview

Write the profile body here in Markdown, citing every claim inline with a link back to the source that supports it.
