'use client';

import PageHeader from '@/components/PageHeader';
import { Separator } from '@/components/ui/separator';
import InformationPage from '@/components/informasi/InformationPage';

export default function InformasiPage() {
  return (
    <main className="w-full">
      <PageHeader
        title="Informasi"
        subtitle="Membangun solusi industri dengan standar global dan inovasi berkelanjutan."
        backgroundImage="/images/pages-header/fandq.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Informasi' }]}
      />

      <InformationPage />

      <Separator className="max-w-5xl mx-auto px-6" />
    </main>
  );
}
