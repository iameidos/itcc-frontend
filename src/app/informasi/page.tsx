import { Suspense } from 'react';
import InformasiPage from './InformasiPage';

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <InformasiPage />
    </Suspense>
  );
}
