'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useScroll } from 'motion/react';
import { ToggleButton } from '@/components/dark-mode/toggle-button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/lib/data/menu-items.data';

export default function HeroHeader() {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(false);

  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => setScrolled(v > 0.05));
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className={cn('fixed top-0 z-50 w-full bg-linear-to-r from-gray-100 to-gray-50 border-b transition-colors duration-150', scrolled && 'bg-background/20 backdrop-blur-3xl')}
      >
        <div className="mx-auto max-w-5xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-2 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              {/* LOGO */}
              <Link href="/" aria-label="go home" className="mx-auto block size-fit text-muted">
                <Image src="/images/logo-itcc-with-text.png" alt="Logo" width={200} height={60} className="hidden dark:block" />
                <Image src="/images/logo-itcc-with-text.png" alt="Logo" width={200} height={60} className="dark:hidden" />
              </Link>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              {/* DESKTOP MENU */}
              <div className="hidden lg:block">
                <ul className="flex gap-8 text-base">
                  {menuItems.map((item, index) => {
                    const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

                    return (
                      <li key={index} className={cn('relative', isActive && 'font-semibold border-b-white/70')}>
                        {!item.dropdown && (
                          <Link
                            href={item.href}
                            className={cn(
                              'relative block duration-150',
                              isActive && 'after:w-full',
                              'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent-foreground after:transition-all',
                            )}
                          >
                            {item.name}
                          </Link>
                        )}

                        {item.dropdown && (
                          <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
                            <DropdownMenuTrigger className="flex items-center gap-1 duration-150">
                              {item.name}
                              <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', openDropdown && 'rotate-180')} />
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="start" className="w-fit mt-4 animate-dropdown-fade">
                              {item.dropdown.map((sub, i) => (
                                <DropdownMenuItem key={i} asChild className={cn(pathname === sub.href && 'bg-accent text-accent-foreground')}>
                                  <Link href={sub.href}>{sub.name}</Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* MOBILE MENU */}
            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base lg:hidden">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {!item.dropdown && (
                        <Link href={item.href} className="block text-muted-foreground hover:text-accent-foreground">
                          {item.name}
                        </Link>
                      )}

                      {item.dropdown && (
                        <details className="group">
                          <summary className="flex items-center justify-between cursor-pointer text-muted-foreground hover:text-accent-foreground">
                            {item.name}
                            <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                          </summary>

                          <ul className="mt-2 ml-4 space-y-2 border-l pl-4">
                            {item.dropdown.map((sub, i) => (
                              <li key={i}>
                                <Link href={sub.href} className="block text-sm text-muted-foreground hover:text-accent-foreground">
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild size="sm" variant="default" className="px-4">
                  <Link href="https://dashboard.edocumentiso.com/" target="_blank">
                    <span className="text-base">Cek Sertifikat</span>
                  </Link>
                </Button>
                <ToggleButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
