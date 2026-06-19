'use client';

import { useEffect, useState } from 'react';
import { ImageWithFallback } from './ui/image-with-fallback';
import { Button } from './ui/button';

export default function PopupDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastClosed = localStorage.getItem('popupClosedAt');

    if (!lastClosed) {
      queueMicrotask(() => setOpen(true));
      return;
    }

    const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;
    const elapsed = Date.now() - Number(lastClosed);

    if (elapsed >= THREE_DAYS) {
      queueMicrotask(() => setOpen(true));
    }
  }, []);

  const handleClose = () => setOpen(false);

  const handleDontShowAgain = () => {
    localStorage.setItem('popupClosedAt', Date.now().toString());
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-full p-6 space-y-2 animate-fadeIn">
        {/* IMAGE */}
        <div className="w-full h-80 relative">
          <ImageWithFallback src="/images/itcc-logo-white-back.png" fallbackSrc="/images/default.png" alt="Welcome" fill className="object-cover rounded-md p-10" />
        </div>

        {/* TEXT */}
        <h2 className="dark:text-accent-foreground text-lg font-semibold">Selamat Datang!</h2>
        <p className="dark:text-accent-foreground text-base py-1 text-justify leading-relaxed">
          ITCC INTERNATIONAL adalah Lembaga Sertifikasi International yang berpusat di United Kingdom – Inggris.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-1 justify-end mt-8">
          <Button onClick={handleDontShowAgain} variant="link" className="hover:underline hover:cursor-pointer transition">
            Jangan tampilkan lagi
          </Button>

          <Button onClick={handleClose} variant="default" className="hover:cursor-pointer transition">
            Mulai Menjelajah
          </Button>
        </div>
      </div>
    </div>
  );
}
