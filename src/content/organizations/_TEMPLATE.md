---
# Copy this file into src/content/schools/, rename it to the URL slug you want
# (e.g. woodlands-house-school.md) and remove the leading underscore rules below.
# The build FAILS if a required field is missing or a profile has no tier1/tier2 source.

title: Example School
summary: >-
  One or two sentences. Shown on listing pages and used as the meta description. 40–300 characters.
entityType: School            # School | University | College | Person | Organization | TrainStation | ReligiousSite | Hospital | Place
country: Nepal
location: District, City
established: "1991"           # optional, quoted

facts:                        # rows of the key-facts box, in order
  - label: Type
    value: Private school, English medium
    firstParty: true          # true = the subject says this about itself
  - label: Principal
    value: Name Here

timeline:
  - year: "2019"
    event: What is documented to have happened.
    sourceType: National newspaper

sourceNote: >-
  Optional line shown in the source-quality box, e.g. what was checked or removed before publication.

openItems:                    # claims you could NOT verify. Publish them here, do not hide them.
  - The registration number could not be retrieved, so none is stated.

related:
  - label: Related Entity
    href: /organizations/slug/

sources:                      # at least one, and at least one tier1 or tier2
  - title: Exact title of the document or article
    url: https://example.gov/record.pdf
    publisher: Department of Education
    tier: tier1               # tier1 | tier2 | tier3 | first-party  (there is no tier4 — those are not citable)
    date: 20 October 2020
    usedFor: The specific claim this source supports.

author: Muhammad
published: 2026-08-29
lastUpdated: 2026-08-29
draft: false                  # true keeps it out of the build
---

## Overview

Body in Markdown. Link every factual claim inline to the source it rests on.

## Recognition

## Leadership

## Sports

## Educational programmes

## Community activity

## What this profile does not claim
