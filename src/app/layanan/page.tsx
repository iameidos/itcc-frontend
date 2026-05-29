import { Suspense } from 'react';
import LayananPage from './LayananPage';

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <LayananPage />
    </Suspense>
  );
}
