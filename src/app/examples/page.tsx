import GlassCard from '@/components/GlassCard';
import SectionHeader from '@/components/SectionHeader';

export default function ExamplesPage() {
  const examples = [
    { title: 'Flatten', description: 'Flattens a nested array deeply.' },
    { title: 'Deep Clone', description: 'Clone objects without references.' },
    { title: 'Like Button', description: 'A simple interactive UI component.' },
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full">
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <SectionHeader
          eyebrow="Example solutions"
          title="Every question answered by ex-interviewers"
          subtitle="Practical considerations and multiple approaches."
          center
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-items-stretch">
          {examples.map((e) => (
            <div key={e.title} className="h-full">
              <GlassCard title={e.title} description={e.description} href="#" className="h-full min-h-[200px] flex flex-col" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


