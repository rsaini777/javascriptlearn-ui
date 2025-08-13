import GlassCard from '@/components/GlassCard';
import SectionHeader from '@/components/SectionHeader';

export default function BackendPage() {
  const topics = [
    { title: 'APIs & REST', description: 'Designing endpoints, status codes, versioning' },
    { title: 'Authentication', description: 'JWT, sessions, OAuth' },
    { title: 'Databases', description: 'SQL vs NoSQL, indexing, transactions' },
    { title: 'Caching', description: 'CDN, Redis, strategies' },
    { title: 'Queues & Workers', description: 'Background jobs, reliability' },
    { title: 'Testing', description: 'Unit, integration, contract' },
  ];

  return (
    <div className="section pt-28 pb-16">
      <SectionHeader
        eyebrow="Backend"
        title="Backend blocks"
        subtitle="Foundational building blocks for back end systems with concise guides."
        center
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-items-stretch">
        {topics.map((t) => (
          <GlassCard key={t.title} title={t.title} description={t.description} href="#" className="h-full min-h-[200px] flex flex-col" />
        ))}
      </div>
    </div>
  );
}


