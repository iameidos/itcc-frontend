'use client';

import { layanansData } from '@/lib/data/layanan.data';
import { useSearchParams } from 'next/navigation';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { PageTransition } from '@/components/ui/page-transition';
import { ChevronRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { PaginationWrapper } from '@/components/ui/pagination-wrapper';
import { Pagination } from '@/components/ui/Pagination';

export default function LayananPage() {
  const searchParams = useSearchParams();
  const pageQuery = Number(searchParams.get('page') || '1');

  const itemsPerPage = 2;
  const totalItems = layanansData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (pageQuery - 1) * itemsPerPage;
  const paginatedData = layanansData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="w-full">
      {/* HERO */}
      <PageHeader
        title="Layanan"
        subtitle="Layanan Penyimpanan Dokumen ISO dan Tata Cara Akses Dokumen ISO"
        backgroundImage="/images/pages-header/solutions.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Layanan' }]}
      />

      {/* SERVICES GRID */}
      <section id="layanan-container" className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
          <p className="mb-12 max-w-xl mx-auto">Kemudahan akses dan keamanan dokumen tersimpan dalam satu tempat dan dapat diakses dimana saja.</p>

          <PageTransition page={pageQuery}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {paginatedData.map((c) => {
                return (
                  <div key={c.slug} className="h-[480px] flex flex-col group rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-md transition">
                    {/* IMAGE */}
                    <div className="relative w-full">
                      <ImageWithFallback src={c.image} alt={c.title} width={480} height={320} className="object-cover group-hover:scale-105 transition duration-300" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 flex flex-col justify-between h-full">
                      <div className="space-y-2">
                        <Link href={`/layanan/${c.slug}`}>
                          <h3 className="text-lg font-semibold line-clamp-2 group-hover:underline">{c.title}</h3>
                        </Link>

                        <p className="text-sm line-clamp-3">{c.desc}</p>
                      </div>

                      <Link href={`/layanan/${c.slug}`} className="my-4 text-sm font-medium inline-flex items-center gap-1 hover:underline">
                        Selengkapnya
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </PageTransition>

          <div className="mt-12">
            <PaginationWrapper page={pageQuery} containerId="layanan-container">
              <Pagination currentPage={pageQuery} totalPages={totalPages} basePath="/layanan" />
            </PaginationWrapper>
          </div>
        </div>
      </section>
    </main>
  );
}
