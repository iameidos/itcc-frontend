import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { ButtonLink } from './ui/ButtonLink';
import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';

export function CheckCertificateFields() {
  return (
    <section className="flex justify-between py-20 items-center" id="ValidationCertificated">
      <div className="hidden md:block object-contain p-8 lg:px-40">
        <Image src="/images/itcc-logo-transparent-back.png" alt="Certificate Validated" height={180} width={280}></Image>
        <Image src="/images/ascb-white-back.png" alt="Certificate Validated" height={180} width={280}></Image>
      </div>
      <div className="mx-auto px-6 md:space-y-2 lg:space-y-4 py-20">
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
