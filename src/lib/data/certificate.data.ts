export type CategoryCertificate = 'iso-9001' | 'iso-14001' | 'iso-37001' | 'iso-45001' | 'iso-27001' | 'haccp';

export interface CertificateItem {
  slug: string;
  scheme: string;
  clientName: string;
  certificateNumber: string;
  scope: string;
  image: string;
  initialCertDate: Date;
  endCertDate: Date;
  surv1Date: Date;
  surv2Date: Date;
  locationNumber: number;
  category: CategoryCertificate;
}

export const certificateData = [
  {
    slug: 'iso-9001-2015',
    scheme: 'ISO 9001:2015',
    clientName: 'PT. ADIQUATRO ELEKTRIKINDO PERKASA',
    certificateNumber: '4157667',
    image: '/images/informasi/img-iso-9001-2015.jpg',
    scope: 'Mechanical, Electrical, Civil, Engineering Supply and Construction, Renewable Energy and Power Solution',
    initialCertDate: 'February 27, 2026',
    endCertDate: 'February 27, 2029',
    surv1Date: 'January 26, 2027',
    surv2Date: 'January 26, 2028',
    locationNumber: '1',
    category: 'iso-9001',
  },
  {
    slug: 'iso-14001-2015',
    scheme: 'ISO 14001:2015',
    title: 'Sistem Manajemen Lingkungan',
    certificateNumber: 'EMS-SSA25049',
    image: '/images/informasi/img-iso-14001-2015.jpg',
    scope:
      'ISO 14001 adalah alat manajemen strategis yang digunakan organisasi untuk mengelola tanggung jawab lingkungan secara sistematis, meningkatkan kinerja lingkungan, mematuhi peraturan hukum yang berlaku, dan mencapai tujuan keberlanjutan (sustainability). Ini mencakup identifikasi, pengendalian, dan pengurangan dampak lingkungan dari aktivitas, produk, atau jasa secara efektif.',
    initialCertDate: 'January 20, 2026',
    endCertDate: 'January 20, 2029',
    surv1Date: 'December 19, 2027',
    surv2Date: 'December 19, 2028',
    locationNumber: '1',
    category: 'iso-9001',
  },
  {
    slug: 'iso-45001-2018',
    scheme: 'ISO 45001:2018',
    title: 'Keselamatan & Kesehatan Kerja',
    certificateNumber: 'EMS-SSA25050',
    image: '/images/informasi/img-iso-45001-2018.jpg',
    scope:
      'ISO 45001 adalah alat manajemen strategis yang digunakan organisasi untuk menyediakan tempat kerja yang aman dan sehat, mencegah cedera dan penyakit akibat kerja, serta meningkatkan kinerja Kesehatan dan Keselamatan Kerja (K3) secara proaktif dan berkelanjutan.',
    initialCertDate: 'April 26, 2026',
    endCertDate: 'April 26, 2029',
    surv1Date: 'March 25, 2027',
    surv2Date: 'March 25, 2028',
    locationNumber: '1',
    category: 'iso-14001',
  },
  {
    slug: 'iso-27001-2022',
    scheme: 'ISO 27001:2022',
    title: 'Keamanan Informasi',
    certificateNumber: 'EMS-SSA25051',
    image: '/images/informasi/img-iso-27001-2022.jpg',
    scope:
      'ISO 27001 adalah alat manajemen strategis yang digunakan organisasi untuk melindungi kerahasiaan, integritas, dan ketersediaan data sensitif dari ancaman siber, serta mengelola risiko keamanan secara komprehensif.',
    initialCertDate: 'May 26, 2026',
    endCertDate: 'May 26, 2029',
    surv1Date: 'April 25, 2027',
    surv2Date: 'April 25, 2028',
    locationNumber: '1',
    category: 'iso-45001',
  },
  {
    slug: 'iso-37001-2025',
    scheme: 'ISO 37001:2025',
    title: 'Anti Penyuapan',
    certificateNumber: 'EMS-SSA25052',
    image: '/images/informasi/img-iso-37001-2025.jpg',
    scope:
      'ISO 37001 adalah alat manajemen strategis yang digunakan organisasi untuk mencegah, mendeteksi, dan menanggapi penyuapan, memastikan kepatuhan hukum, serta membangun budaya anti-suap yang kuat, memberikan kredibilitas dan perlindungan hukum, meskipun tidak menjamin pencegahan total, namun meminimalkan risiko secara proporsional.',
    initialCertDate: 'June 16, 2026',
    endCertDate: 'June 16, 2029',
    surv1Date: 'May 15, 2027',
    surv2Date: 'May 15, 2028',
    locationNumber: '1',
    category: 'iso-27001',
  },
];
