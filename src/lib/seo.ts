import config from "@/data/game.config.json";

export type BreadcrumbItem = {
  name: string;
  item: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${config.seo.baseUrl}${normalizedPath === "/" ? "/" : normalizedPath}`;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function buildFAQSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildVideoGameSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: config.game.name,
    url: config.game.robloxUrl,
    applicationCategory: "Game",
    gamePlatform: "Roblox",
    genre: config.game.genre,
    publisher: {
      "@type": "Organization",
      name: config.game.developer,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${config.game.name} Wiki`,
    url: config.seo.baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${config.seo.baseUrl}/codes/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
