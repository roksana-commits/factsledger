---
title: DATAllegro
sortTitle: "DATAllegro"
summary: >-
  A data warehouse appliance maker based in Aliso Viejo, California, whose
  large-scale, commodity-hardware technology was acquired by Microsoft in
  2008 to strengthen SQL Server's enterprise business intelligence
  capabilities for the very-large-database market.
entityType: Organization
country: United States
location: Aliso Viejo, California, United States
established: "2003"
facts:
  - label: Founding
    value: "Founded in 2003 in California by Stuart Frost and Mark Thacker"
  - label: Business
    value: "Made data warehouse appliances scaling from 1 terabyte to hundreds of terabytes, serving retail, telecommunications and manufacturing customers, targeting the market above 10 terabytes"
  - label: Technology
    value: "Built on an Ingres database engine running on Linux, using commodity, nonproprietary hardware (Dell and Bull servers with EMC storage) and standard ANSI SQL, rather than proprietary hardware such as Netezza's PowerPC-based appliances"
  - label: Market position
    value: "Competed with Netezza, HP, IBM, Oracle, Sybase and Teradata for large-scale deployments, and with newer entrants Vertica, ParAccel and Infobright; some customers reportedly used its appliances to offload data from existing Teradata systems"
    firstParty: false
  - label: Early funding
    value: "Raised $22.5 million in Series C funding in September 2006, led by JAFCO Ventures, with continuing participation from Adams Capital Management, Focus Ventures, Intel Capital, Palomar Ventures and Venrock Associates"
    firstParty: true
  - label: Funding
    value: "Raised $19.6 million in Series D funding in May 2008, led by Hillman Company, with Adams Capital Management, Focus Ventures, Intel Capital, JAFCO Ventures, Palomar Ventures and Venrock Associates"
  - label: Acquisition
    value: "Acquired by Microsoft, announced July 24, 2008; deal terms not disclosed"
  - label: Legacy
    value: "Its massively parallel processing technology became the technical foundation of Microsoft's SQL Server Parallel Data Warehouse, code-named 'Madison,' released in December 2010 and later rebranded the Analytics Platform System"
    firstParty: false
timeline:
  - year: "2003"
    event: DATAllegro is founded in California by Stuart Frost and Mark Thacker.
    sourceType: Technology trade press
  - year: "2005-03"
    event: Ships its P3 data warehouse appliance, with capacity up to 3 terabytes.
    sourceType: Industry analyst publication
  - year: "2005-07"
    event: >-
      Announces the C25 appliance, scaling to 25 terabytes, priced at
      $450,000, positioning it against Netezza's larger appliances and
      in the capacity gap CEO Stuart Frost described between Oracle and
      Teradata.
    sourceType: Industry analyst publication
  - year: "2006-09"
    event: >-
      Raises $22.5 million in Series C funding led by JAFCO Ventures,
      with continuing participation from Adams Capital Management,
      Focus Ventures, Intel Capital, Palomar Ventures and Venrock
      Associates.
    sourceType: Company press release
  - year: "2008-05"
    event: >-
      Raises $19.6 million in Series D funding, led by Hillman Company
      with participation from Adams Capital Management, Focus Ventures,
      Intel Capital, JAFCO Ventures, Palomar Ventures and Venrock
      Associates.
    sourceType: Technology trade press
  - year: "2008-07-24"
    event: >-
      Microsoft announces its acquisition of DATAllegro, framing it as a
      reference-architecture move to give SQL Server credibility above
      the 10-terabyte mark, where Microsoft's database had little
      presence; financial terms are not disclosed.
    sourceType: Company press release; technology trade press; industry analyst publication
  - year: "2008-09-16"
    event: Microsoft closes the acquisition and retains most of DATAllegro's team at its Aliso Viejo headquarters as a data-warehousing "Center of Excellence."
    sourceType: Company press release
  - year: "2010-12"
    event: >-
      Microsoft's SQL Server Parallel Data Warehouse, code-named
      "Madison" and built on the acquired DATAllegro technology, reaches
      general availability, first shipping on an HP appliance.
    sourceType: Technology trade press
  - year: "2014-04"
    event: >-
      Microsoft rebrands Parallel Data Warehouse as the Analytics
      Platform System, adding Hadoop/PolyBase capability to the
      appliance built on DATAllegro's original architecture.
    sourceType: Company blog post; independent technology blog
openItems:
  - "Sources give differing dates for when Parallel Data Warehouse was rebranded the Analytics Platform System: Microsoft's own product-lifecycle documentation lists 'SQL Server 2012 Parallel Data Warehouse (Analytics Platform System)' with a July 2013 start date, while Microsoft's SQL Server blog post introducing the Analytics Platform System by that name is dated April 2014. This profile does not resolve which date marks the official rename."
