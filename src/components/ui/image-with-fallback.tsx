'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

const DEFAULT_FALLBACK = '/images/default.png';

type Props = Omit<ImageProps, 'src'> & {
  src?: string | null;
  fallbackSrc?: string;
};

export function ImageWithFallback({ src, fallbackSrc = DEFAULT_FALLBACK, alt, ...rest }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);

  return (
    <Image
      {...rest}
      alt={alt}
      src={currentSrc || fallbackSrc}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
