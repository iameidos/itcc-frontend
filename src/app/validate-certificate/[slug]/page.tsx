import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft } from 'lucide-react';
import StatusButton from '@/components/StatusButton';
import { getCertificate } from '@/lib/certificate';

function formatDate(date?: string | null) {
  if (!date) return '-';

  return new Date(date).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default async function ValidateCertificateDetailsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const info = await getCertificate(slug);

  if (!info) return notFound();

  return (
    <div className="w-full flex items-center justify-center bg-slate-100">
      <section className="pt-10 md:pt-20 fade-in rounded-md py-6">
        <div className="w-full p-6 rounded-md bg-slate-300 shadow-sm">
          <Link
            href="/validate-certificate"
            className="inline-flex items-center text-xs text-muted-foreground hover:underline transition mb-6"
          >
            <ChevronLeft size={14} />
            Kembali ke Validasi Sertifikat
          </Link>

          <div className="grid">
            <div className="relative overflow-hidden items-center justify-items-center bg-white rounded-sm p-6 mb-10 shadow-sm group">
              <Image
                src="/images/itcc-logo-white-back.png"
                alt=""
                width={248}
                height={248}
                className="object-cover transition-transform rounded-md p-2 duration-300 group-hover:scale-105"
              />

              <Image
                src="/images/ascb-white-back.png"
                alt=""
                width={248}
                height={248}
                className="object-cover transition-transform rounded-md p-2 duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex-row items-center justify-items-center p-4 lg:p-8 rounded-sm bg-white shadow-sm group">
              <div className="w-full text-center font-bold text-xl lg:text-2xl py-1.5 text-white bg-surv1 rounded-md leading-relaxed uppercase duration-300 group-hover:scale-105">
                {info.perusahaan?.nama_perusahaan ?? '-'}
              </div>

              <div className="grid md:grid-cols-2 gap-4 w-full justify-items-center py-8 px-2">
                <div className="text-center text-sm space-y-2.5">
                  <h1>Scheme :</h1>
                  <p className="text-base font-bold">
                    {info.iso?.jenis_iso} : {info.iso?.tahun_iso}
                  </p>
                </div>

                <div className="text-center text-sm space-y-2.5">
                  <h1>Certificate Number :</h1>
                  <p className="text-base font-bold">
                    {info.nomor_sertifikat}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 w-full justify-items-center px-2">
                <div className="text-center max-w-xl text-sm space-y-2.5">
                  <h1>Scope of Certification :</h1>
                  <p className="text-base font-bold">
                    {info.keterangan}
                  </p>
                </div>

                <div className="text-center text-sm space-y-2.5">
                  <h1>Location :</h1>
                  <p className="text-base font-bold">
                    {info.perusahaan?.alamat_perusahaan ?? '-'}
                  </p>
                </div>

                <div className="text-center text-sm space-y-2.5">
                  <h1>Location Number :</h1>
                  <p className="text-base font-bold">
                    {info.id_perusahaan}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-row items-center justify-items-center p-4 lg:p-8 rounded-sm bg-white shadow-sm my-8 group">
              <div className="w-full">
                <div className="text-center py-2.5 text-white font-bold text-sm lg:text-base bg-cert rounded-md mb-4 duration-300 group-hover:scale-105 leading-relaxed uppercase">
                  Certification
                </div>

                <div className="grid md:grid-cols-2 justify-center mx-auto items-center">
                  <div className="text-sm h-[48px] bg-surv1 items-center text-white border flex pl-4">
                    <p className="text-sm">Initial Date</p>
                  </div>

                  <div className="items-center h-[48px] border flex pl-4">
                    <p className="text-sm font-bold">
                      {formatDate(info.tanggal_sertifikat)}
                    </p>
                  </div>

                  <div className="text-sm h-[48px] bg-surv1 items-center text-white border flex pl-4">
                    <p className="text-sm">Expired Date</p>
                  </div>

                  <div className="items-center h-[48px] border flex pl-4">
                    <p className="text-sm font-bold">
                      {formatDate(info.tanggal_berakhir_sertifikat)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-row items-center justify-items-center p-4 lg:p-8 rounded-sm shadow-sm bg-white">
              <div className="w-full">
                <div className="text-center py-2.5 text-white font-bold text-sm lg:text-base bg-surv1 rounded-md mb-4 duration-300 hover:scale-105 leading-relaxed uppercase">
                  Certificate Status
                </div>

                <div className="grid md:grid-cols-4 justify-center gap-4 mx-auto border items-center">
                  <div className="text-sm h-[48px] bg-surv1 items-center text-white flex pl-4">
                    <p className="text-sm">Certified Since</p>
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      {formatDate(info.tanggal_sertifikat)}
                    </p>
                  </div>

                  <div className="text-sm h-[48px] bg-surv1 items-center text-white flex pl-4">
                    <p className="text-sm">Certificate Status</p>
                  </div>

                  <div className="items-center">
                    <StatusButton
                      status={
                        info.status?.toLowerCase() === 'active'
                          ? 'active'
                          : 'withdrawn'
                      }
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 w-full border items-center">
                  <div className="text-sm h-[48px] bg-surv1 items-center text-white flex pl-4">
                    <p className="text-sm">Valid From</p>
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      {formatDate(info.tanggal_sertifikat)}
                    </p>
                  </div>

                  <div className="text-sm h-[48px] bg-surv1 items-center text-white flex pl-4">
                    <p className="text-sm">Expired Date</p>
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      {formatDate(info.tanggal_berakhir_sertifikat)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full mt-8">
                <div className="text-center py-2.5 text-white font-bold text-sm lg:text-base bg-surv1 rounded-md mb-4 duration-300 hover:scale-105 leading-relaxed uppercase">
                  Surveillance Status
                </div>

                <div className="grid md:grid-cols-4 gap-4 w-full border items-center">
                  <div className="text-sm h-[48px] bg-surv1 items-center text-white flex pl-4">
                    <p className="text-sm">First Surveillance</p>
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      {formatDate(info.tanggal_survei_1)}
                    </p>
                  </div>

                  <div className="text-sm h-[48px] bg-surv1 items-center text-white flex pl-4">
                    <p className="text-sm">First Surveillance Status</p>
                  </div>

                  <div className="items-center">
                    <StatusButton status="conducted" />
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4 w-full border items-center">
                  <div className="text-sm h-[48px] bg-surv1 items-center text-white flex pl-4">
                    <p className="text-sm">Second Surveillance</p>
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      {formatDate(info.tanggal_survei_2)}
                    </p>
                  </div>

                  <div className="text-sm h-[48px] bg-surv1 items-center text-white flex pl-4">
                    <p className="text-sm">Second Surveillance Status</p>
                  </div>

                  <div className="items-center">
                    <StatusButton status="conducted" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-row py-6 justify-items-center">
              <Link
                href="/validate-certificate"
                className="flex items-center text-xs text-muted-foreground hover:underline transition"
              >
                <ChevronLeft size={14} />
                Back to home
              </Link>
            </div>
          </div>

          <Separator className="my-6" />
        </div>
      </section>
    </div>
  );
}