import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft } from 'lucide-react';
import { certificateData } from '@/lib/data/certificate.data';
import StatusButton from '@/components/StatusButton';

export default async function ValidateCertificateDetailsPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const info = certificateData.find((item) => item.slug === slug);

  if (!info) return notFound();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-100">
      <section className="pt-10 md:pt-20 fade-in rounded-md">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <Link href="/validate-certificate" className="inline-flex items-center text-xs text-muted-foreground hover:underline transition mb-6">
            <ChevronLeft size={14} />
            Kembali ke Validasi Sertifikat
          </Link>

          {/* Certificate Details */}
          <div className="mx-auto">
            <div className="relative overflow-hidden items-center justify-items-center bg-white border rounded-sm p-6 mb-10 group">
              <Image
                src="/images/itcc-logo-white-back.png"
                alt=""
                width={248}
                height={248}
                className="object-cover transition-transform rounded-md p-2 duration-500 group-hover:scale-105"
              />
              <Image
                src="/images/ascb-white-back.png"
                alt=""
                width={248}
                height={248}
                className="object-cover transition-transform rounded-md p-2 duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex-row items-center justify-items-center border p-4 lg:p-8 rounded-sm bg-white">
              <div className="w-full text-center font-bold text-xl lg:text-2xl py-1.5 text-white bg-cert rounded-md leading-relaxed uppercase">{info.clientName}</div>
              <div className="grid md:grid-cols-2 gap-4 w-full justify-items-center py-8 px-2">
                <div className="text-center text-sm space-y-2.5">
                  <h1>Scheme :</h1>
                  <p className="text-base font-bold">{info.scheme}</p>
                </div>
                <div className="text-center text-sm space-y-2.5">
                  <h1>Certificate Number :</h1>
                  <p className="text-base font-bold">{info.certificateNumber}</p>
                </div>
              </div>
              <div className="grid gap-4 w-full justify-items-center px-2">
                <div className="text-center max-w-xl text-sm space-y-2.5">
                  <h1>Scope of Certification :</h1>
                  <p className="text-base font-bold">{info.scope}</p>
                </div>
                <div className="text-center text-sm space-y-2.5">
                  <h1>Location :</h1>
                  <p className="text-base font-bold">{info.locationNumber}</p>
                </div>
              </div>
            </div>

            {/* Ditampilkan hanya saat Telah Melaksanakan Surveillance 1st */}
            <div className="flex-row items-center justify-items-center border p-4 lg:p-8 rounded-sm bg-white my-8">
              <div className="w-full">
                <div className="text-center py-2.5 text-white font-bold text-sm lg:text-base bg-cert rounded-md mb-4 leading-relaxed uppercase">First Surveillance</div>
                <div className="grid md:grid-cols-2 justify-center mx-auto items-center">
                  <div className="text-sm h-[48px] bg-cert items-center text-white border flex pl-4">
                    <p className="text-sm">Initial Date</p>
                  </div>
                  <div className="items-center h-[48px] border flex pl-4">
                    <p className="text-sm font-bold">{info.initialCertDate}</p>
                  </div>
                  <div className="text-sm h-[48px] bg-cert items-center text-white border flex pl-4">
                    <p className="text-sm">Expired Date</p>
                  </div>
                  <div className="items-center h-[48px] border flex pl-4">
                    <p className="text-sm font-bold">{info.endCertDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ditampilkan hanya saat Telah Melaksanakan Surveillance 2nd */}
            <div className="flex-row items-center justify-items-center border p-4 lg:p-8 rounded-sm bg-white my-8">
              <div className="w-full">
                <div className="text-center py-2.5 text-white font-bold text-sm lg:text-base bg-cert rounded-md mb-4 leading-relaxed uppercase">Second Surveillance</div>
                <div className="grid md:grid-cols-2 justify-center mx-auto items-center">
                  <div className="text-sm h-[48px] bg-cert items-center text-white border flex pl-4">
                    <p className="text-sm">Initial Date</p>
                  </div>
                  <div className="items-center h-[48px] border flex pl-4">
                    <p className="text-sm font-bold">{info.initialCertDate}</p>
                  </div>
                  <div className="text-sm h-[48px] bg-cert items-center text-white border flex pl-4">
                    <p className="text-sm">Expired Date</p>
                  </div>
                  <div className="items-center h-[48px] border flex pl-4">
                    <p className="text-sm font-bold">{info.endCertDate}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-row items-center justify-items-center border p-4 lg:p-8 rounded-sm bg-white">
              <div className="w-full">
                <div className="text-center py-2.5 text-white font-bold text-sm lg:text-base bg-cert rounded-md mb-4 leading-relaxed uppercase">Certificate Status</div>
                <div className="grid md:grid-cols-4 justify-center gap-4 mx-auto border items-center">
                  <div className="text-sm h-[48px] bg-cert items-center text-white flex pl-4">
                    <p className="text-sm">Certified Since</p>
                  </div>
                  <div className="">
                    <p className="text-sm font-bold">Friday, 07 February 2025</p>
                  </div>
                  <div className="text-sm space-y-1.5 h-[48px] bg-cert items-center text-white flex pl-4">
                    <p className="text-sm">Certificate Status</p>
                  </div>
                  <div className="flex justify-center items-center text-sm">
                    <StatusButton status="active" />
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 w-full border items-center">
                  <div className="text-sm space-y-1.5 h-[48px] bg-cert items-center text-white flex pl-4">
                    <p className="text-sm">Valid From</p>
                  </div>
                  <div className="text-sm space-y-1.5">
                    <p className="text-sm font-bold">{info.initialCertDate}</p>
                  </div>
                  <div className="text-sm space-y-1.5 h-[48px] bg-cert items-center text-white flex pl-4">
                    <p className="text-sm">Expired Date</p>
                  </div>
                  <div className="items-center flex">
                    <p className="text-sm font-bold">{info.endCertDate}</p>
                  </div>
                </div>
              </div>

              <div className="w-full mt-8">
                <div className=" text-center py-2.5 text-white font-bold text-sm lg:text-base bg-cert rounded-md mb-4 leading-relaxed uppercase">Surveillance Status</div>
                <div className="grid md:grid-cols-4 gap-4 w-full border items-center">
                  <div className="text-sm space-y-1.5 h-[48px] bg-cert items-center text-white flex pl-4">
                    <p className="text-sm">First Surveillance</p>
                  </div>
                  <div className="text-sm space-y-1.5">
                    <p className="text-sm font-bold">{info.surv1Date}</p>
                  </div>
                  <div className="text-sm space-y-1.5 h-[48px] bg-cert items-center text-white flex pl-4">
                    <p className="text-sm">First Surveillance Status</p>
                  </div>
                  <div className="flex justify-center items-center text-sm">
                    <StatusButton status="conducted" />
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 w-full border items-center">
                  <div className="text-sm space-y-1.5 h-[48px] bg-cert items-center text-white flex pl-4">
                    <p className="text-sm">Second Surveillance</p>
                  </div>
                  <div className="text-sm space-y-1.5">
                    <p className="text-sm font-bold">{info.surv2Date}</p>
                  </div>
                  <div className="text-sm space-y-1.5 h-[48px] bg-cert items-center text-white flex pl-4">
                    <p className="text-sm">Second Surveillance Status</p>
                  </div>
                  <div className="flex justify-center items-center text-sm">
                    <StatusButton status="withdrawn" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-row py-6 justify-items-center">
              <Link href="/validate-certificate" className="flex items-center text-xs text-muted-foreground hover:underline transition">
                <ChevronLeft size={14} />
                Back to home
              </Link>
            </div>
          </div>

          <Separator className="mb-20" />
        </div>
      </section>
    </div>
  );
}
