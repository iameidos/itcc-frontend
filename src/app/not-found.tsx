import { ButtonLink } from '@/components/ui/ButtonLink';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className="w-full min-h-screen py-40 bg-linear-to-b from-indigo-500 to-sky-300 relative">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: TEXT */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-xl text-muted font-semibold">Halaman tidak ditemukan</h2>
          <p className="text-base text-muted">Tidak dapat menemukan halaman yang anda maksud, mungkin halaman sudah diperbaharui atau dirubah.</p>

          <ButtonLink variant="primary" href="/" className="inline-block">
            Go back home
          </ButtonLink>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/default-news.png" // ganti sesuai lokasi gambar lo
            alt="Not Found Illustration"
            width={480}
            height={200}
            className="opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
