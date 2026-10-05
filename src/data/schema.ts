import { site } from './site';

export const breadcrumb = (origin: string, name: string, path: string) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: new URL('/', origin).href },
    { '@type': 'ListItem', position: 2, name, item: new URL(path, origin).href },
  ],
});

export const faqPage = (items: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
});

export const orgRef = (origin: string) => ({ '@id': new URL('/#organization', origin).href });
export const area = { '@type': 'City', name: site.area };
