'use client';

import { useEffect, useRef, useState } from 'react';

const counters = [
  { label: 'Klien Aktif', value: 120 },
  { label: 'Proyek Selesai', value: 340 },
  { label: 'Tahun Pengalaman', value: 10 },
  { label: 'Engineer Bersertifikat', value: 25 },
];

export default function Counters() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStart(true);
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {counters.map((c, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold mb-2">{start ? <AnimatedNumber value={c.value} /> : 0}</h3>
            <p className="text-gray-300">{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const step = Math.ceil(end / (duration / 16));

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setNum(start);
    }, 16);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{num}</span>;
}
