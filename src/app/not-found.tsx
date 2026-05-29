import { ButtonLink } from '@/components/ui/ButtonLink';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className="w-full min-h-screen py-40 bg-linear-to-br from-indigo-900 to-sky-700 relative">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-40">
        {/* LEFT: TEXT */}
        <div className="space-y-6 text-center text-muted md:text-left">
          <h2 className="text-xl font-semibold uppercase">Halaman tidak ditemukan</h2>
          <p className="text-base">Tidak dapat menemukan halaman yang anda maksud, mungkin halaman sudah diperbaharui atau dirubah.</p>

          <ButtonLink variant="primary" href="/" className="inline-block">
            Go back home
          </ButtonLink>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image src="/images/default.png" alt="Not Found Illustration" width={1024} height={682} />
        </div>
      </div>
    </section>
  );
}
