import { legalPages } from '@/lib/data/legal.data';
import { notFound } from 'next/navigation';

export default async function LegalPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;

  const page = legalPages.find((p) => p.slug === slug);
  if (!page) return notFound();

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-40 bg-linear-to-b bg-muted border-b border-muted shadow-md">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-semibold">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold my-4">{page.title}</h1>
          <p className="text-sm">{page.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-5xl min-h-screen mx-auto px-6 flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="md:w-1/3 md:border-r md:border-muted-foreground md:pr-6">
            <h2 className="text-sm font-semibold mb-4">Daftar Isi</h2>
            <nav className="space-y-2 text-sm">
              {page.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="block text-gray-400 hover:cursor-pointer transition">
                  {section.heading}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="md:w-2/3 space-y-10 pl-6">
            {page.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-xl font-semibold mb-4">{section.heading}</h2>

                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.title}>
                      <h3 className="text-sm font-semibold text-gray-400">{item.title}</h3>
                      <p className="text-sm leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <p className="text-xs text-muted-foreground mt-8">Dengan menggunakan layanan kami, Anda menyetujui seluruh ketentuan yang berlaku.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
