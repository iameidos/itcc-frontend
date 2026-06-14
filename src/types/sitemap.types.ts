import { LucideIcon } from 'lucide-react';

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
