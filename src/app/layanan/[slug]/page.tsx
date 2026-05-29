import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { notFound } from 'next/navigation';
import { layanansData } from '@/lib/data/layanan.data';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';

export default async function LayananDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const layanan = layanansData.find((item) => item.slug === slug);
  if (!layanan) return notFound();

  const Icon = layanan.icon;

  return (
    <div className="w-full">
      <PageHeader
        title={layanan.title}
        subtitle="Layanan profesional untuk mendukung kebutuhan organisasi Anda."
        backgroundImage="/images/pages-header/about-us.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Layanan', href: '/layanan' }, { label: layanan.title }]}
      />

      {/* Custom Hero Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/layanan" className="text-xs font-medium inline-flex items-center gap-1 hover:underline transition mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Kembali ke Layanan
          </Link>

          {/* IMAGE HERO KHUSUS LAYANAN */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg mb-10">
            <ImageWithFallback src={layanan.image} alt={layanan.title} fill className="object-cover" />

            <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/30" />
          </div>

          <div className="flex items-start gap-8">
            <div className="w-28 h-28 rounded-2xl bg-primary backdrop-blur-md flex items-center justify-center shadow-xl">
              <Icon className="h-14 w-14 text-white" />
            </div>

            <div>
              <p className="font-medium mb-2">{layanan.code}</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{layanan.title}</h1>
              <p className="max-w-4xl text-lg text-justify">{layanan.desc}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-6 py-20">
          {/* Fitur Utama */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-6">Apa yang Anda Dapatkan</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Penyimpanan berbasis cloud dengan akses cepat dari perangkat apa pun',
                'Data tersinkron otomatis sehingga tim bisa mengakses dokumen tanpa hambatan',
                'Arsitektur penyimpanan terstruktur yang memudahkan pencarian dan pengelolaan file',
                'Akses real‑time ke dokumen penting tanpa perlu instalasi tambahan',
                'Sistem penyimpanan aman dengan enkripsi dan kontrol akses yang fleksibel',
                'Dokumen tersimpan rapi, mudah dilacak, dan siap diakses kapan pun dibutuhkan',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                  <p className="text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Proses Kerja */}
          <div className="">
            <h2 className="text-2xl font-bold mb-6">Proses Kerja</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Penyimpanan Terstruktur',
                  desc: 'Data yang diunggah akan diproses melalui sistem penyimpanan terpusat dengan struktur folder dan metadata yang rapi. Setiap dokumen otomatis diklasifikasikan, diberi identitas unik, dan disimpan dalam arsitektur yang memastikan konsistensi, keamanan, serta kemudahan pengelolaan di seluruh lingkungan kerja.',
                },
                {
                  step: '02',
                  title: 'Sinkronisasi & Akses Real‑Time',
                  desc: 'Setiap perubahan yang terjadi pada dokumen langsung tersinkron ke seluruh perangkat dan pengguna yang berwenang. Sistem memastikan akses real‑time tanpa delay, sehingga tim dapat membuka, meninjau, atau memperbarui dokumen kapan saja tanpa perlu instalasi tambahan atau konfigurasi rumit.',
                },
                {
                  step: '03',
                  title: 'Keamanan & Kontrol Akses',
                  desc: 'Sebelum dokumen dapat diakses, sistem melakukan validasi hak akses berbasis role dan enkripsi. Setiap permintaan akses diverifikasi untuk memastikan hanya pengguna yang tepat yang dapat melihat atau mengelola file tertentu. Proses ini menjaga integritas data sekaligus memberikan fleksibilitas bagi organisasi dalam mengatur level akses.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="p-6 rounded-md bg-linear-to-br from-indigo-100 to to-sky-100 backdrop-blur-sm shadow hover:border hover:shadow-lg hover:scale-105 transition"
                >
                  <button className="text-base px-4 py-1 text-white rounded-full bg-primary">{item.step}</button>
                  <h3 className="font-semibold text-base my-4">{item.title}</h3>
                  <p className="text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
