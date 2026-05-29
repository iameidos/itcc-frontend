import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function withFallbackImage(src?: string | null) {
  if (!src || src.trim() === '') {
    return '/images/default-news.jpg';
  }
  return src;
}
