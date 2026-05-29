import { ButtonLink } from './ui/ButtonLink';

export default function CallToAction() {
  return (
    <>
      <section className="py-20 text-center">
        <h2 className="font-dmsans text-3xl font-bold mb-4">Siap Meningkatkan Efisiensi Industri Anda?</h2>
        <p className="font-inter mb-8">Hubungi kami untuk konsultasi atau informasi lebih lanjut.</p>
        <ButtonLink variant="outline" href="/kontak" className="inline-block font-semibold px-8 py-3 rounded-md shadow transition">
          Hubungi Kami
        </ButtonLink>
      </section>
    </>
  );
}
