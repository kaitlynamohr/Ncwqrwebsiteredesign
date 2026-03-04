interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  overlay?: string;
}

export function PageHero({ title, subtitle, imageUrl, overlay = 'rgba(15,41,66,0.65)' }: PageHeroProps) {
  return (
    <div
      className="relative flex items-end justify-start pt-20"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '340px',
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(to right, ${overlay} 60%, rgba(15,41,66,0.3))` }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8">
        <div className="max-w-2xl">
          <h1 className="text-white mb-3" style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.15 }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-blue-100" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: '#1B4F8A' }} />
    </div>
  );
}
