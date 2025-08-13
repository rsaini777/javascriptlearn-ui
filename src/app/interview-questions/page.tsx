import GlassCard from '@/components/GlassCard';
import SectionHeader from '@/components/SectionHeader';

export default function InterviewQuestionsPage() {
  const categories = [
    { title: 'HTML & CSS', description: 'Semantics, layout, accessibility' },
    { title: 'JavaScript', description: 'Closures, async, prototypes' },
    { title: 'React', description: 'Hooks, state, rendering' },
    { title: 'System Design', description: 'Architecture, performance' },
    { title: 'Behavioral', description: 'Past experience and scenarios' },
  ];
  return (
    <div className="section pt-28 pb-16">
      <SectionHeader
        eyebrow="Interview prep"
        title="Interview Questions"
        subtitle="Curated questions with detailed answers to cover the most commonly tested areas."
        center
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-items-stretch">
        {categories.map((c) => (
          <GlassCard key={c.title} title={c.title} description={c.description} href="#" className="h-full min-h-[200px] flex flex-col" />
        ))}
      </div>
    </div>
  );
}


