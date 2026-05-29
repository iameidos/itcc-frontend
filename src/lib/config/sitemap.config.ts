export const sitemapSlugs = ['pages', 'legal', 'layanan', 'informasi', 'berita', 'news', 'images'];

export const sitemapList = ['/api/sitemap', ...sitemapSlugs.map((slug) => `/api/sitemap-${slug}`)];
