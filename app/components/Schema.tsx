// app/components/Schema.tsx
//
// Unified JSON-LD schema component for Playhouse.io.
//
// Renders Product + Review + AggregateRating for individual reviews,
// ItemList for comparison/roundup guides, FAQPage for FAQ sections,
// BreadcrumbList for nav hierarchy, and Organization/WebSite for the site root.
//
// All schema is injected as a single <script type="application/ld+json">
// tag. Google, Perplexity, ChatGPT and Claude all parse this reliably.

import React from 'react';

// ---------- Types ----------

export type ProductReview = {
  name: string;              // e.g. "Miyoo Mini Plus"
  brand: string;             // e.g. "Miyoo"
  image: string;             // absolute URL
  description: string;       // 1-2 sentence summary
  sku?: string;
  gtin?: string;
  price?: string;            // e.g. "59.99"
  priceCurrency?: string;    // e.g. "GBP"
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  affiliateUrl: string;      // Amazon UK link
  reviewRating: number;      // 1-5
  reviewAuthor: string;      // e.g. "Matthew Myles"
  reviewBody: string;        // your verdict paragraph
  datePublished: string;     // ISO date
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
};

export type ListItem = {
  name: string;
  url: string;               // absolute URL to the review page
  position: number;
  image?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type ArticleMeta = {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
};

// ---------- Builders ----------

const SITE_URL = 'https://playhouse.io';
const SITE_NAME = 'Playhouse.io';

function buildProductReview(p: ProductReview) {
  const offers = p.price
    ? {
        '@type': 'Offer',
        price: p.price,
        priceCurrency: p.priceCurrency ?? 'GBP',
        availability: `https://schema.org/${p.availability ?? 'InStock'}`,
        url: p.affiliateUrl,
      }
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    brand: { '@type': 'Brand', name: p.brand },
    image: p.image,
    description: p.description,
    ...(p.sku && { sku: p.sku }),
    ...(p.gtin && { gtin: p.gtin }),
    ...(offers && { offers }),
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: p.reviewRating,
        bestRating: 5,
        worstRating: 1,
      },
      author: { '@type': 'Person', name: p.reviewAuthor },
      reviewBody: p.reviewBody,
      datePublished: p.datePublished,
      publisher: { '@type': 'Organization', name: SITE_NAME },
    },
    ...(p.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: p.aggregateRating.ratingValue,
        reviewCount: p.aggregateRating.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };
}

function buildItemList(name: string, description: string, items: ListItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: items.length,
    itemListElement: items.map((i) => ({
      '@type': 'ListItem',
      position: i.position,
      name: i.name,
      url: i.url,
      ...(i.image && { image: i.image }),
    })),
  };
}

function buildFaqPage(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

function buildBreadcrumbs(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((b, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: b.name,
      item: b.url,
    })),
  };
}

function buildArticle(a: ArticleMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.headline,
    description: a.description,
    image: a.image,
    author: { '@type': 'Person', name: a.author },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.ico` },
    },
    datePublished: a.datePublished,
    ...(a.dateModified && { dateModified: a.dateModified }),
    mainEntityOfPage: { '@type': 'WebPage', '@id': a.url },
    url: a.url,
  };
}

function buildOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    sameAs: [
      // add social profiles here as you launch them
    ],
  };
}

function buildWebSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

// ---------- Component ----------

type SchemaProps = {
  product?: ProductReview;
  itemList?: {
    name: string;
    description: string;
    items: ListItem[];
  };
  article?: ArticleMeta;
  faq?: FaqItem[];
  breadcrumbs?: BreadcrumbItem[];
  organization?: boolean;
  website?: boolean;
};

export default function Schema({
  product,
  itemList,
  article,
  faq,
  breadcrumbs,
  organization,
  website,
}: SchemaProps) {
  const blocks: object[] = [];

  if (organization) blocks.push(buildOrganization());
  if (website) blocks.push(buildWebSite());
  if (breadcrumbs) blocks.push(buildBreadcrumbs(breadcrumbs));
  if (article) blocks.push(buildArticle(article));
  if (product) blocks.push(buildProductReview(product));
  if (itemList) blocks.push(buildItemList(itemList.name, itemList.description, itemList.items));
  if (faq) blocks.push(buildFaqPage(faq));

  if (blocks.length === 0) return null;

  // Google allows either a single object or an array. Array is simpler for composition.
  const payload = blocks.length === 1 ? blocks[0] : blocks;

  return (
    <script
      type="application/ld+json"
      // JSON.stringify with no indentation keeps payload small
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
