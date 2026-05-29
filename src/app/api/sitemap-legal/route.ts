import { getSlugsFromFolder } from '@/lib/utils/getSlugFromFolder';
import { NextResponse } from 'next/server';

export async function GET() {
  const slugs = getSlugsFromFolder('legal');

  const urls = slugs.map(
    (slug) => `
    <url>
      <loc>http://localhost:3000/legal/${slug}</loc>
    </url>
  `,
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('\n')}
  </urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
