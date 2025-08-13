type Testimonial = {
  quote: string;
  author: string;
  subtitle?: string;
  highlights?: string[];
};

const testimonials: Testimonial[] = [
  {
    quote:
      'GreatFrontEnd provided an amazing platform to hone my frontend skills. It bridged my fundamentals and gave me a strong framework for system design tradeoffs. It was a game changer for my interviews.',
    author: 'Yugant Joshi',
    subtitle: 'Frontend Software Engineer, San Jose, US',
    highlights: ['33 offers', '22x increase in TC'],
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-card p-6 md:p-8 h-full min-h-[220px]">
            <p className="text-base md:text-lg leading-7 md:leading-8" style={{ color: '#6b7280' }}>“{t.quote}”</p>
            <div className="glass-divider my-4" />
            <div className="font-semibold" style={{ color: '#00171f' }}>{t.author}</div>
            {t.subtitle && <div className="text-sm" style={{ color: '#6b7280' }}>{t.subtitle}</div>}
            {t.highlights && (
              <div className="mt-3 flex flex-wrap gap-2">
                {t.highlights.map((h) => (
                  <span key={h} className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: '#ffffffcc', border: '1px solid rgba(0,0,0,0.08)', color: '#00171f' }}>{h}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


