import { LucideIcon, Home, FileText, Newspaper, Layers, Shield, BookOpen } from 'lucide-react';

export interface SitemapItem {
  label: string;
  href: string;
}

export interface SitemapSection {
  id: string;
  title: string;
  icon: LucideIcon;
  items: SitemapItem[];
}

export const sitemapData: SitemapSection[] = [
  {
    id: 'main',
    title: 'Halaman Utama',
    icon: Home,
    items: [
      { label: 'Beranda', href: '/' },
      { label: 'Layanan', href: '/layanan' },
      { label: 'Informasi', href: '/nformasi' },
      { label: 'Berita', href: '/berita' },
      { label: 'Kontak', href: '/kontak' },
    ],
  },
  {
    id: 'informasi',
    title: 'Informasi ISO',
    icon: FileText,
    items: [
      { label: 'Daftar Informasi', href: '/informasi' },
      // detail pages auto-generated di halaman
    ],
  },
  {
    id: 'berita',
    title: 'Berita & Artikel',
    icon: Newspaper,
    items: [
      { label: 'Daftar Berita', href: '/berita' },
      // detail pages auto-generated di halaman
    ],
  },
  {
    id: 'layanan',
    title: 'Layanan Kami',
    icon: Layers,
    items: [
      { label: 'Daftar Layanan', href: '/layanan' },
      // detail pages auto-generated di halaman
    ],
  },
  {
    id: 'others',
    title: 'Lainnya',
    icon: BookOpen,
    items: [
      { label: 'Daftar Lainnya', href: '#' },
      // detail pages auto-generated di halaman
    ],
  },
  {
    id: 'legal',
    title: 'Dokumen Legal',
    icon: Shield,
    items: [
      { label: 'Terms of Service', href: '/legal/terms-of-service' },
      { label: 'Privacy Policy', href: '/legal/privacy-policy' },
      { label: 'Cookie Policy', href: '/legal/cookie-policy' },
      { label: 'Refund Policy', href: '/legal/refund-policy' },
      { label: 'Disclaimer', href: '/legal/disclaimer' },
      { label: 'Security Policy', href: '/legal/security-policy' },
    ],
  },
];
