---
title: Documentation collections
description: A reader-centred plan for Finntegrate's practical guidance, system explainers, evidence, and service-improvement materials.
collection: shared-reference-layer
topics:
  - documentation
contentType: reference
sidebar:
  order: 1
---

## Purpose

Finntegrate is a public library for navigating life in Finland and improving the
systems people encounter. It serves three overlapping audiences:

- people moving to or living in Finland, who need trustworthy next steps;
- researchers, advocates, and journalists, who need traceable evidence and
  context; and
- public officials, service providers, and partners, who need to understand
  experiences and improve services.

The structure uses two complementary information-architecture practices:
**collections** describe the purpose of a document, and **shared facets** make
the same subject discoverable across collections. This allows a reader to start
with either their goal or their topic.

For example, a residence-permit topic can connect a practical guide, a system
explainer, a research brief, and a source record without treating them as the
same kind of document.

## Design principles

### Faceted discovery

Collection is one way to browse, not the only way to find material. The library
can use independent facets such as `topics`, `audiences`, `jurisdictions`,
`authorities`, `language`, `contentType`, and `status`. Readers can combine
these facets—for example, housing, Helsinki, and practical guidance—without
first knowing which collection contains the answer.

Topics can begin as freeform tags. Contributors check existing topic tags before
adding a new one, and changes go through normal PR review. A maintained
controlled vocabulary—with preferred labels, synonyms, and broader, narrower,
or related terms—can be introduced once enough real duplication across articles
makes it worthwhile. It can then help keep search, filters, topic hubs, and
future machine-assisted retrieval consistent as the library grows.

### Each page is a useful starting point

Readers may arrive from search, a shared link, a topic hub, or an AI-assisted
retrieval result rather than the documentation home page. Each published page
aims to stand on its own. It is helpful to state its purpose, intended reader,
jurisdiction, scope, and currentness; give the answer or next action early; and
link to the most relevant next material.

Pages remain connected through topic hubs, facets, and explicit related links,
but the aim is that no page relies on a reader having followed a particular path
first.

### Governance matches the material

The needs of a reusable dataset, a practical guide, and a contributed story are
different. A small common content model creates consistency, while collection
and content type can add safeguards, provenance, and permissions appropriate to
the material.

## Collections

### 1. Living in Finland

**Purpose:** help people take a next step in everyday life.

**Primary readers:** immigrants and their families.

This collection contains practical guides for preparing to move, registration,
housing, work, study, healthcare, family life, language learning, and daily
services. A guide states who it is for, prerequisites, the steps to take,
alternatives, official links, and when specialist help is appropriate.

### 2. Understanding systems

**Purpose:** make Finnish institutions and processes intelligible.

**Primary readers:** immigrants, community organisations, and public officials.

This collection contains plain-language explainers for municipalities,
wellbeing-services counties, employment services, social security, education,
residence pathways, and digital identity. It describes how a system is intended
to work, its roles and boundaries, and the practical implications for a reader.
It does not present interpretation as legal advice.

### 3. Research and evidence

**Purpose:** preserve and communicate what evidence shows about experiences and
service access.

**Primary readers:** researchers, advocates, journalists, and policymakers.

This collection contains research briefs, literature notes, evidence summaries,
methodology notes, and reusable datasets. It identifies methods, geography,
population, limitations, stewardship, and primary sources. Findings and the
team's recommendations are published as distinct statements.

### 4. Service improvement

**Purpose:** support organisations to make services more accessible, reliable,
and trustworthy.

**Primary readers:** public officials, service designers, and civil-society
partners.

This collection contains experience insights, service blueprints, language-access
patterns, partnership examples, implementation notes, and evaluation tools.
Each item distinguishes evidence observed in practice from an intervention being
proposed or tested. Identifiable case details are never published without
explicit consent.

### 5. Voices and participation

**Purpose:** make lived experience and participatory work visible on the terms
of the people who contribute it.

**Primary readers:** immigrants, communities, and collaborators.

This collection contains curated stories and participatory-research outputs. It
records consent, attribution preferences, sensitivity review, reuse permissions,
and any limits on interpretation. It complements rather than substitutes for the
evidence collection.

### 6. Shared reference layer

**Purpose:** maintain terms, sources, and policies used across the library.

This cross-cutting layer contains the glossary, source and citation policy,
editorial standards, and reusable reference records. It is not owned by a single
topic collection: a definition or source record is updated once and linked
wherever it is used.

It can also offer lightweight contributor guidance on keeping material current.
As a starting point, contributors may revisit immigration status, benefits,
health, legal rights, and service eligibility every 90 days and after a known
policy change; practical service guidance and system explainers about every six
months; and research summaries and service-improvement resources about every 12
months or when significant new evidence emerges. Datasets can be revisited with
each release, correction, or source update, and stories and participatory
outputs at publication and when consent or attribution changes. These are useful
prompts, not tracked frontmatter dates or an enforced schedule.

## Shared facets and topic hubs

