import { informasiData } from '../data/informasi.data';

export function getInformasiBySlug(slug: string) {
  return informasiData.find((item) => item.slug === slug);
}

export function getInformasiByCategory(category: string) {
  return informasiData.filter((item) => item.category === category);
}

export function getAllInformasi() {
  return informasiData;
}

export function getRelatedInformasi(slug: string, limit = 3) {
  const current = informasiData.find((item) => item.slug === slug);
  if (!current) return [];

  return informasiData.filter((item) => item.slug !== slug && item.category === current.category).slice(0, limit);
}
