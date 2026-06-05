export type CategoryCertificate = 'iso-9001' | 'iso-14001' | 'iso-37001' | 'iso-45001' | 'iso-27001' | 'haccp';

export interface CertificateItem {
  slug: string;
  code: string;
  title: string;
  image: string;
  desc: string;
  category: CategoryCertificate;
}

export const certificateData = [
  {
    slug: 'iso-9001-2015',
    code: 'ISO 9001:2015',
    title: 'Sistem Manajemen Mutu',
    image: '/images/informasi/img-iso-9001-2015.jpg',
    desc: 'ISO 9001 adalah alat manajemen strategis yang digunakan organisasi untuk meningkatkan kualitas produk/jasa secara konsisten, sehingga pada akhirnya akan meningkatkan kinerja organisasi dan kepuasan pelanggan.',
    category: 'iso-9001',
  },
  {
    slug: 'iso-14001-2015',
    code: 'ISO 14001:2015',
    title: 'Sistem Manajemen Lingkungan',
    image: '/images/informasi/img-iso-14001-2015.jpg',
    desc: 'ISO 14001 adalah alat manajemen strategis yang digunakan organisasi untuk mengelola tanggung jawab lingkungan secara sistematis, meningkatkan kinerja lingkungan, mematuhi peraturan hukum yang berlaku, dan mencapai tujuan keberlanjutan (sustainability). Ini mencakup identifikasi, pengendalian, dan pengurangan dampak lingkungan dari aktivitas, produk, atau jasa secara efektif.',
    category: 'iso-9001',
  },
  {
    slug: 'iso-45001-2018',
    code: 'ISO 45001:2018',
    title: 'Keselamatan & Kesehatan Kerja',
    image: '/images/informasi/img-iso-45001-2018.jpg',
    desc: 'ISO 45001 adalah alat manajemen strategis yang digunakan organisasi untuk menyediakan tempat kerja yang aman dan sehat, mencegah cedera dan penyakit akibat kerja, serta meningkatkan kinerja Kesehatan dan Keselamatan Kerja (K3) secara proaktif dan berkelanjutan.',
    category: 'iso-14001',
  },
  {
    slug: 'iso-27001-2022',
    code: 'ISO 27001:2022',
    title: 'Keamanan Informasi',
    image: '/images/informasi/img-iso-27001-2022.jpg',
    desc: 'ISO 27001 adalah alat manajemen strategis yang digunakan organisasi untuk melindungi kerahasiaan, integritas, dan ketersediaan data sensitif dari ancaman siber, serta mengelola risiko keamanan secara komprehensif.',
    category: 'iso-45001',
  },
  {
    slug: 'iso-37001-2025',
    code: 'ISO 37001:2025',
    title: 'Anti Penyuapan',
    image: '/images/informasi/img-iso-37001-2025.jpg',
    desc: 'ISO 37001 adalah alat manajemen strategis yang digunakan organisasi untuk mencegah, mendeteksi, dan menanggapi penyuapan, memastikan kepatuhan hukum, serta membangun budaya anti-suap yang kuat, memberikan kredibilitas dan perlindungan hukum, meskipun tidak menjamin pencegahan total, namun meminimalkan risiko secara proporsional.',
    category: 'iso-27001',
  },
  {
    slug: 'uu-ketenagakerjaan',
    code: 'UU No. 13 Tahun 2003',
    image: '/images/informasi/peraturan.jpg',
    title: 'Ketenagakerjaan',
    desc: 'Mengatur hubungan kerja, hak dan kewajiban pekerja serta perusahaan untuk menciptakan lingkungan kerja yang adil.',
    category: 'haccp',
  },
  {
    slug: 'uu-k3-1-1970',
    code: 'UU No. 1 Tahun 1970',
    image: '/images/informasi/image-.jpg',
    title: 'Keselamatan Kerja',
    desc: 'Landasan hukum utama terkait keselamatan dan kesehatan kerja di lingkungan industri.',
    category: 'haccp',
  },
  {
    slug: 'uu-lingkungan-32-2009',
    code: 'UU No. 32 Tahun 2009',
    image: '/images/informasi/image-.jpg',
    title: 'Perlindungan dan Pengelolaan Lingkungan Hidup',
    desc: 'Mengatur pengendalian pencemaran, pengelolaan limbah, dan perlindungan lingkungan.',
    category: 'iso-27001',
  },
  {
    slug: 'pp-k3-50-2012',
    code: 'PP No. 50 Tahun 2012',
    image: '/images/informasi/image-.jpg',
    title: 'SMK3',
    desc: 'Peraturan pemerintah tentang penerapan Sistem Manajemen K3 di perusahaan.',
    category: 'iso-27001',
  },
  {
    slug: 'uu-pangan-18-2012',
    code: 'UU No. 18 Tahun 2012',
    image: '/images/informasi/image-.jpg',
    title: 'Pangan',
    desc: 'Mengatur keamanan pangan, mutu, dan distribusi untuk melindungi konsumen.',
    category: 'iso-45001',
  },
];
