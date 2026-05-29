'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

type Slide = {
  src: string;
  alt?: string;
};

interface HeroCarouselProps {
  slides?: Slide[];
  autoplay?: boolean;
  intervalMs?: number;
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function HeroCarousel({
  slides = [
    { src: '/images/sliders/slider-used-1.jpg', alt: 'Hero 1' },
    { src: '/images/sliders/slider-used-2.jpg', alt: 'Hero 2' },
    { src: '/images/sliders/slider-used-3.jpg', alt: 'Hero 3' },
    { src: '/images/sliders/slider-used-4.jpg', alt: 'Hero 4' },
  ],
  autoplay = true,
  intervalMs = 5500,
  title = 'ITCC International',
  description = 'ITCC INTERNATIONAL adalah Lembaga Sertifikasi International yang berpusat di United Kingdom – Inggris.',
  ctaLabel = 'Hubungi Marketing',
  ctaHref = '/kontak',
}: HeroCarouselProps) {
  const plugin = React.useRef(Autoplay({ delay: intervalMs, stopOnInteraction: true }));

  return (
    <section className="relative w-full h-screen overflow-hidden mt-15">
      {/* BACKGROUND SLIDER */}
      <Carousel
        className="absolute inset-0 h-full w-full"
        plugins={autoplay ? [plugin.current] : []}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="flex h-full">
          {slides.map((slide, idx) => (
            <CarouselItem key={idx} className="basis-full h-full">
              <div className="flex justify-center items-center h-full w-full">
                <Image src={slide.src} alt={slide.alt ?? `Slide ${idx + 1}`} width={1920} height={1280} className="object-contain" priority={idx === 0} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hover:scale-105" />
        <CarouselNext className="hover:scale-105" />
      </Carousel>

      {/* FOREGROUND TEXT */}
      <div className="relative z-20 flex h-full items-center px-6">
        <div className="w-full max-w-5xl mx-auto space-y-6 text-white">
          <h1 className="text-4xl md:text-6xl md:max-w-2xl font-bold leading-tight drop-shadow-lg uppercase">{title}</h1>

          <p className="text-lg md:text-xl md:max-w-2xl drop-shadow-md">{description}</p>

          <Button asChild size="xl" className="mt-4 shadow-lg">
            <Link href={ctaHref} target="_blank" className="font-semibold leading-relaxed uppercase">
              {ctaLabel}
            </Link>
          </Button>
        </div>
      </div>

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-br from-black/40 via-transparent to-black/20 z-10" />
    </section>
  );
}
