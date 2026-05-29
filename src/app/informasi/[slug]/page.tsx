import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { informasiData } from '@/lib/data/informasi.data';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default async function InformasiDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const info = informasiData.find((item) => item.slug === slug);

  if (!info) return notFound();

  return (
    <div className="w-full">
      {/* ⭐ Page Header dinamis */}
      <PageHeader
        title={info.title}
        subtitle="Informasi lengkap mengenai standar sertifikasi ISO."
        backgroundImage="/images/pages-header/about-us.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Informasi', href: '/informasi' }, { label: info.title }]}
      />

      <section className="pb-24 pt-10 md:pt-20 fade-in">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Link href="/informasi" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Kembali ke Informasi
          </Link>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-sm mb-10 group">
            <ImageWithFallback src={info.image} alt={info.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent" />
          </div>

          {/* Code */}
          <p className="text-primary font-semibold text-lg mb-3">{info.code}</p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">{info.title}</h1>

          {/* Description */}
          <article className="prose prose-neutral dark:prose-invert max-w-none text-lg leading-relaxed">{info.desc}</article>

          <Separator className="my-20" />

          {/* Similar Content */}
          <div className="mt-20">
            <h2 className="text-xl font-semibold mb-6">Informasi Terkait</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {informasiData
                .filter((item) => item.slug !== info.slug)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/informasi/${item.slug}`}
                    className="group block rounded-xl overflow-hidden shadow-md hover:border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* IMAGE */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>

                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{item.desc}</p>

                      <span className="text-xs font-medium text-primary inline-flex items-center gap-1">
                        Selengkapnya
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
