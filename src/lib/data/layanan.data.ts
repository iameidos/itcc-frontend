import { LucideIcon } from 'lucide-react';

export interface LayananItem {
  code: string;
  slug: string;
  title: string;
  desc: string;
  date: string;
  image: string;
  icon: LucideIcon;
}

import { PackageOpen, FileArchive, Handshake, ClipboardCheck, GraduationCap, SearchCheck, BadgeCheck, Layers, ShieldCheck, FileText, Eye } from 'lucide-react';

export const layanansData: LayananItem[] = [
  {
    code: 'Penyimpanan Dokumen',
    slug: 'penyimpanan-dokumen-iso',
    title: 'Penyimpanan Dokumen ISO',
    desc: 'Platform ini dirancang untuk membantu organisasi mengelola dokumen secara lebih efisien melalui sistem penyimpanan digital yang terstruktur, aman, dan mudah diakses. Dengan arsitektur berbasis cloud, setiap file tersinkron otomatis dan dapat diakses kapan saja tanpa batasan perangkat, memastikan alur kerja tetap lancar dan kolaborasi berjalan tanpa hambatan. Solusi ini tidak hanya meningkatkan kecepatan akses data, tetapi juga memberikan kontrol penuh melalui fitur keamanan tingkat lanjut, sehingga tim dapat bekerja lebih cepat, lebih rapi, dan lebih terukur.',
    date: '2026-01-10',
    image: '/images/services/penyimpanan-dokumen-iso.jpg',
    icon: PackageOpen,
  },
  {
    code: 'Tata Cara Akses',
    slug: 'tata-cara-akses-dokumen',
    title: 'Tata Cara Akses Dokumen ISO',
    desc: 'Tim Konsultan Kami akan memberikan akun User Akses terhadap pelanggan yang berhak mengakses dokumen di platform e-documentiso ini.',
    date: '2026-01-10',
    image: '/images/services/tata-cara-akses-dokumen.jpg',
    icon: FileArchive,
  },
  {
    code: 'Layanan-01',
    slug: 'konsultasi-iso',
    title: 'Konsultasi Sertifikasi ISO',
    desc: 'Pendampingan lengkap untuk membantu organisasi memenuhi persyaratan standar ISO.',
    date: '2026-01-10',
    image: '/images/services/konsultasi-iso.jpg',
    icon: Handshake,
  },
  {
    code: 'Layanan-02',
    slug: 'audit-internal',
    title: 'Audit Internal',
    desc: 'Audit internal profesional untuk memastikan kesesuaian dan efektivitas sistem manajemen.',
    date: '2026-01-10',
    image: '/images/services/image-.jpg',
    icon: ClipboardCheck,
  },
  {
    code: 'Layanan-03',
    slug: 'pelatihan-iso',
    title: 'Pelatihan ISO',
    desc: 'Program pelatihan ISO untuk meningkatkan kompetensi tim dalam memahami standar internasional.',
    date: '2026-01-10',
    image: '/images/services/image-.jpg',
    icon: GraduationCap,
  },
  {
    code: 'Layanan-04',
    slug: 'gap-analysis',
    title: 'Gap Analysis',
    desc: 'Analisis kesenjangan untuk mengidentifikasi area yang perlu ditingkatkan sebelum sertifikasi.',
    date: '2026-01-10',
    image: '/images/services/image-.jpg',
    icon: SearchCheck,
  },
  {
    code: 'Layanan-05',
    slug: 'pendampingan-sertifikasi',
    title: 'Pendampingan Sertifikasi',
    desc: 'Pendampingan menyeluruh hingga organisasi siap menghadapi audit sertifikasi.',
    date: '2026-01-10',
    image: '/images/services/image-.jpg',
    icon: BadgeCheck,
  },
  {
    code: 'Layanan-06',
    slug: 'implementasi-sistem-manajemen',
    title: 'Implementasi Sistem Manajemen',
    desc: 'Implementasi sistem manajemen mutu, lingkungan, K3, dan lainnya.',
    date: '2026-01-10',
    image: '/images/services/image-.jpg',
    icon: Layers,
  },
  {
    code: 'Layanan-07',
    slug: 'audit-kepatuhan',
    title: 'Audit Kepatuhan',
    desc: 'Audit kepatuhan untuk memastikan organisasi memenuhi regulasi dan standar industri.',
    date: '2026-01-10',
    image: '/images/services/image-.jpg',
    icon: ShieldCheck,
  },
  {
    code: 'Layanan-08',
    slug: 'penyusunan-dokumen',
    title: 'Penyusunan Dokumen ISO',
    desc: 'Pembuatan dokumen ISO lengkap sesuai kebutuhan organisasi.',
    date: '2026-01-10',
    image: '/images/services/image-.jpg',
    icon: FileText,
  },
  {
    code: 'Layanan-09',
    slug: 'surveillance-audit',
    title: 'Surveillance Audit',
    desc: 'Audit berkala untuk memastikan sistem manajemen tetap berjalan efektif.',
    date: '2026-01-10',
    image: '/images/services/image-.jpg',
    icon: Eye,
  },
];
