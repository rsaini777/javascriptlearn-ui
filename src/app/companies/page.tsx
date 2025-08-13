import GlassCard from '@/components/GlassCard';
import SectionHeader from '@/components/SectionHeader';

export default function CompaniesPage() {
  const companies = [
    { name: 'Google', count: 34 },
    { name: 'Amazon', count: 61 },
    { name: 'TikTok', count: 35 },
    { name: 'ByteDance', count: 27 },
    { name: 'Apple', count: 13 },
    { name: 'Microsoft', count: 19 },
    { name: 'Atlassian', count: 17 },
    { name: 'LinkedIn', count: 18 },
    { name: 'Uber', count: 15 },
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full">
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <SectionHeader
          eyebrow="Company guides"
          title="Leverage insider tips from leading companies"
          subtitle="Practice company-specific questions regularly updated."
          center
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((c) => (
            <GlassCard
              key={c.name}
              title={c.name}
              description={`${c.count} questions`}
              href="#"
            />
          ))}
        </div>
      </section>
    </div>
  );
}


