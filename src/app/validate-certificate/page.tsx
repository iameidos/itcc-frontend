import { CheckCertificateFields } from '@/components/CheckCertificate';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const ValidateCertificatePage = () => {
  return (
    <section className="h-screen flex lg:flex-col justify-between max-w-5xl mx-auto py-20 lg:py-40 items-center justify-items-center">
      <div className="flex items-center">
        <CheckCertificateFields />
      </div>
      <div className="flext justify-items-center">
        <Link href="/validate-certificate" className="flex items-center text-xs text-muted-foreground hover:underline transition">
          <ChevronLeft size={14} />
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default ValidateCertificatePage;
