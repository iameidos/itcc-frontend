import { certificationsData } from '@/lib/data/certifications.data';

export default function Certifications() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Sertifikasi & Standar</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">Kami berkomitmen untuk memenuhi standar internasional dalam kualitas, lingkungan, dan keselamatan kerja.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {certificationsData.map((c, i) => (
            <div key={i} className="group p-8 rounded-xl border bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              {/* Badge */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center text-lg font-bold text-white shadow-md group-hover:scale-105 transition">
                {c.code}
              </div>

              {/* Title */}
              <h3 className="font-dmsans text-xl font-semibold mb-2">{c.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
