'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sitemapData } from '@/lib/data/sitemap.data';
import { informasiData } from '@/lib/data/informasi.data';
import { newsData } from '@/lib/data/news.data';
import { layanansData } from '@/lib/data/layanan.data';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { SearchInput } from '@/components/ui/search-input';

export default function SitemapPage() {
  const [query, setQuery] = useState('');
  const q = query.toLowerCase();
  const match = (text: string) => text.toLowerCase().includes(q);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-40 bg-linear-to-b bg-muted border-b border-muted shadow-md">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-semibold">Navigasi</p>
          <h1 className="text-3xl md:text-4xl font-bold my-4">Peta Situs</h1>
          <p className="text-sm">Jelajahi seluruh halaman dan konten yang tersedia di platform kami.</p>
        </div>
      </section>

      {/* Content */}
      <section className="pt-8 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Search Bar */}
          <div className="mb-8">
            <SearchInput placeholder="Cari halaman, layanan, berita, atau informasi..." value={query} onChange={setQuery} />
          </div>

          {/* MOBILE: Accordion */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {sitemapData.map((section) => {
                const Icon = section.icon;

                return (
                  <AccordionItem key={section.id} value={section.id} className="px-6">
                    <AccordionTrigger className="flex items-center gap-3 py-4">
                      <Icon className="h-5 w-5" />
                      <span className="text-base font-medium">{section.title}</span>
                    </AccordionTrigger>

                    <AccordionContent className="pb-4">
                      <ul className="space-y-2 ml-1">
                        {/* Static items */}
                        {section.items
                          .filter((item) => match(item.label))
                          .map((item) => (
                            <li key={item.href}>
                              <Link href={item.href} className="text-muted text-sm transition hover:underline">
                                {item.label}
                              </Link>
                            </li>
                          ))}

                        {/* Auto-generated detail pages */}
                        {section.id === 'informasi' &&
                          informasiData
                            .filter((info) => match(info.title))
                            .map((info) => (
                              <li key={info.slug} className="ml-4">
                                <Link href={`/informasi/${info.slug}`} className="text-muted text-sm transition hover:underline">
                                  {info.title}
                                </Link>
                              </li>
                            ))}

                        {section.id === 'berita' &&
                          newsData
                            .filter((news) => match(news.title))
                            .map((news) => (
                              <li key={news.slug} className="ml-4">
                                <Link href={`/berita/${news.slug}`} className="text-gray-400 hover:text-blue-300 transition text-sm">
                                  {news.title}
                                </Link>
                              </li>
                            ))}

                        {section.id === 'layanan' &&
                          layanansData
                            .filter((layanan) => match(layanan.title))
                            .map((layanan) => (
                              <li key={layanan.slug} className="ml-4">
                                <Link href={`/layanan/${layanan.slug}`} className="text-gray-400 hover:text-blue-300 transition text-sm">
                                  {layanan.title}
                                </Link>
                              </li>
                            ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* ⭐ DESKTOP: 2 Columns */}
          <div className="hidden md:grid grid-cols-2 gap-12">
            {sitemapData.map((section) => {
              const Icon = section.icon;

              return (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold">{section.title}</h2>
                  </div>

                  <ul className="space-y-2 ml-1">
                    {section.items
                      .filter((item) => match(item.label))
                      .map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="text-primary text-sm transition hover:underline">
                            {item.label}
                          </Link>
                        </li>
                      ))}

                    {section.id === 'informasi' &&
                      informasiData
                        .filter((info) => match(info.title))
                        .map((info) => (
                          <li key={info.slug} className="ml-4">
                            <Link href={`/informasi/${info.slug}`} className="text-muted-foreground text-sm transition hover:underline">
                              {info.title}
                            </Link>
                          </li>
                        ))}

                    {section.id === 'berita' &&
                      newsData
                        .filter((news) => match(news.title))
                        .map((news) => (
                          <li key={news.slug} className="ml-4">
                            <Link href={`/berita/${news.slug}`} className="text-muted-foreground text-sm transition hover:underline">
                              {news.title}
                            </Link>
                          </li>
                        ))}

                    {section.id === 'layanan' &&
                      layanansData
                        .filter((layanan) => match(layanan.title))
                        .map((layanan) => (
                          <li key={layanan.slug} className="ml-4">
                            <Link href={`/layanan/${layanan.slug}`} className="text-muted-foreground text-sm transition hover:underline">
                              {layanan.title}
                            </Link>
                          </li>
                        ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
