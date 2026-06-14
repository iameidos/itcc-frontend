import Image from 'next/image';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { footerLinks } from '@/lib/data/footer/footer-links.data';
import { footerSocials } from '@/lib/data/footer/footer-socials.data';
import { footerLegal } from '@/lib/data/footer/footer-legal.data';

export default function FooterSection() {
  return (
    <footer className="bg-linear-to-br from-green-700 to-teal-300 min-h-screen py-8 md:py-32" id="Contact">
      <div className="text-accent-foreground mx-auto max-w-5xl px-6">
        {/* Logo */}
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Image src="/images/itcc-logo-transparent-back.png" alt="Logo" width={148} height={40} />
          <Image src="/images/ascb-white-back.png" alt="Logo" width={148} height={40} />
        </Link>

        {/* Copyright */}
        <span className="block mx-auto max-w-xl lg:max-w-2xl items-center text-base">
          <p className="text-center py-4">
            <span className="font-bold">ITCC International</span> merupakan badan sertifikasi yang memiliki layanan dalam ISO 9001, ISO 14001, OHSAS 18001, ISO 22000, ISO 27001,
            ISO 13485, dan ISO/TS 16949
          </p>
        </span>

        {/* Navigation Links */}
        <div className="my-4 flex flex-wrap justify-center gap-6 text-sm">
          {footerLinks.map((link, i) => (
            <Link key={i} href={link.href} className="hover:underline duration-150">
              {link.title}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {footerSocials.map((item, i) => (
            <Link key={i} href={item.href} aria-label={item.aria} target="_blank" rel="noopener noreferrer" className="duration-150">
              {item.icon}
            </Link>
          ))}
        </div>

        <Separator orientation="horizontal" />

        {/* Legal Links */}
        <div className="my-8 flex flex-wrap justify-center items-center text-center gap-6 text-xs">
          {footerLegal.map((item, i) => (
            <Link key={i} href={item.href} className="hover:underline">
              {item.title}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <span className="block text-center text-xs">
          Copyright © {new Date().getFullYear()}{' '}
          <Link href="#" target="_blank" className="hover:underline">
            ITCC International.
          </Link>{' '}
          All rights reserved.
        </span>
      </div>
    </footer>
  );
}
