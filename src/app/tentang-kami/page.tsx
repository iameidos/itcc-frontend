import Certifications from '@/components/Certifications';
import PageHeader from '@/components/PageHeader';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { visionMissionData } from '@/lib/data/vision-mission.data';
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
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Logo / Image */}
          <div className="flex justify-center ">
            <Image src="/images/logo-itcc.png" alt="Profil Perusahaan" className="h-auto object-contain drop-shadow-lg rounded-md" width="360" height="220" />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Profil Perusahaan</h2>
            <p className="leading-relaxed mb-4 text-justify">
              <span className="font-bold">ITCC INTERNATIONAL</span> adalah <span className="font-bold">Lembaga Sertifikasi International</span> yang berpusat di
              <span className="font-bold"> United Kingdom – Inggris.</span> Pelanggan kami tersebar dibeberapa negara didunia dan didukung oleh semua kantor - kantor cabang dan
              perwakilan kami di beberapa negara di dunia.
            </p>
            <p className="leading-relaxed text-justify">
              <span className="font-bold">ITCC INTERNATIONAL</span> memberikan layanan jasa sertifikasi untuk lingkup penuh: ISO 9001, ISO 37001, ISO 14001, ISO 45001, ISO 22000,
              ISO 27001, ISO 13485, ISO 50001, dan ISO/TS 16949.
            </p>
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
                <h3 className="text-xl font-semibold mb-4">{visionMissionData.visi.title}</h3>

                <p className="leading-relaxed">{visionMissionData.visi.content}</p>
              </div>
            </TabsContent>

            {/* MISI */}
            <TabsContent value="misi">
              <div className="mt-8 p-8 rounded-md shadow-lg border">
                <h3 className="text-xl font-semibold mb-4">Misi Perusahaan</h3>
                <ul className="space-y-3 leading-relaxed">
                  {visionMissionData.misi.items.map((item, index) => (
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

      <Separator className="max-w-5xl mx-auto" />

      {/* Full Screen Image */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Preview Image</h2>
          <p className="mb-8">Hubungi kami untuk konsultasi atau informasi lebih lanjut.</p>
          <Image src="/images/about-company.jpg" width="1920" height="1080" alt="Tentang Kami" className="w-full h-full object-cover object-center rounded-md shadow-md" />
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      <Certifications />

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Bekerja Sama?</h2>
          <p className="mb-8">Hubungi kami untuk konsultasi atau informasi lebih lanjut.</p>
          <a href="/kontak" className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-md font-semibold">
            Hubungi Kami
          </a>
        </div>
      </section>
    </div>
  );
}
