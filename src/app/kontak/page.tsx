import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/kontak/ContactForm';
import ContactInfo from '@/components/kontak/ContactInfo';
import ContactMap from '@/components/kontak/ContactMap';

export default function KontakPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Kontak Kami"
        subtitle="Kami siap membantu Anda dengan cepat dan profesional."
        backgroundImage="/images/pages-header/default-img.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Kontak' }]}
      />

      <section id="kontak-container" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <ContactMap />
    </div>
  );
}
