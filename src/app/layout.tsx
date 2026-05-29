import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/dark-mode/theme-provider';
import { Geist, Geist_Mono } from 'next/font/google';
import HeroHeader from '@/components/Header';
import FooterSection from '@/components/Footer';
import Script from 'next/script';
import PopupDialog from '@/components/PopupDialog';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ITCC International',
  description: 'ITCC INTERNATIONAL adalah Lembaga Sertifikasi International yang berpusat di United Kingdom – Inggris.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <HeroHeader />

          <PopupDialog />
          <main className="overflow-hidden">{children}</main>

          <Toaster richColors position="top-right" />
          <FooterSection />
        </ThemeProvider>

        <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} strategy="afterInteractive" />
      </body>
    </html>
  );
}
