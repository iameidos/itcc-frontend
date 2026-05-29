import { sitemapSlugs } from '@/lib/config/sitemap.config';
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'http://localhost:3000';

  const sitemapLines = sitemapSlugs.map((slug) => `Sitemap: ${baseUrl}/api/sitemap-${slug}`).join('\n');

  const robots = `
User-agent: *
Allow: /
Crawl-delay: 2

Disallow: /admin
Disallow: /api/private

Sitemap: ${baseUrl}/api/sitemap
${sitemapLines}
  `.trim();

  return new NextResponse(robots, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
