import { ourServicesData } from '@/lib/data/our-services.data';
import { ImageWithFallback } from './ui/image-with-fallback';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function OurServices() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
        <p className="mb-12 max-w-xl mx-auto">Sertifikasi bisnis anda dan dapatkan layanan terbaik kami.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ourServicesData.map((c, i) => (
            <div
              key={i}
              className="group rounded-md border bg-white/5 backdrop-blur-sm shadow-lg space-y-4 hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="relative w-full h-40 md:h-48">
                <ImageWithFallback src={c.image} alt={c.title} fill className="object-cover group-hover:scale-105 transition duration-300" />

                {/* BADGE FLOATING */}
                <span
                  className="
                    absolute top-4 right-0 text-white
                    bg-linear-to-r from-indigo-700 to-sky-700
                    text-sm px-3 py-1 uppercase tracking-wide shadow-md
                  "
                >
                  {c.category}
                </span>
              </div>

              {/* Title */}
              <Link href={`/layanan/${c.slug}`}>
                <h3 className="font-dmsans text-base font-semibold mb-4 px-4 group-hover:underline">
                  {c.code} - {c.title}
                </h3>
              </Link>

              {/* Description */}
              <p className="text-sm leading-relaxed px-4 mb-4 line-clamp-2">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center text-center py-8">
          <Link href="/layanan" className="hover:underline">
            <span className="flex items-center text-sm font-medium ">
              selengkapnya <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
