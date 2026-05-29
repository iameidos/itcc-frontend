'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import { informasiData } from '@/lib/data/informasi.data';
import { ChevronRight } from 'lucide-react';

export function InformasiCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));

  // Ambil 1 featured (data pertama)
  const featured = informasiData[0];

  // Ambil 5 data berikutnya untuk card
  const slides = informasiData.slice(1, 6);

  return (
    <section className="relative w-full py-20">
      <div className="mx-auto max-w-5xl px-6 space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold uppercase">Informasi Lainnya</h2>
        {/* ============================
            FEATURED SECTION
        ============================= */}
        <div className="block relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-md group">
          <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:brightness-90 transition" />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-linear-to-b from-black/5 via-black/10 to-black/20" />

          {/* BADGE */}
          <span
            className="
              absolute top-4 right-0 bg-primary/90 text-white text-base
              font-semibold px-5 py-2 uppercase tracking-wide shadow-md
              "
          >
            {featured.category === 'standar-iso' ? 'Standar ISO' : 'Peraturan Perundangan'}
          </span>

          {/* TEXT OVERLAY */}
          <div className="absolute bottom-6 left-6 right-6 lg:max-w-1/2 text-white space-y-4">
            <h2 className="text-xl md:text-3xl font-bold drop-shadow-lg line-clamp-2">
              {featured.code} - {featured.title}
            </h2>
            <p className="text-sm md:text-base opacity-90 line-clamp-2">{featured.desc}</p>
            <Link href={`/informasi/${featured.slug}`} className="hover:underline">
              <span className="flex items-center text-sm font-medium ">
                selengkapnya <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* ============================
            CAROUSEL SECTION
        ============================= */}
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((item) => (
              <CarouselItem key={item.slug} className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                <div className="block rounded-xl overflow-hidden border bg-card shadow-sm hover:shadow-md transition h-full">
                  {/* IMAGE */}
                  <div className="relative w-full h-48 md:h-52 lg:h-56">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />

                    {/* BADGE FLOATING */}
                    <span
                      className="
                      absolute top-2 right-2 
                      bg-primary/90 text-white 
                      text-[10px] font-semibold 
                      px-2 py-1 rounded-md 
                      uppercase tracking-wide shadow
                      "
                    >
                      {item.category === 'standar-iso' ? 'Standar ISO' : 'Peraturan Perundangan'}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 flex flex-col justify-between h-[180px] space-y-2">
                    <h3 className="font-semibold text-base lg:text-lg line-clamp-2">
                      {item.code} - {item.title}
                    </h3>

                    <p className="text-sm lg:text-base line-clamp-2">{item.desc}</p>
                    <Link href={`/informasi/${item.slug}`} className="hover:underline">
                      <span className="flex items-center text-sm font-medium ">
                        selengkapnya <ChevronRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hover:scale-105 hover:text-primary-foreground" />
          <CarouselNext className="hover:scale-105 hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
