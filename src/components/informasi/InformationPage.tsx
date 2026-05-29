'use client';

import { useSearchParams } from 'next/navigation';
import { informasiData } from '@/lib/data/informasi.data';
import { PaginationWrapper } from '@/components/ui/pagination-wrapper';
import { PageTransition } from '@/components/ui/page-transition';
import { Pagination } from '../ui/Pagination';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ImageWithFallback } from '../ui/image-with-fallback';

export default function InformationPage() {
  const searchParams = useSearchParams();

  const pageQuery = Number(searchParams.get('page') || '1');
  const category = searchParams.get('category') || undefined;

  const itemsPerPage = 6;

  // FILTER DATA BERDASARKAN KATEGORI
  const filteredData = category ? informasiData.filter((item) => item.category === category) : informasiData;

  // PAGINATION
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (pageQuery - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="informasi-container" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* <h2 className="text-3xl font-bold mb-4">Informasi Seputar Sertifikasi ISO</h2> */}

        {category && <h2 className="text-3xl font-bold mb-4 capitalize">Informasi Seputar {category.replace('-', ' ')}</h2>}

        {category && (
          <p className="text-sm text-muted-foreground mb-2 capitalize">
            Kategori: <strong>{category.replace('-', ' ')}</strong>
          </p>
        )}

        <p className="mb-12 max-w-xl mx-auto">Kami berkomitmen untuk memenuhi standar internasional dalam kualitas, lingkungan, dan keselamatan kerja.</p>

        <PageTransition page={pageQuery}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {paginatedData.map((c, i) => (
              <div key={i} className="group rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-md transition h-full">
                {/* IMAGE */}
                <div className="relative w-full h-40 md:h-48">
                  <ImageWithFallback src={c.image} alt={c.title} fill className="object-cover group-hover:scale-105 transition duration-300" />

                  {/* BADGE FLOATING */}
                  <span
                    className="
                      absolute top-4 right-0 text-white
                      bg-linear-to-r from-indigo-700 to-sky-700
                      text-xs px-3 py-1 uppercase tracking-wide shadow-md
                    "
                  >
                    {c.category === 'standar-iso' ? 'Standar ISO' : 'Peraturan Perundangan'}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col justify-between space-y-2 h-[180px]">
                  <Link href={`/informasi/${c.slug}`}>
                    <h3 className="text-lg font-semibold line-clamp-2 group-hover:underline">
                      {c.code} - {c.title}
                    </h3>
                  </Link>

                  <p className="text-sm line-clamp-3">{c.desc}</p>

                  <Link href={`/informasi/${c.slug}`} className="mt-2 text-sm font-medium inline-flex items-center gap-1 hover:underline">
                    Selengkapnya
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </PageTransition>

        <div className="mt-12">
          <PaginationWrapper page={pageQuery} containerId="informasi-container">
            <Pagination
              currentPage={pageQuery}
              totalPages={totalPages}
              basePath="/informasi"
              query={{
                ...(category && { category }),
              }}
            />
          </PaginationWrapper>
        </div>
      </div>
    </section>
  );
}
