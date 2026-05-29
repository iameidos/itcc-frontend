'use client';

import { useEffect } from 'react';

export function PaginationWrapper({ page, containerId = 'page-container', children }: { page: number; containerId?: string; children: React.ReactNode }) {
  useEffect(() => {
    const container = document.getElementById(containerId);

    if (container) {
      const top = container.offsetTop - 60; // offset biar pas di bawah header
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  }, [page, containerId]);

  return <>{children}</>;
}
