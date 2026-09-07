---
# Copy this file into src/content/species/, rename it to the URL slug you want
# (e.g. ficus-palmeri.md) and remove the leading underscore rules below.
# The build FAILS if a required field is missing or a profile has no tier1/tier2 source.
#
# Use this collection for biological species (plants, animals, fungi, etc.) with a
# documented public record — conservation status, institutional description, notable
# ecological or cultural role — that don't fit any other collection.

title: Example Species (Scientific name)
summary: >-
  One or two sentences. Shown on listing pages and used as the meta description. 40–300 characters.
entityType: Species           # only valid value for this collection
country: Country or region of native range
location: More specific native range, if documented

facts:                        # rows of the key-facts box, in order
  - label: Scientific name
    value: Genus species
  - label: Family
    value: Family name
  - label: Conservation status
    value: e.g. Not evaluated / Least concern / Endangered (name the assessing body)

timeline:
  - year: "1889"
    event: e.g. First formally described, or a documented institutional/cultural milestone.
    sourceType: Botanical/zoological institution or academic publication

sourceNote: >-
  Optional line shown in the source-quality box, e.g. what was checked or removed before publication.

openItems:                    # claims you could NOT verify. Publish them here, do not hide them.
  - Some specific claim that could not be independently confirmed.

related:
  - label: Related Entity
    href: /organizations/slug/

sources:                      # at least one, and at least one tier1 or tier2
  - title: Exact title of the document or article
    url: https://example.edu/record
    publisher: Publisher or Institution Name
    tier: tier1               # tier1 | tier2 | tier3 | first-party  (there is no tier4 — those are not citable)
    date: "2020"
    usedFor: What this source is being used to support.
---

## Overview

Write the profile body here in Markdown, citing every claim inline with a link back to the source that supports it.
