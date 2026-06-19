import CallToAction from '@/components/CallToActions';
import PageHeader from '@/components/PageHeader';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { aboutUsData } from '@/lib/data/about-us.data';
import { CheckCheck } from 'lucide-react';
import Image from 'next/image';

export default function TentangKamiPage() {
  return (
    <div className="w-full">
      <PageHeader
        title="Tentang Kami"
        subtitle="Membangun solusi industri dengan standar global dan inovasi berkelanjutan."
        backgroundImage="/images/pages-header/about-us.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Tentang Kami' }]}
      />

      {/* Company Overview */}
      <section className="mx-auto px-6 py-20 bg-white">
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-auto">
          {/* Left: Logo / Image */}
          <div className="flex-row justify-center justify-items-center">
            <Image src="/images/itcc-logo-white-back.png" alt="Profil Perusahaan" className="h-auto object-contain" width="360" height="220" />
            <Image src="/images/ascb-white-back.png" alt="Profil Perusahaan" className="h-auto object-contain" width="360" height="220" />
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{aboutUsData.profile.title}</h2>
            <p className="leading-relaxed text-justify">
              <span className="font-bold">ITCC INTERNATIONAL</span> adalah <span className="font-bold">Lembaga Sertifikasi International</span> yang berpusat di
              <span className="font-bold"> United Kingdom – Inggris.</span> Pelanggan kami tersebar dibeberapa negara didunia dan didukung oleh semua kantor - kantor cabang dan
              perwakilan kami di beberapa negara di dunia.
            </p>
            <p className="leading-relaxed text-justify">
              <span className="font-bold">ITCC INTERNATIONAL</span> memberikan layanan jasa sertifikasi untuk lingkup penuh: ISO 9001, ISO 37001, ISO 14001, ISO 45001, ISO 22000,
              ISO 27001, ISO 13485, ISO 50001, dan ISO/TS 16949.
            </p>
            <p className="leading-relaxed text-justify">
              Kami memiliki Auditor dan Instruktur berpengalaman dan ahli di bidang ISO 9001, ISO 37001, ISO 14001, ISO 45001, ISO 22000, ISO 27001, ISO 13485, dan ISO/TS 16949
              termasuk program peningkatan mutu dan efisiensi.
            </p>
            <p className="leading-relaxed text-justify">ITCC INTERNATIONAL diakreditasi oleh ASCB ( Accreditation Service for Certifying Bodies ).</p>

            <ul className="space-y-3 leading-relaxed">
              {aboutUsData.profile.secondtItems.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <CheckCheck />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Accreditation Overview */}
      <section className="mx-auto py-20">
        <div className="md:flex gap-12 items-center">
          <div className="space-y-4 p-6">
            <h2 className="text-3xl font-bold mb-6">Akreditasi Kami</h2>
            <p className="leading-relaxed text-justify">
              <span className="font-bold">ASCB</span> dibentuk pada tahun <span className="font-bold">1995 di Inggris Raya</span> untuk mengakreditasi berbagai badan sertifikasi
              non-pemerintah internasional yang menilai produk, personel, dan sistem manajemen.
            </p>
            <p className="leading-relaxed text-justify">
              <span className="font-bold">ASCB</span> adalah salah satu badan akreditasi internasional terkemuka di dunia, dihormati karena integritas, kepraktisan dan
              ketidakberpihakannya.
            </p>
            <p className="leading-relaxed text-justify">
              Sampai saat ini <span className="font-bold">ASCB</span> telah mengakreditasi lebih dari 230 lembaga sertifikasi di lebih dari 70 negara di dunia ( Eropa, Asia,
              Afrika, Australia, dan Amerika Utara ), mendaftarkan lebih dari 10.000 penilai, auditor, dan personel jaminan kualitas pencapaian; dan memberikan sertifikasi kepada
              lebih dari 30.000 organisasi dengan perkiraan omset tahunan gabungan $ 250 miliar dan mempekerjakan lebih dari 1 juta karyawan.
            </p>
            <p className="leading-relaxed text-justify">
              Semua Lembaga Sertifikasi, organisasi, dan produk bersertifikat ditempatkan pada Daftar Internasional (IRQAO) yang memiliki fungsi pencarian langsung, memberikan
              pengguna verifikasi instan keaslian ASCB dan pemegang sertifikat terakreditasi lainnya.
            </p>
          </div>

          <div className="flex-row justify-center justify-items-center rounded-md">
            <iframe src="https://www.google.com/maps/d/embed?mid=1aYyXkEKh0G9gtIaVMwHtvVzed7o&ehbc=2E312F" width="640" height="480" allowFullScreen />
          </div>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Visi & Misi</h2>

          <Tabs defaultValue="visi" className="w-full">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="visi">Visi</TabsTrigger>
              <TabsTrigger value="misi">Misi</TabsTrigger>
            </TabsList>

            {/* VISI */}
            <TabsContent value="visi">
              <div className="mt-8 p-8 rounded-md shadow-lg border">
                <h3 className="text-xl font-semibold mb-4">{aboutUsData.visi.title}</h3>

                <p className="leading-relaxed">{aboutUsData.visi.content}</p>
              </div>
            </TabsContent>

            {/* MISI */}
            <TabsContent value="misi">
              <div className="mt-8 p-8 rounded-md shadow-lg border">
                <h3 className="text-xl font-semibold mb-4">Misi Perusahaan</h3>
                <ul className="space-y-3 leading-relaxed">
                  {aboutUsData.misi.items.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <CheckCheck />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
