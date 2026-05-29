import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: '_blank' | '_self';

  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;

  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export function ButtonLink({
  href,
  children,
  className,
  target = '_self',

  variant = 'primary',
  size = 'md',
  loading = false,

  icon,
  iconPosition = 'left',
}: ButtonLinkProps) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    outline: 'border border-gray-400 hover:bg-muted-foreground',
    ghost: 'hover:bg-muted-foreground',
    link: 'hover:underline hover:cursor-pointer',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  return (
    <Link
      href={href}
      target={target}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-dmsans text-sm transition-all',
        variants[variant],
        sizes[size],
        loading && 'pointer-events-none opacity-70',
        className,
      )}
    >
      {/* Loading Spinner */}
      {loading && <Loader2 className="w-5 h-5 animate-spin mr-2" />}

      {/* Icon Left */}
      {!loading && icon && iconPosition === 'left' && <span className="mr-2 flex items-center">{icon}</span>}

      {children}

      {/* Icon Right */}
      {!loading && icon && iconPosition === 'right' && <span className="ml-2 flex items-center">{icon}</span>}
    </Link>
  );
}
