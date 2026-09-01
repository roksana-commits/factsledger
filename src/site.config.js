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
  socialImage: '/images/factsledger-social.jpg',
  // Contact + legal
  email: 'contact@factsledger.com',
  correctionsEmail: 'corrections@factsledger.com',
  publisher: 'FactsLedger',
  locale: 'en',
  // Editorial
  founded: 2026,
  author: {
    name: 'Muhammad Abdullah Al Yasin',
    slug: 'muhammad',
    role: 'Research & Editorial',
    image: '/images/author-muhammad.jpg',
    social: {
      facebook: 'https://www.facebook.com/likhan1987',
    },
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
  {
    slug: 'events',
    label: 'Events & Documents',
    collection: 'events',
    blurb: 'Historical documents, declarations, battles and other dated events documented from independent and archival sources.',
  },
  {
    slug: 'creative-works',
    label: 'Creative Works',
    collection: 'creative-works',
    blurb: 'Novels, films, songs and other creative works with a documented real-world story — a controversy, a court case, a notable production history — beyond ordinary critical reception.',
  },
];

export const CATEGORY_BY_SLUG = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c]));
