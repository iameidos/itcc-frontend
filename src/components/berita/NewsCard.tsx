import Link from 'next/link';
import type { NewsItem } from '@/lib/data/news.data';
import { ImageWithFallback } from '../ui/image-with-fallback';

export function NewsCard({ slug, title, excerpt, date, image }: NewsItem) {
  return (
    <Link href={`/berita/${slug}`} className="group rounded-xl overflow-hidden border bg-card hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <ImageWithFallback src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-5">
        <p className="text-xs text-muted-foreground mb-2">{new Date(date).toLocaleDateString('id-ID')}</p>

        <h3 className="text-lg font-semibold mb-2 transition-colors">{title}</h3>

        <p className="text-sm">{excerpt}</p>
      </div>
    </Link>
  );
}
