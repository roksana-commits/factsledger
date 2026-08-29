import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Source tiers, mirroring the published source policy.
 *
 * There is deliberately NO tier 4. Directories, scraped sites, AI-generated
 * pages and SEO spam are not citable here, so the schema gives them no home:
 * if one is added to a profile the build fails instead of quietly shipping.
 */
const sourceTier = z.enum([
  'tier1', // government, courts, major newspapers, academic publishers, awarding bodies
  'tier2', // established specialist, industry and local press; professional bodies
  'tier3', // smaller specialist outlets and self-published expert sources
  'first-party', // the subject's own website, filings or announcements
]);

const source = z.object({
  title: z.string(),
  url: z.string().url(),
  publisher: z.string(),
  tier: sourceTier,
  date: z.string().optional(),
  /** What this source is actually being used to support. Keeps citations honest. */
  usedFor: z.string(),
});

/** One row of the key-facts box. */
const fact = z.object({
  label: z.string(),
  value: z.string(),
  /** true = stated by the subject about itself; rendered with a first-party marker. */
  firstParty: z.boolean().default(false),
});

const baseProfile = z.object({
  title: z.string(),
  /** Used for A–Z ordering, e.g. "Rai, Chhatra Mani". Falls back to title. */
  sortTitle: z.string().optional(),
  /** One or two sentences. Used for <meta description> and listing pages. */
  summary: z.string().min(40).max(300),
  entityType: z.enum([
    'School',
    'University',
    'College',
    'Person',
    'Organization',
    'TrainStation',
    'ReligiousSite',
    'Hospital',
    'Place',
  ]),
  country: z.string(),
  location: z.string().optional(),
  established: z.string().optional(),
  facts: z.array(fact).default([]),
  timeline: z
    .array(z.object({ year: z.string(), event: z.string(), sourceType: z.string().optional() }))
    .default([]),
  sources: z.array(source).min(1),
  /** Shown in the source-quality box at the top of the profile. */
  sourceNote: z.string().optional(),
  /** Claims that could not be verified, stated openly rather than dropped silently. */
  openItems: z.array(z.string()).default([]),
  related: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  author: z.string().default('Muhammad'),
  published: z.coerce.date(),
  lastUpdated: z.coerce.date(),
  draft: z.boolean().default(false),
});

/**
 * A profile must rest on at least one tier 1 or tier 2 source.
 * A page built only from the subject's own website is a listing, not a profile.
 */
const profileSchema = baseProfile.superRefine((data, ctx) => {
  const independent = data.sources.filter((s) => s.tier === 'tier1' || s.tier === 'tier2');
  if (independent.length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['sources'],
      message:
        'A profile needs at least one tier1 or tier2 source. First-party and tier3 sources alone are not enough to publish an entity profile.',
    });
  }
});

const makeCollection = (dir: string) =>
  defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: `./src/content/${dir}` }),
    schema: profileSchema,
  });

export const collections = {
  schools: makeCollection('schools'),
  universities: makeCollection('universities'),
  people: makeCollection('people'),
  organizations: makeCollection('organizations'),
  places: makeCollection('places'),
};
