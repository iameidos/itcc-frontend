'use client';

import { useCallback } from 'react';

export function useRecaptcha() {
  const execute = useCallback(async (action: string) => {
    if (typeof window === 'undefined') {
      throw new Error('reCAPTCHA hanya dapat dijalankan di browser');
    }

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      throw new Error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY belum diset di environment');
    }

    const grecaptcha = window.grecaptcha;

    if (!grecaptcha || !grecaptcha.ready) {
      throw new Error('reCAPTCHA belum siap. Pastikan script sudah dimuat.');
    }

    // await grecaptcha.ready();

    const token = await grecaptcha.execute(siteKey, { action });

    return token;
  }, []);

  return { execute };
}
