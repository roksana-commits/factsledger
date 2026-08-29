/**
 * Single source of truth for site identity.
 * Change these values and they propagate everywhere:
 * header, footer, <title>, JSON-LD, sitemap, legal pages, contact page.
 */
export const SITE = {
  name: 'FactsLedger',
  tagline: 'Documented entities. Independent sources. Clear context.',
  description:
    'A source-backed reference for schools, universities, people, organizations and places. Every claim is linked to the source it rests on.',
  // Change this to your real domain before the first deploy.
  url: 'https://factsledger.com',
  // Contact + legal
  email: 'contact@factsledger.com',
  correctionsEmail: 'corrections@factsledger.com',
  publisher: 'FactsLedger',
  locale: 'en',
  // Editorial
  founded: 2026,
  author: {
    name: 'Muhammad',
    slug: 'muhammad',
    role: 'Research & Editorial',
  },
};

/** Entity categories. Add a category here and it appears in nav, homepage and sitemap. */
export const CATEGORIES = [
  {
    slug: 'schools',
    label: 'Schools',
    collection: 'schools',
    blurb: 'Primary and secondary schools documented from government records, award bodies and independent reporting.',
  },
  {
    slug: 'universities',
    label: 'Universities & Colleges',
    collection: 'universities',
    blurb: 'Universities and colleges documented from statutory records, regulators and independent reporting.',
  },
  {
    slug: 'people',
    label: 'People',
    collection: 'people',
    blurb: 'Individuals with a documented public record — educators, founders, researchers and public officials.',
  },
  {
    slug: 'organizations',
    label: 'Organizations',
    collection: 'organizations',
    blurb: 'Companies, institutions, NGOs and awarding bodies.',
  },
  {
    slug: 'places',
    label: 'Places',
    collection: 'places',
    blurb: 'Transport infrastructure, religious and cultural sites, and other documented locations.',
  },
];

export const CATEGORY_BY_SLUG = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c]));
