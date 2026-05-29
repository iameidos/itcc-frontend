import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumb?: BreadcrumbItem[];
}

export default function PageHeader({ title, subtitle, backgroundImage, breadcrumb = [{ label: 'Home', href: '/' }, { label: title }] }: PageHeaderProps) {
  return (
    <div className="relative w-full h-[380px] overflow-hidden border-b">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #0a0f1f, #1c2a4a)',
        }}
      />

      {/* Industrial Mesh Overlay */}
      <div className="absolute inset-0 opacity-[0.18] pointer-events-none bg-[url('/textures/mesh-grid.png')] bg-repeat" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[url('/textures/noise.png')] mix-blend-overlay" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 opacity-0 animate-fadeIn">
        <div className="text-center max-w-3xl space-y-4">
          {/* Title */}
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">{title}</h1>

          {/* Subtitle */}
          {subtitle && <p className="text-gray-200 mt-2 text-lg drop-shadow">{subtitle}</p>}

          {/* Breadcrumb */}
          <nav className="text-gray-300 text-sm mt-2 flex justify-center gap-2">
            {breadcrumb.map((item, index) => {
              const isLast = index === breadcrumb.length - 1;

              return (
                <span key={index} className="flex items-center gap-2">
                  {item.href && !isLast ? (
                    <Link href={item.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white font-semibold">{item.label}</span>
                  )}

                  {!isLast && <span className="text-gray-400">/</span>}
                </span>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
