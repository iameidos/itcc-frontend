import { NewsCard } from '@/components/berita/NewsCard';
import CallToAction from '@/components/CallToActions';
import PageHeader from '@/components/PageHeader';
import { PageTransition } from '@/components/ui/page-transition';
import { Pagination } from '@/components/ui/Pagination';
import { PaginationWrapper } from '@/components/ui/pagination-wrapper';
import { newsData } from '@/lib/data/news.data';

export default async function BeritaPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;

  const currentPage = page ? Number(page) : 1;
  const itemsPerPage = 6;

  //Pagination
  const totalItems = newsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = newsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full">
      <PageHeader
        title="Berita"
        subtitle="Membangun solusi industri dengan standar global dan inovasi berkelanjutan."
        backgroundImage="/images/pages-header/about-us.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Berita' }]}
      />

      <section id="berita-container" className="max-w-5xl mx-auto border-b px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Berita & Pembaruan</h1>
        <p className="mb-12 max-w-2xl">Temukan informasi terbaru mengenai standar ISO, pembaruan sistem, keamanan data, dan transformasi digital perusahaan.</p>

        {/* Grid Berita */}
        <PageTransition page={currentPage}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {paginatedData.map((item) => (
              <NewsCard key={item.slug} {...item} />
            ))}
          </div>
        </PageTransition>

        {/* Pagination */}
        <PaginationWrapper page={currentPage} containerId="berita-container">
          <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/berita" />
        </PaginationWrapper>
      </section>
      <CallToAction />
    </div>
  );
}
