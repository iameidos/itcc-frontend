import { NextResponse } from 'next/server';

const staticPages = ['/', '/layanan', '/informasi', '/berita', '/kontak'];

export async function GET() {
  const urls = staticPages.map(
    (path) => `
    <url>
      <loc>http://localhost:3000${path}</loc>
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
