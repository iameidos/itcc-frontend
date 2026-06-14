import { CheckCertificateFields } from '@/components/CheckCertificate';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const ValidateCertificatePage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-items-center">
        <CheckCertificateFields />
      </div>
      <div className="p-6 justify-items-center">
        <Link href="/validate-certificate" className="flex items-center text-xs text-muted-foreground hover:underline transition">
          <ChevronLeft size={14} />
          Back to home
        </Link>
      </div>
    </>
  );
};

export default ValidateCertificatePage;
