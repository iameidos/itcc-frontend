export type CategoryISO = 'LSPr' | 'LSSM' | 'LSUHK';

export interface OurServicesItem {
  code: string;
  slug: string;
  title: string;
  desc: string;
  date: string;
  image: string;
  category: CategoryISO;
}
