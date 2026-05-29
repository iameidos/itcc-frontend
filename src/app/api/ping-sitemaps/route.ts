import { NextResponse } from 'next/server';
import { sitemapList } from '@/lib/config/sitemap.config';
import { log } from '@/lib/utils/logger';

async function ping(url: string) {
  try {
    const google = await fetch(`https://www.google.com/ping?sitemap=${url}`);
    const bing = await fetch(`https://www.bing.com/ping?sitemap=${url}`);
    const baidu = await fetch(`http://ping.baidu.com/ping?sitemap=${url}`);

    log('info', 'Ping success', {
      url,
      googleStatus: google.status,
      bingStatus: bing.status,
      baiduStatus: baidu.status,
    });

    return { success: true };
  } catch (err) {
    log('error', 'Ping failed', { url, error: String(err) });
    return { success: false };
  }
}

export async function GET() {
  const baseUrl = 'http://localhost:3000';

  log('info', 'Cron started');

  const results = [];

  for (const path of sitemapList) {
    const sitemapUrl = `${baseUrl}${path}`;
    const result = await ping(sitemapUrl);
    results.push({ sitemapUrl, ...result });
  }

  log('info', 'Cron finished', { results });

  return NextResponse.json({
    success: true,
    results,
  });
}
