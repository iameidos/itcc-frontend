'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { faqCategories } from '@/lib/data/faq.data';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [openAll, setOpenAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const observerRef = useRef<IntersectionObserver | null>(null);

  // Smart search: multi-keyword, partial match, fuzzy-lite
  const smartMatch = (text: string, query: string) => {
    const q = query.toLowerCase().trim();
    if (!q) return true; // kalau search kosong, SELALU true (jangan filter)

    const keywords = q.split(' ').filter(Boolean);
    const lowerText = text.toLowerCase();

    return keywords.every((kw) => {
      if (lowerText.includes(kw)) return true;
      const fuzzy = new RegExp(kw.split('').join('.*'));
      return fuzzy.test(lowerText);
    });
  };

  // Highlight search keyword (kalau search kosong → return teks apa adanya)
  const highlight = (text: string, query: string) => {
    const q = query.trim();
    if (!q) return text;

    const regex = new RegExp(`(${q})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  // Fade-in observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.1 },
    );
  }, []);

  const filteredCategories = faqCategories.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) => smartMatch(item.question, search) || smartMatch(item.answer, search)),
  }));

  return (
    <main className="w-full">
      <PageHeader
        title="Pertanyaan yang sering diajukan"
        subtitle="Membangun solusi industri dengan standar global dan inovasi berkelanjutan."
        backgroundImage="/images/pages-header/fandq.jpg"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'F and Q' }]}
      />

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 py-20">
        {/* LEFT COLUMN (sticky) */}
        <div className="md:col-span-1 space-y-4 md:sticky md:top-24 self-start">
          <h1 className="font-dmsans text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="font-inter text-base leading-relaxed opacity-80 text-justify">
            Temukan jawaban dari pertanyaan yang paling sering diajukan oleh klien kami. Jika Anda tidak menemukan jawaban yang Anda cari, tim kami siap membantu.
          </p>
          <Button className="hover:cursor-pointer">Hubungi kami</Button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-2 space-y-4">
          {/* Search + Clear */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-60" />
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-xl pl-12 pr-12 py-2 font-inter"
            />
            {search.length > 0 && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Expand / Collapse All */}
          <Button variant="link" onClick={() => setOpenAll(!openAll)} className="font-inter flex justify-self-end text-sm hover:cursor-pointer hover:underline">
            {openAll ? 'Collapse All' : 'Expand All'}
          </Button>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {filteredCategories.map((cat, i) => (
              <div key={i}>
                <h2 className="font-dmsans text-lg font-bold mb-4">{cat.category}</h2>

                <div className="space-y-4">
                  {cat.items.length === 0 && <p className="font-inter text-sm opacity-70">Tidak ada hasil untuk pencarian ini.</p>}

                  {cat.items.map((item, idx) => {
                    const index = Number(`${i}${idx}`);

                    return (
                      <details
                        key={idx}
                        open={openAll}
                        data-index={index}
                        ref={(el) => {
                          if (el && observerRef.current) {
                            observerRef.current.observe(el);
                          }
                        }}
                        className={`border rounded-xl px-4 py-2 group cursor-pointer transition-all
                          ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                        `}
                      >
                        <summary className="flex items-center justify-between font-dmsans text-base font-semibold list-none">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: highlight(item.question, search),
                            }}
                          />
                          <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                        </summary>

                        <p
                          className="font-inter mt-3 leading-relaxed"
                          dangerouslySetInnerHTML={{
                            __html: highlight(item.answer, search),
                          }}
                        />
                      </details>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
