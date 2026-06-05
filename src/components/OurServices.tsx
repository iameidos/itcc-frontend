import { ourServicesData } from '@/lib/data/our-services.data';
import { ImageWithFallback } from './ui/image-with-fallback';

export default function OurServices() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
        <p className="mb-12 max-w-xl mx-auto">Sertifikasi bisnis anda dan dapatkan layanan terbaik kami.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                  {c.code}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-dmsans text-xl font-semibold mb-2 px-4">{c.title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed px-4 mb-4">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
