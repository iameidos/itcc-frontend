export type InformasiCategory = 'standar-iso' | 'peraturan-perundangan';

export interface InformasiItem {
  slug: string;
  code: string;
  title: string;
  image: string;
  desc: string;
  date?: string;
  accountPublisher?: string;
  category: InformasiCategory;
}
