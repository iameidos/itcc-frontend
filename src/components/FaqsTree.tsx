'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import Link from 'next/link';
import { ButtonLink } from './ui/ButtonLink';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

export default function FAQsTree() {
  const faqItems: FAQItem[] = [
    {
      id: 'item-1',
      icon: 'clock',
      question: 'Jam operasional bisnis Anda adalah?',
      answer:
        'Tim layanan pelanggan kami tersedia Senin hingga Jumat dari pukul 09.00 hingga 20.00 WIB, dan akhir pekan dari pukul 10.00 hingga 18.00 WIB. Selama hari libur, jam operasional dapat bervariasi.',
    },
    {
      id: 'item-2',
      icon: 'credit-card',
      question: 'Bagaimana cara kerja pembayaran berlangganan?',
      answer:
        'Pembayaran langganan akan secara otomatis dibebankan ke metode pembayaran default Anda pada tanggal yang sama setiap bulan atau tahun, tergantung pada siklus penagihan Anda. Anda dapat memperbarui informasi pembayaran dan melihat riwayat penagihan di dasbor akun Anda..',
    },
    {
      id: 'item-3',
      icon: 'truck',
      question: 'Bisakah saya mempercepat pengiriman saya?',
      answer:
        'Ya, kami menawarkan beberapa opsi pengiriman cepat saat pembayaran. Pengiriman 1 hari dan 2 hari tersedia untuk sebagian besar alamat, jika pesanan dilakukan sebelum pukul 14.00 WIB. Opsi pengiriman cepat bervariasi tergantung tujuan.',
    },
    {
      id: 'item-4',
      icon: 'globe',
      question: 'Apakah Anda menawarkan dukungan lokal??',
      answer:
        'Kami menawarkan dukungan multibahasa dalam bahasa Inggris, Spanyol, Prancis, Jerman, dan Jepang. Tim dukungan kami dapat membantu pelanggan dalam bahasa-bahasa ini melalui email, obrolan, dan telepon selama jam kerja standar untuk masing-masing wilayah.',
    },
    {
      id: 'item-5',
      icon: 'package',
      question: 'Bagaimana cara melacak pesanan saya?',
      answer:
        'Setelah pesanan Anda dikirim, Anda akan menerima email konfirmasi dengan nomor pelacakan. Anda dapat menggunakan nomor ini di situs web kami atau situs web kurir untuk melacak paket Anda. Anda juga dapat melihat status pesanan dan informasi pelacakan di dasbor akun Anda di bawah "Riwayat Pesanan".',
    },
  ];

  return (
    <section className="bg-background dark:bg-background py-20" id="FandQ">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-4">
                Can&apos;t find what you&apos;re looking for? Contact our{' '}
                <Link href="#" className="text-primary font-medium hover:underline">
                  customer support team
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon name={item.icon} className="m-auto size-4" />
                      </div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <ButtonLink href="/faq" size="sm" variant="link" className="flex justify-self-end mt-4">
              Lihat Semua
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
