import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { ButtonLink } from './ui/ButtonLink';
import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';

export function CheckCertificateFields() {
  return (
    <section className="flex justify-between max-w-5xl mx-auto py-20 lg:gap-x-40 items-center justify-items-center" id="ValidationCertificated">
      <div className="hidden mx-auto md:block object-contain p-8">
        <Image src="/images/itcc-logo-transparent-back.png" alt="Certificate Validated" height={120} width={220}></Image>
        <Image src="/images/ascb-white-back.png" alt="Certificate Validated" height={120} width={220}></Image>
      </div>
      <div className="mx-auto px-6 md:space-y-2 lg:space-y-4 py-20">
        <h2 className="text-balance text-sm mb-4">Cek sertifikat anda melalui form berikut:</h2>
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
