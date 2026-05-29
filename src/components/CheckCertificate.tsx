import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { ButtonLink } from './ui/ButtonLink';
import { SquareArrowOutUpRight } from 'lucide-react';

export function CheckCertificateFields() {
  return (
    <section className="min-h-[520] sm:max-h-screen flex items-center py-12 md:py-20 lg:py-32 " id="ValidationCertificated">
      <div className="mx-auto max-w-5xl space-y-6 px-6 md:space-y-2 lg:space-y-4">
        <h2 className="text-balance text-base font-semibold mb-6">Cek sertifikat anda melalui form berikut</h2>
        <Field orientation="horizontal">
          <Input type="validation" placeholder="Nomor Sertifikat / Certificate Number" />
          <ButtonLink variant="primary" href="/" size="sm">
            Check
          </ButtonLink>
        </Field>
        <hr className="border" />
        <p className="text-xs text-muted-foreground flex items-center">
          Anda akan diarahkan ke halaman baru untuk melihat kelengkapan sertifikat. <SquareArrowOutUpRight size={12} />
        </p>
      </div>
    </section>
  );
}