sourceNote: >-
  Microsoft's own announcement (first-party) was fetched and read in full
  for acquisition mechanics and direct quotes, and independently
  corroborated by VentureBeat, a technology-industry trade publication
  unaffiliated with either company. TDWI (The Data Warehousing Institute),
  an independent industry-analyst publication, was also fetched and read
  in full for a technical and competitive analysis of the acquisition,
  including DATAllegro's Ingres/Linux architecture, its commodity-hardware
  approach versus Netezza's proprietary hardware, its competitive set, and
  Microsoft's stated strategic rationale. A second, independent
  fetch-and-read pass checked Wikipedia's DATAllegro article purely as a
  lead index for the company's founding, pre-2008 history, and the fate of
  its technology after the acquisition; every lead was then independently
  verified against fresh, non-Wikipedia sources before being added, and no
  claim from Wikipedia was cited directly. The 2003 founding and its
  founders were independently confirmed by TechCrunch's own contemporary
  acquisition report. An earlier TDWI article from 2005 and a GlobeNewswire
  press release from 2006 (first-party) supplied independently verified
  pre-2008 product and funding history. The technology's fate inside
  Microsoft was independently confirmed by Redmond Magazine and The
  Register, two technology trade publications, both of which state
  directly that Parallel Data Warehouse (code-named "Madison") was built
  on the acquired DATAllegro technology; the later Analytics Platform
  System rebrand was confirmed via Microsoft's own SQL Server blog
  (first-party, an uncontested naming fact) and its product-lifecycle
  documentation, with a discrepancy between the two on the exact rebrand
  date flagged in openItems rather than silently resolved. DATAllegro's
  funding history prior to its 2006 Series C round, and any earlier Series
  A/B rounds, could not be independently verified and are not claimed.
