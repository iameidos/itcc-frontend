'use client';

import { useEffect, useRef } from 'react';

const timelineData = [
  { year: '2015', text: 'Perusahaan didirikan dan mulai menyediakan solusi industri.' },
  { year: '2018', text: 'Ekspansi layanan otomasi dan integrasi sistem.' },
  { year: '2021', text: 'Mendapatkan kepercayaan dari klien nasional dan internasional.' },
  { year: '2024', text: 'Transformasi digital dan inovasi teknologi industri.' },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.timeline-item');
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('show');
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-16">Sejarah Perusahaan</h2>

      <div ref={ref} className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute z-index left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-600 to-blue-300 shadow-lg z-0"></div>

        {timelineData.map((item, i) => (
          <div
            key={i}
            className={`timeline-item opacity-0 translate-y-10 transition-all duration-700 relative z-10 flex items-start gap-6 mb-20 ${
              i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md z-20"></div>

            {/* Year */}
            <div className="bg-blue-600 text-white px-5 py-2 rounded-md shadow-md font-semibold min-w-[90px] text-center">{item.year}</div>

            {/* Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-sm">
              <p className="text-gray-700 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
