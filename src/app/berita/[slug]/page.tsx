import { notFound } from 'next/navigation';
import Image from 'next/image';
import { newsData, type NewsItem } from '@/lib/data/news.data';
import PageHeader from '@/components/PageHeader';
import { withFallbackImage } from '@/lib/utils';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default async function NewsDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const news: NewsItem | undefined = newsData.find((item) => item.slug === slug);

  if (!news) return notFound();

  return (
    <div className="w-full">
      <PageHeader
        title={news.title}
        subtitle="Berita terbaru dan pembaruan informasi perusahaan."
        backgroundImage="/images/pages-header/about-us.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Berita', href: '/berita' }, { label: news.title }]}
      />
      <section className="pb-24 pt-10 md:pt-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <Link href="/berita" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Kembali ke Berita
          </Link>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-sm mb-10">
            <ImageWithFallback src={news.image} alt={news.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent" />
          </div>

          {/* Meta */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              {new Date(news.date).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>

          {/* Title */}
          <h1 className="text-xl md:text-xl font-bold leading-tight mb-6">{news.title}</h1>

          {/* Content */}
          <article className="prose prose-neutral dark:prose-invert max-w-none text-base leading-relaxed">
            {news.content
              .trim()
              .split('\n')
              .map((p, i) => (
                <p key={i}>{p.trim()}</p>
              ))}
          </article>

          <Separator className="my-20" />

          {/* Similar Content */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6">Berita Terkait</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsData
                .filter((item) => item.slug !== news.slug) // exclude current news
                .slice(0, 3) // show 3 related items
                .map((item) => (
                  <div
                    key={item.slug}
                    className="group rounded-xl overflow-hidden border backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative w-full h-40">
                      <ImageWithFallback src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-xs text-muted-foreground mb-2">
                        {new Date(item.date).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>

                      <Link href={`/berita/${item.slug}`}>
                        <h3 className="font-semibold text-lg mb-2 transition">{item.title}</h3>
                      </Link>

                      <p className="text-sm line-clamp-2 mb-3">{item.content.substring(0, 120)}...</p>

                      <Link href={`/berita/${item.slug}`} className="text-xs font-medium inline-flex items-center gap-1 hover:underline transition">
                        Selengkapnya
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