Every document has a `topics` field, separate from its collection. Topics can
start as freeform tags such as `residence-permits`, `housing`, `employment`,
`healthcare`, and `language-learning`. They make related material findable even
when it has different purposes or audiences.

An established topic can have a hub page linking the relevant guides, explainers,
evidence, service-improvement material, and reference records. A hub is a
curated starting point, not a duplicate of its linked documents. This gives
readers an intentional route between practical guidance and the evidence or
context behind it.

## Content model

The following small frontmatter convention is enough to begin publishing. Four
fields are required: `title`, `description`, `collection`, and `topics`. Every
other field is encouraged when it adds useful context, but is optional. Values
used for filtering can become controlled lists later as the library grows.

| Field           | Use                  | Shape                                                                                                                                                                                                                                                                                            | Purpose                                                            |
| --------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `title`         | Required             | string                                                                                                                                                                                                                                                                                           | Stable human-readable title.                                       |
| `description`   | Required             | string                                                                                                                                                                                                                                                                                           | Plain-language summary for search and previews.                    |
| `collection`    | Required             | one of the six collections above                                                                                                                                                                                                                                                                 | States the document's primary purpose.                             |
| `topics`        | Required             | one or more tags                                                                                                                                                                                                                                                                                 | Connects material across collections.                              |
| `contentType`   | Encouraged, optional | value such as `guide`, `explainer`, `research-brief`, `literature-note`, `evidence-summary`, `methodology-note`, `dataset`, `experience-insight`, `service-blueprint`, `implementation-note`, `partnership-example`, `evaluation-tool`, `story`, `participatory-research-output`, or `reference` | Identifies the artifact.                                           |
| `audiences`     | Encouraged, optional | one or more values                                                                                                                                                                                                                                                                               | Identifies intended readers.                                       |
| `jurisdictions` | Encouraged, optional | one or more place or legal-scope identifiers                                                                                                                                                                                                                                                     | States where a claim or process applies.                           |
| `authorities`   | Encouraged, optional | one or more organisation identifiers                                                                                                                                                                                                                                                             | Names the bodies responsible for the process or service described. |
| `language`      | Encouraged, optional | BCP 47 language tag                                                                                                                                                                                                                                                                              | Identifies the document language.                                  |
| `steward`       | Encouraged, optional | one name                                                                                                                                                                                                                                                                                         | Names a person who can help maintain or correct the document.      |
| `published`     | Encouraged, optional | ISO 8601 date                                                                                                                                                                                                                                                                                    | Makes the publication date visible.                                |
| `sources`       | Encouraged, optional | list of a title, link, and optional date                                                                                                                                                                                                                                                         | Records useful supporting material.                                |
| `status`        | Encouraged, optional | `draft`, `published`, or `needs-update`                                                                                                                                                                                                                                                          | Communicates the document's working state.                         |
| `supersededBy`  | Encouraged, optional | stable URL                                                                                                                                                                                                                                                                                       | Directs readers to a replacement.                                  |

Documents can add type-specific fields without redefining the common fields.
The shared reference layer can hold vocabulary notes and definitions as they
become useful.

For guidance with significant consequences—such as immigration status, benefits,
health, legal rights, or service eligibility—contributors are encouraged to
include the relevant authorities and links to useful sources.

When named, a steward can help with review and correction. A steward is not a
substitute for the public body named in `authorities` as responsible for the
underlying service.

Introduce `translationGroup` when the first non-English translation is written,
and add a dataset profile when the first dataset is published. Until then, there
is no need to carry speculative fields or sections.

### Participatory-material governance

For material concerning Indigenous Peoples, knowledge, lands, or communities,
the [CARE Principles for Indigenous Data Governance](https://www.auckland.ac.nz/en/research/research-resources/research-data/research-data-policies-ethics-requirements/care-principles-indigenous-data.html)
apply: collective benefit, authority to control, responsibility, and ethics. In
practice, this means Indigenous rights-holders participate in decisions about
collection, access, use, and reuse.

For all contributed stories and participatory work, the steward agrees consent,
attribution, access, reuse, withdrawal, and harm-review processes with the
people involved. These protections are required in their own right; they should
not be described as CARE unless Indigenous data governance is involved.

## Currency, correction, and stable links

Published URLs are stable identifiers. When a page is renamed or restructured,
its previous URL redirects to the current page. A superseded page remains
available with a prominent link to its replacement unless there is a safety,
privacy, or legal reason to remove it.

When a contributor notices a material error or obsolete authority, they can
correct it, set its status to `needs-update`, or point to a replacement with
`supersededBy`. The status helps readers distinguish work in progress from
published guidance that needs attention.

## First publishing sequence

1. Publish the shared glossary, source policy, controlled vocabularies, and
   review policy.
2. Establish one topic hub and publish a guide plus a system explainer for that
   topic.
3. Add a research brief with methods, sources, and limitations.
4. Pilot one service-improvement resource with a public-sector partner.
5. Add participatory material after consent, safeguarding, and reuse processes
   are agreed.

This sequence tests the collection boundaries, topic navigation, metadata, and
review process before the library grows.
