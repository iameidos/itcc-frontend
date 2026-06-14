import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BellRing, BookCheck, ChevronRight, ListFilterPlus, Settings2, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function FeaturesTwo() {
  return (
    <section className="py-16 md:py-32 bg-accent-foreground" id="Solutions">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl uppercase">ITCC International</h2>
          <p className="mt-4 text-lg">ISO Assessment and Certification.</p>
        </div>
        <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Zap className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-2 text-base font-semibold">ITCC INTERNATIONAL</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">Lembaga Sertifikasi International yang berpusat di United Kingdom – Inggris.</p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Settings2 className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-2 text-base font-semibold">Akreditasi</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">Terakreditasi oleh ASCB (Accreditation Service for Certifying Bodies)</p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <ListFilterPlus className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-2 text-base font-semibold">Benefit</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">Pelatihan personil bersertifikat gratis untuk ISO 9001, ISO 37001, ISO 14001, ISO 45001, ISO 22000, ISO 27001, ISO 13485, dan ISO/TS 16949.</p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <BookCheck className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-2 text-base font-semibold">Ruang Lingkup Akreditasi</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                ITCC International memiliki ruang lingkup akreditasi penuh untuk bidang ISO 9001, ISO 37001, ISO 14001, ISO 45001, ISO 22000, ISO 27001, ISO 13485, ISO 50001, dan
                ISO/TS 16949.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-2 text-base font-semibold">Auditor Profesional</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                ITCC International memiliki Auditor dan Instruktur berpengalaman dan ahli di bidang Sertifikasi ISO termasuk program peningkatan mutu dan efisiensi.
              </p>
            </CardContent>
          </div>

          <div className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <BellRing className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-2 text-base font-semibold">Cek Keabsahan sertifikat:</h3>
            </CardHeader>

            <CardContent>
              <ul className="text-sm space-y-2">
                <li>
                  <Link href="https://www.itccinternational.com/" target="_blank" className="hover:underline">
                    Website ITCC
                  </Link>
                </li>
                <li>
                  <Link href="https://www.irqao.com/Search.aspx?s=itcc%20international" target="_blank" className="hover:underline">
                    Website IRQAO
                  </Link>
                </li>
                <li>
                  <Link href="/" target="_blank" className="hover:underline">
                    Barcode
                  </Link>
                </li>
              </ul>
            </CardContent>
          </div>
        </Card>
        <div className="flex justify-center text-center py-8">
          <Link href="/tentang-kami" className="hover:underline">
            <span className="flex items-center text-sm font-medium ">
              selengkapnya <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
  </div>
);
