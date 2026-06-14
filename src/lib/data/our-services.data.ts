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

export const ourServicesData: OurServicesItem[] = [
  {
    code: 'ISO 9001',
    slug: 'iso-9001-quality-management-system',
    title: 'Quality Management System',
    desc: 'ISO 9001 adalah suatu standar tentang sistem manajemen  mutu yang penerapannya di organisasi dimaksudkan untuk meningkatkan mutu produk dan layanan, sehingga pada akhirnya akan meningkatkan kinerja organisasi dan kepuasan pelanggan. Standar ini memberikan kerangka kerja bagi organisasi untuk mengembangkan, menerapkan, memantau dan terus meningkatkan sistem manajemen mutu dan pemenuhan peraturan perundang - undangan yang berlaku dan persyaratan lainnya. Penerapan sistem manajemen mutu adalah keputusan strategis bagi organisasi yang bercita-cita untuk meningkatkan kinerja organisasi dan kepuasan pelanggan  secara keseluruhan dan memberikan dasar yang kuat untuk inisiatif pengembangan  berkelanjutan. Standar ini membantu organisasi untuk merencanakan proses, interaksi, dan memiliki pemikiran berbasis risiko. Dengan disertifikasi ISO 9001, berarti organisasi anda telah mendapatkan sertifikat yang diakui secara global dalam bidang sistem manajemen mutu, hal ini membuktikan bahwa organisasi anda telah meningkatkan mutu produk dan layanannya. Organisasi anda juga akan mendapatkan keunggulan kompetitif berupa meningkatnya reputasi merek dan kapasitas organisasi.',
    date: '',
    image: '/images/service/service-iso-9001.jpg',
    category: 'LSSM',
  },
  {
    code: 'ISO 37001',
    slug: 'iso-37001-sistem-manajemen-anti-penyuapan',
    title: 'Sistem Manajemen Anti Penyuapan',
    desc: 'ISO 37001 adalah suatu standar tentang sistem manajemen anti-penyuapan yang penerapannya di organisasi dimaksudkan untuk menanamkan budaya anti-penyuapan dan menerapkan pengendalian yang tepat, yang pada gilirannya akan meningkatkan kesempatan untuk mendeteksi dan mengurangi kejadian penyuapan sejak awal. Standar ini memberikan kerangka kerja bagi organisasi untuk mengembangkan, menerapkan, memantau dan terus meningkatkan sistem manajemen anti-penyuapan dan pemenuhan peraturan perundang - undangan yang berlaku dan persyaratan lainnya. Menerapkan sistem manajemen anti-penyuapan memerlukan kepemimpinan dan masukan dari manajemen puncak, komunikasi kebijakan dan program kepada semua staf dan pihak eksternal seperti kontraktor, pemasok dan mitra kerja sama sangat diperlukan. Cara ini akan membantu mengurangi risiko terjadinya penyuapan dan dapat menunjukkan kepada manajemen, karyawan, pemilik, penyandang dana, pelanggan, dan rekan bisnis lainnya bahwa organisasi anda telah menerapkan praktik yang baik (good practice) dalam pengendalian anti-penyuapan yang diakui secara internasional.',
    image: '/images/service/service-iso-37001.jpg',
    date: '2021',
    category: 'LSSM',
  },
  {
    code: 'ISO 14001',
    slug: 'iso-14001-sistem-manajemen-lingkungan',
    title: 'Sistem Manajemen Lingkungan',
    desc: 'ISO 14001 adalah suatu standar tentang sistem manajemen lingkungan yang penerapannya di organisasi dimaksudkan untuk mengendalikan dampak lingkungan sehingga pada akhirnya akan meningkatkan kinerja lingkungan dan meningkatkan efisiensi operasional. Standar ini memberikan kerangka kerja bagi organisasi untuk mengembangkan, menerapkan, memantau dan terus meningkatkan sistem manajemen lingkungan dan pemenuhan peraturan perundang - undangan yang berlaku dan persyaratan lainnya. Dengan disertifikasi ISO 14001, berarti organisasi anda telah mendapatkan sertifikat yang diakui secara global dalam bidang sistem manajemen lingkungan, hal ini membuktikan bahwa organisasi anda telah menerapkan sistem yang tidak hanya mengurangi dampak lingkungan tetapi juga mengurangi biaya dan meningkatkan efisiensi dalam organisasi.',
    image: '/images/service/service-iso-14001.jpg',
    date: '',
    category: 'LSSM',
  },
  {
    code: 'ISO 45001',
    slug: 'iso-45001-sistem-manajemen-kesehatan-dan-keselamatan-kerja',
    title: 'Sistem Manajemen Kesehatan dan Keselamatan Kerja',
    desc: 'ISO 45001 adalah suatu standar tentang sistem manajemen kesehatan dan keselamatan kerja yang penerapannya di organisasi dimaksudkan untuk mencegah cedera di tempat kerja, kesehatan yang buruk, dan kematian, sehingga pada akhirnya akan meningkatkan kinerja organisasi dan menjadi standar “selanjutnya” bagi kesehatan dan keselamatan kerja. Standar ini memberikan kerangka kerja bagi organisasi untuk mengembangkan, menerapkan, memantau dan terus meningkatkan sistem manajemen kesehatan dan keselamatan kerja dan pemenuhan peraturan perundang - undangan yang berlaku dan persyaratan lainnya. Dengan disertifikasi ISO 45001, berarti organisasi anda telah mendapatkan sertifikat yang diakui secara global dalam bidang sistem manajemen kesehatan dan keselamatan kerja, hal ini membuktikan bahwa organisasi anda memahami kebijakan dan proses yang diperlukan untuk mengurangi cedera kerja. Organisasi juga akan mendapatkan keunggulan kompetitif berupa meningkatnya reputasi merek dan kapasitas organisasi Anda.',
    image: '/images/service/service-iso-45001_2021.jpg',
    date: '2021',
    category: 'LSSM',
  },
  {
    code: 'ISO 27001',
    slug: 'iso-27001-sistem-manajemen-keamanan-informasi',
    title: 'Sistem Manajemen Keamanan Informasi',
    desc: 'ISO 27001 adalah suatu standar sistem manajemen keamanan informasi yang penerapannya diorganisasi dimaksudkan untuk mengelola resiko terhadap keamanan informasi. Standar ini memberikan kerangka kerja bagi organisasi untuk mengembangkan, menerapkan, memantau dan terus meningkatkan sistem manajemen keamanan informasi dan pemenuhan peraturan perundang - undangan yang berlaku dan persyaratan lainnya. Informasi adalah salah satu asset penting dan sangat berharga bagi kelangsungan hidup bisnis dan disajikan dalam berbagai format berupa : catatan, lisan, elektronik, pos, dan audio visual. Oleh karena itu, manajemen informasi penting untuk meningkatkan kesuksusesan yang kompetitif dalam semua sektor ekonomi. Tujuan manajemen informasi adalah untuk melindungi kerahasiaan, integritas dan ketersediaan informasi.',
    image: '/images/service/service-iso-27001_2022.jpg',
    date: '2022',
    category: 'LSSM',
  },
  {
    code: 'ISO 50001',
    slug: 'iso-50001-sistem-manajemen-energi',
    title: 'Sistem Manajemen Energi',
    desc: 'ISO 50001 adalah suatu standar tentang sistem manajemen energi yang penerapannya di organisasi dimaksudkan untuk mengendalikan energi lebih efesien, sehingga pada akhirnya akan mengurangi biaya energi dan meningkatkan keberlangsungan bisnis. Standar ini memberikan kerangka kerja bagi organisasi untuk mengembangkan, menerapkan, memantau dan terus meningkatkan sistem manajemen energi dan pemenuhan peraturan perundang - undangan yang berlaku dan persyaratan lainnya. Energi sangat penting untuk operasi organisasi dan dapat mengakibatkan biaya besar terlepas dari aktivitasnya. Manajemen Energi memberikan panduan tentang penggunaan energi di seluruh rantai pasokan organisasi, dari bahan baku hingga daur ulang. Selain biaya, penggunaan energi juga berkontribusi terhadap perubahan iklim. Menimbang bahwa pencarian sumber energi alternatif dapat menghabiskan waktu; setiap organisasi harus bercita-cita untuk mengurangi konsumsi dan penggunaan energi. Selain itu, organisasi harus berupaya meningkatkan kesadaran karyawan terhadap konservasi energi.',
    image: '/images/service/service-iso-50001_2021.jpg',
    date: '2021',
    category: 'LSSM',
  },
  {
    code: 'ISO 22000',
    slug: 'iso-22000-sistem-manajemen-keamanan-pangan',
    title: 'Sistem Manajemen Keamanan Pangan',
    desc: 'ISO 22000 adalah suatu standar tentang sistem manajemen  keamanan pangan yang penerapannya di organisasi dimaksudkan untuk membantu meminimalkan dan mengendalikan risiko bahaya makanan, mencegah kontaminasi dan meningkatkan kinerja organisasi yang terkait dengan keamanan pangan. Standar ini memberikan kerangka kerja bagi organisasi untuk mengembangkan, menerapkan, memantau dan terus meningkatkan sistem manajemen keamanan pangan, atau (Food Safety Management System) FSMS serta  memenuhi semua peraturan perundang - undangan dan persyaratan lain terkait keamanan pangan yang berlaku. Dengan disertifikasi ISO 22000, berarti organisasi anda telah mendapatkan sertifikat yang diakui secara global dalam bidang sistem manajemen keamanan pangan, hal ini membuktikan bahwa organisasi anda telah mengendalikan keamanan pangan dan kepatuhan terhadap pemenuhan peraturan perundang - undangan dan persyaratan lain terkait keamanan pangan yang berlaku.',
    image: '/images/service/service-iso-22000.jpg',
    date: '',
    category: 'LSSM',
  },
  {
    code: 'ISO 13485',
    slug: 'iso-13485-sistem-manajemen-peralatan-medis',
    title: 'Sistem Manajemen Peralatan Medis',
    desc: 'ISO 13485 adalah suatu standar tentang sistem manajemen  mutu  peralatan medis. Standar ini memberikan kerangka kerja bagi organisasi untuk mengembangkan, menerapkan, memantau dan terus meningkatkan sistem manajemen mutu peralatan medis dan pemenuhan peraturan perundang - undangan yang berlaku dan persyaratan lainnya. Tujuan dari ISO 13485 adalah menghasilkan proses produksi alat kesehatan  yang aman untuk pelanggan. Melalui serangkaian proses standar mutu meliputi konsistensi desain, pengembangan, produksi, instalasi, dan pengiriman alat kesehatan ke pelanggan langsung atau distributor. Melalui ISO 13485 pencegahan pelepasan alat kesehatan serta penyalahgunaannya dapat diterapkan. Dengan disertifikasi ISO 13485, berarti organisasi anda telah mendapatkan sertifikat yang diakui secara global dalam bidang sistem manajemen mutu peralatan medis, hal ini membuktikan bahwa organisasi anda telah mampu menyediakan perangkat medis yang aman dan kompeten serta mencapai kepercayaan pelanggan.',
    image: '/images/service/service-iso-13485.jpg',
    date: '',
    category: 'LSSM',
  },
  {
    code: 'ISO/TS 16949 2009',
    slug: 'iso-ts-16949-sistem-manajemen-kualitas-otomotif',
    title: 'Sistem Manajemen Kualitas Otomotif',
    desc: 'ISO / TS 16949 dikembangkan bersama oleh anggota The International Automotive Task Force (IATF) dan diserahkan ke Organisasi Internasional untuk Standardisasi (ISO) untuk persetujuan dan publikasi. Dokumen tersebut merupakan persyaratan sistem mutu otomotif yang umum berdasarkan ISO 9001: 2008, dan persyaratan khusus pelanggan dari sektor otomotif.',
    image: '/images/service/service-iso-ts-16949.jpg',
    date: '2009',
    category: 'LSSM',
  },
];
