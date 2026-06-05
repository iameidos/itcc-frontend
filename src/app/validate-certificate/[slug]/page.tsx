import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { Check, CheckCheck, CheckCircle, ChevronLeft, ChevronRight, ClockAlert } from 'lucide-react';
import Image from 'next/image';
import { certificateData } from '@/lib/data/certificate.data';
import { Button } from '@/components/ui/button';

export default async function ValidateCertificateDetailsPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const info = certificateData.find((item) => item.slug === slug);

  if (!info) return notFound();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-100">
      <section className="pt-10 md:pt-20 fade-in rounded-md">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <Link href="/validate-certificate" className="inline-flex items-center text-sm text-muted-foreground hover:underline transition mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Kembali ke Validasi Sertifikat
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

          {/* Certificate Details */}
          <div className="mx-auto py-20">
            <div className="relative overflow-hidden items-center justify-items-center bg-white rounded-sm p-6 mb-10 group">
              <Image
                src="/images/logo-itcc-ascb.png"
                alt=""
                width={248}
                height={248}
                className="object-cover transition-transform rounded-md p-2 duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex-row items-center justify-items-center border p-4 my-6 rounded-sm bg-white">
              <div className="w-full text-center py-2.5 text-white font-bold text-2xl bg-main rounded-md">PT. SINERGI SINAR ABADI</div>
              <div className="grid md:grid-cols-3 gap-4 w-full justify-items-center py-4 px-2">
                <div className="text-center text-sm space-y-1.5">
                  <h1>Scope of Certification :</h1>
                  <p className="text-base font-bold">General Trading, Electrical Suplier & Services</p>
                </div>
                <div className="text-center text-sm space-y-1.5">
                  <h1>Standard :</h1>
                  <p className="text-base font-bold">ISO 14001:2015</p>
                </div>
                <div className="text-center text-sm space-y-1.5">
                  <h1>Certificate Number :</h1>
                  <p className="text-base font-bold">EMS-SSA25048</p>
                </div>
              </div>
            </div>

            <div className="flex-row items-center justify-items-center border p-4 rounded-sm bg-white my-8">
              <div className="w-full">
                <div className="text-center py-1.5 text-white font-bold text-base bg-main rounded-md mb-4">FIRST SURVEILLANCE</div>
                <div className="grid md:grid-cols-2 justify-center mx-auto items-center">
                  <div className="text-sm h-[48px] bg-main items-center text-white border flex pl-4">
                    <p className="text-sm">Diterbitkan Tanggal</p>
                  </div>
                  <div className="items-center h-[48px] border flex pl-4">
                    <p className="text-sm font-bold">Friday, 07 February 2025</p>
                  </div>
                  <div className="text-sm h-[48px] bg-main items-center text-white border flex pl-4">
                    <p className="text-sm">Berakhir Tanggal</p>
                  </div>
                  <div className="items-center h-[48px] border flex pl-4">
                    <p className="text-sm font-bold">Friday, 07 February 2028</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-row items-center justify-items-center border p-4 rounded-sm bg-white">
              <div className="w-full">
                <div className="text-center py-1.5 text-white font-bold text-base bg-main rounded-md mb-4">CERTIFICATE STATUS</div>
                <div className="grid md:grid-cols-4 justify-center gap-4 mx-auto border items-center">
                  <div className="text-sm h-[48px] bg-main items-center text-white flex pl-4">
                    <p className="text-sm">Certified Since</p>
                  </div>
                  <div className="">
                    <p className="text-sm font-bold">Friday, 07 February 2025</p>
                  </div>
                  <div className="text-sm space-y-1.5 h-[48px] bg-main items-center text-white flex pl-4">
                    <p className="text-sm">Certificate Status</p>
                  </div>
                  <div className="flex justify-center items-center text-sm">
                    <Button type="button" variant="active" size="default">
                      Active{' '}
                      <span>
                        <CheckCircle />
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 w-full border items-center">
                  <div className="text-sm space-y-1.5 h-[48px] bg-main items-center text-white flex pl-4">
                    <p className="text-sm">Valid From</p>
                  </div>
                  <div className="text-sm space-y-1.5">
                    <p className="text-sm font-bold">Friday, 07 February 2025</p>
                  </div>
                  <div className="text-sm space-y-1.5 h-[48px] bg-main items-center text-white flex pl-4">
                    <p className="text-sm">Expired Date</p>
                  </div>
                  <div className="items-center flex">
                    <p className="text-sm font-bold">Monday, 07 February 2028</p>
                  </div>
                </div>
              </div>

              <div className="w-full mt-8">
                <div className=" text-center py-1.5 text-white font-bold text-base bg-main rounded-md mb-4">SURVEILLANCE STATUS</div>
                <div className="grid md:grid-cols-4 gap-4 w-full border items-center">
                  <div className="text-sm space-y-1.5 h-[48px] bg-main items-center text-white flex pl-4">
                    <p className="text-sm">First Surveillance</p>
                  </div>
                  <div className="text-sm space-y-1.5">
                    <p className="text-sm font-bold">Wednesday, 07 January 2026</p>
                  </div>
                  <div className="text-sm space-y-1.5 h-[48px] bg-main items-center text-white flex pl-4">
                    <p className="text-sm">First Surveillance Status</p>
                  </div>
                  <div className="flex justify-center items-center text-sm">
                    <Button type="button" variant="conduct" size="default">
                      Conducted
                      <span>
                        <CheckCheck />
                      </span>
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 w-full border items-center">
                  <div className="text-sm space-y-1.5 h-[48px] bg-main items-center text-white flex pl-4">
                    <p className="text-sm">Second Surveillance</p>
                  </div>
                  <div className="text-sm space-y-1.5">
                    <p className="text-sm font-bold">Thursday, 07 January 2027</p>
                  </div>
                  <div className="text-sm space-y-1.5 h-[48px] bg-main items-center text-white flex pl-4">
                    <p className="text-sm">Second Surveillance Status</p>
                  </div>
                  <div className="flex justify-center items-center text-sm">
                    <Button type="button" variant="pending" size="default">
                      Pending
                      <span>
                        <ClockAlert />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-20" />
        </div>
      </section>
    </div>
  );
}