sources:
  - title: "Microsoft to Acquire DATAllegro"
    url: https://news.microsoft.com/source/2008/07/24/microsoft-to-acquire-datallegro/
    publisher: Microsoft
    tier: first-party
    date: "2008-07-24"
    usedFor: >-
      DATAllegro's product technology, its Aliso Viejo headquarters, the
      July 24, 2008 acquisition announcement, and quotes from Microsoft's
      Ted Kummert, DATAllegro's CEO Stuart Frost, and Intel Capital's Lisa
      Lambert.
  - title: "Microsoft acquires DATAllegro data warehouse appliance company"
    url: https://venturebeat.com/business/microsoft-acquires-datallegro-data-warehouse-appliance-company
    publisher: VentureBeat
    tier: tier2
    usedFor: >-
      Independent confirmation of DATAllegro's business focus, its May
      2008 Series D funding round and investors, and the acquisition's
      strategic rationale.
  - title: "Analysis: What's Behind Microsoft's DATAllegro Acquisition?"
    url: https://tdwi.org/articles/2008/07/25/analysis-whats-behind-microsofts-datallegro-acquisition.aspx
    publisher: TDWI (The Data Warehousing Institute)
    tier: tier2
    date: "2008-07-25"
    usedFor: >-
      DATAllegro's Ingres-on-Linux architecture and commodity-hardware
      approach (versus Netezza's proprietary PowerPC-based appliances),
      its use of standard ANSI SQL, its competitive set (Netezza, HP, IBM,
      Oracle, Sybase, Teradata, Vertica, ParAccel, Infobright), a reported
      "Teradata augmentation" use case among some customers, CEO Stuart
      Frost's comments on SQL Server's weak share above 10 terabytes, and
      the analysis of Microsoft's reference-architecture rationale for the
      deal.
  - title: "Microsoft Acquires Datallegro"
    url: https://techcrunch.com/2008/07/24/microsoft-acquires-datallegro/
    publisher: TechCrunch
    tier: tier2
    date: "2008-07-24"
    usedFor: >-
      Independent confirmation that DATAllegro was founded in 2003 by
      Stuart Frost and Mark Thacker in California, and of Microsoft's
      stated intent to integrate DATAllegro's technology into SQL Server.
  - title: "DATAllegro Announces Massive Data Warehouse Appliance"
    url: https://tdwi.org/articles/2005/07/27/datallegro-announces-massive-data-warehouse-appliance.aspx
    publisher: TDWI (The Data Warehousing Institute)
    tier: tier2
    date: "2005-07-27"
    usedFor: >-
      Pre-acquisition product history: the P3 appliance (shipped March
      2005, up to 3 terabytes) and the C25 appliance (announced July
      2005, up to 25 terabytes, priced at $450,000), CEO Stuart Frost's
      comments on targeting the capacity gap between Oracle and Teradata,
      and independent analyst commentary on the company's early market
      challenges.
  - title: "DATAllegro Completes Series 'C' Funding"
    url: https://www.globenewswire.com/news-release/2006/09/20/348455/6428/en/DATAllegro-Completes-Series-C-Funding.html
    publisher: DATAllegro (via GlobeNewswire)
    tier: first-party
    date: "2006-09-20"
    usedFor: >-
      The $22.5 million Series C funding round, led by JAFCO Ventures
      with continuing participation from Adams Capital Management, Focus
      Ventures, Intel Capital, Palomar Ventures and Venrock Associates,
      and confirmation that Stuart Frost was CEO at the time.
  - title: "UPDATE: Microsoft SQL Server Parallel Data Warehouse Hits Metal Next Month"
    url: https://redmondmag.com/articles/2010/11/09/microsoft-sql-server-parallel-data-warehouse-hits-metal-next-month.aspx
    publisher: Redmond Magazine
    tier: tier2
    date: "2010-11-09"
    usedFor: >-
      Independent confirmation that Microsoft's Parallel Data Warehouse,
      code-named "Madison," was "Microsoft's reworking of the DatAllegro
      Inc. massive parallel processing product that Microsoft acquired
      nearly two years ago," and that the appliance was scheduled to ship
      via HP in mid-December 2010.
  - title: "Microsoft's SQL Server gets appliance of iron"
    url: https://www.theregister.com/2009/11/03/microsoft_sql_server_08_r2_ctp_2/
    publisher: The Register
    tier: tier2
    date: "2009-11-03"
    usedFor: >-
      Further independent corroboration that Parallel Data Warehouse
      ("Madison") was based on the DATAllegro technology and Ingres
      database engine Microsoft acquired in 2008, and of expanding
      hardware-partner adoption (Bull, Dell, HP, IBM).
  - title: "Introducing the Microsoft Analytics Platform System – the turnkey appliance for big data analytics"
    url: https://www.microsoft.com/en-us/sql-server/blog/2014/04/23/introducing-the-microsoft-analytics-platform-system-the-turnkey-appliance-for-big-data-analytics/
    publisher: Microsoft
    tier: first-party
    date: "2014-04-23"
    usedFor: >-
      Microsoft's own announcement introducing the Analytics Platform
      System as the rebranded successor to Parallel Data Warehouse, an
      uncontested naming fact.
author: Muhammad Abdullah Al Yasin
published: "2026-09-14"
lastUpdated: "2026-09-14"
draft: false
---

## Overview

DATAllegro was a data warehouse appliance company based in Aliso Viejo, California, founded in 2003 by Stuart Frost and Mark Thacker ([TechCrunch](https://techcrunch.com/2008/07/24/microsoft-acquires-datallegro/)), that built large-volume, high-performance systems — scaling from 1 terabyte to hundreds of terabytes on a single system — for retail, telecommunications and manufacturing customers, competing against Oracle in the space ([VentureBeat](https://venturebeat.com/business/microsoft-acquires-datallegro-data-warehouse-appliance-company)). Its appliances were built on an Ingres database engine running on Linux, using commodity, nonproprietary hardware — Dell and Bull servers with EMC storage — and standard ANSI SQL, an architectural choice TDWI's analysis contrasted with rival [Netezza](/organizations/netezza/)'s proprietary, PowerPC-based appliances ([TDWI](https://tdwi.org/articles/2008/07/25/analysis-whats-behind-microsofts-datallegro-acquisition.aspx)).

## Early history and product line

DATAllegro shipped its P3 appliance, with capacity up to 3 terabytes, in March 2005, then announced the larger C25 appliance that July, scaling to 25 terabytes and priced at $450,000, which the company described as the lowest price-per-terabyte data warehouse appliance on the market at the time; the two models could be linked together for capacity beyond 25 terabytes, with an "Intelligent Query Router" partitioning workloads between them ([TDWI](https://tdwi.org/articles/2005/07/27/datallegro-announces-massive-data-warehouse-appliance.aspx)). CEO Stuart Frost said the C25 was aimed at "the gap between Oracle and Teradata," positioning DATAllegro's appliances for historical, large-volume data storage where he argued Oracle's capacity was too limited and Teradata's minimum deployment size too high ([TDWI](https://tdwi.org/articles/2005/07/27/datallegro-announces-massive-data-warehouse-appliance.aspx)). The C25 launch followed Netezza's own announcement of appliances scaling to 50–100 terabytes, and an industry analyst quoted in the same TDWI report noted DATAllegro still lacked publicly cited customer success stories despite the P3 having already shipped ([TDWI](https://tdwi.org/articles/2005/07/27/datallegro-announces-massive-data-warehouse-appliance.aspx)). In September 2006, the company raised $22.5 million in Series C funding led by JAFCO Ventures, with continuing participation from Adams Capital Management, Focus Ventures, Intel Capital, Palomar Ventures and Venrock Associates — the same investor group, apart from JAFCO, that would go on to join Hillman Company in DATAllegro's 2008 Series D round ([GlobeNewswire](https://www.globenewswire.com/news-release/2006/09/20/348455/6428/en/DATAllegro-Completes-Series-C-Funding.html)).

## Technology and market position

DATAllegro targeted the market for databases above 10 terabytes, a segment TDWI's analysis described Microsoft's SQL Server as having struggled to compete in. Its customer base included companies using its appliances alongside, or to offload data from, existing Teradata deployments — a use case TDWI termed "Teradata augmentation." Beyond Netezza, DATAllegro's competitive set included established vendors HP, IBM, Oracle, Sybase and Teradata, as well as newer specialized entrants Vertica, ParAccel and Infobright. DATAllegro's CEO, Stuart Frost, was quoted acknowledging that SQL Server had "very little market share" above the 10-terabyte mark prior to the deal — a gap TDWI's analysis said the acquisition was intended to close by giving Microsoft a reference architecture it could point to for very large deployments, rather than requiring an immediate, full technical integration into SQL Server itself.

## Funding and acquisition

In May 2008, DATAllegro raised $19.6 million in a Series D funding round led by Hillman Company, with participation from Adams Capital Management, Focus Ventures, Intel Capital, JAFCO Ventures, Palomar Ventures and Venrock Associates. On July 24, 2008, Microsoft announced its acquisition of the company to strengthen its enterprise business intelligence offering around SQL Server; the deal's financial terms were not disclosed. Microsoft's Ted Kummert called DATAllegro "a tremendously innovative company that has started to redefine the data warehouse market," while DATAllegro's CEO Stuart Frost said integrating the company's hardware platform and software architecture into SQL Server would "provide customers with the strongest offering in the market" ([Microsoft](https://news.microsoft.com/source/2008/07/24/microsoft-to-acquire-datallegro/)). Microsoft closed the acquisition on September 16, 2008, retaining most of DATAllegro's team at its Aliso Viejo offices as a data-warehousing "Center of Excellence."

## After the acquisition

DATAllegro's massively parallel processing architecture became the technical basis of Microsoft's SQL Server Parallel Data Warehouse, internally code-named "Madison." Redmond Magazine reported that Madison was "Microsoft's reworking of the DatAllegro Inc. massive parallel processing product that Microsoft acquired nearly two years" earlier, with the first appliance, built by HP, scheduled to ship in mid-December 2010 ([Redmond Magazine](https://redmondmag.com/articles/2010/11/09/microsoft-sql-server-parallel-data-warehouse-hits-metal-next-month.aspx)). The Register independently reported the same lineage more than a year earlier, describing Parallel Data Warehouse as based on "large-scale data-analysis software [Microsoft] bought in 2008 with DataAllegro," running on the Ingres database engine, and noted expanding hardware-partner support from Bull, Dell, HP and IBM ([The Register](https://www.theregister.com/2009/11/03/microsoft_sql_server_08_r2_ctp_2/)). In April 2014, Microsoft rebranded Parallel Data Warehouse as the Analytics Platform System, adding Hadoop-based capability through PolyBase to the same appliance architecture ([Microsoft](https://www.microsoft.com/en-us/sql-server/blog/2014/04/23/introducing-the-microsoft-analytics-platform-system-the-turnkey-appliance-for-big-data-analytics/)).

## What this profile does not claim

This profile does not disclose the acquisition's financial terms, which neither company made public. It does not independently verify DATAllegro's funding history before its 2006 Series C round — including whether earlier Series A or B rounds took place — because no independently verifiable source describing them could be found. Sources give differing dates for the exact Parallel Data Warehouse-to-Analytics Platform System rebrand (see "What we could not verify," below), and this profile does not resolve that discrepancy. It also does not trace, beyond what Redmond Magazine's and The Register's contemporary reporting describe, the technical detail of how Microsoft's engineers reworked DATAllegro's original Ingres-and-Linux architecture into a Windows-and-SQL-Server-based product.
