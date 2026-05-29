'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  query?: Record<string, string | number | undefined>;
}

export function Pagination({ currentPage, totalPages, basePath, query = {} }: PaginationProps) {
  if (totalPages <= 1) return null;

  const buildHref = (page: number) => {
    const params = new URLSearchParams();

    params.set('page', String(page));

    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.set(key, String(value));
      }
    });

    return {
      pathname: basePath,
      query: Object.fromEntries(params.entries()),
    };
  };

  const pagesToShow = () => {
    const pages: (number | '...')[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }

    return pages;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-12">
      {/* MOBILE COMPACT MODE */}
      <div className="flex items-center gap-2 md:hidden">
        {currentPage > 1 && (
          <Button variant="outline" size="icon" asChild>
            <Link href={buildHref(currentPage - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
        )}

        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>

        {currentPage < totalPages && (
          <Button variant="outline" size="icon" asChild>
            <Link href={buildHref(currentPage + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>

      {/* DESKTOP FULL MODE */}
      <div className="hidden md:flex items-center justify-center gap-2 flex-wrap">
        {currentPage > 1 && (
          <Button variant="outline" size="icon" asChild>
            <Link href={buildHref(1)}>
              <ChevronsLeft className="h-4 w-4" />
            </Link>
          </Button>
        )}

        {currentPage > 1 && (
          <Button variant="outline" size="icon" asChild>
            <Link href={buildHref(currentPage - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </Button>
        )}

        {pagesToShow().map((page, index) =>
          page === '...' ? (
            <div key={`ellipsis-${index}`} className="px-2 flex items-center justify-center">
              <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </div>
          ) : (
            <Button key={page} asChild variant={page === currentPage ? 'default' : 'outline'} className={cn('w-10 h-10 p-0')}>
              <Link href={buildHref(page)}>{page}</Link>
            </Button>
          ),
        )}

        {currentPage < totalPages && (
          <Button variant="outline" size="icon" asChild>
            <Link href={buildHref(currentPage + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        )}

        {currentPage < totalPages && (
          <Button variant="outline" size="icon" asChild>
            <Link href={buildHref(totalPages)}>
              <ChevronsRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
