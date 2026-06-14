import { SitemapSection } from '@/types/sitemap.types';
import { BookOpen, FileText, Home, Layers, Newspaper, Shield } from 'lucide-react';

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
    items: [{ label: 'Daftar Berita', href: '/berita' }],
  },
  {
    id: 'layanan',
    title: 'Layanan Kami',
    icon: Layers,
    items: [{ label: 'Daftar Layanan', href: '/layanan' }],
  },
  {
    id: 'others',
    title: 'Lainnya',
    icon: BookOpen,
    items: [{ label: 'Daftar Lainnya', href: '#' }],
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
