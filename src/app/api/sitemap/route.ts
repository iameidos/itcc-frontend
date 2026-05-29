// Main sitemap for Google Access

import { NextResponse } from 'next/server';

export async function GET() {
  const sitemapUrls = [
    'http://localhost:3000/api/sitemap-pages',
    'http://localhost:3000/api/sitemap-berita',
    'http://localhost:3000/api/sitemap-informasi',
    'http://localhost:3000/api/sitemap-layanan',
    'http://localhost:3000/api/sitemap-legal',
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapUrls.map((url) => `<sitemap><loc>${url}</loc></sitemap>`).join('\n')}
  </sitemapindex>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
