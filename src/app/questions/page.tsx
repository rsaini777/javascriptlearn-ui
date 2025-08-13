import GlassCard from '@/components/GlassCard';
import SectionHeader from '@/components/SectionHeader';

export default function QuestionsPage() {
  const items = [
    { title: 'Accessibility', total: 24 },
    { title: 'Async', total: 24 },
    { title: 'CSS', total: 24 },
    { title: 'HTML', total: 24 },
    { title: 'JavaScript', total: 24 },
    { title: 'Networking', total: 24 },
    { title: 'OOP', total: 24 },
    { title: 'Performance', total: 24 },
    { title: 'React Hooks', total: 24 },
    { title: 'Security', total: 24 },
    { title: 'Web APIs', total: 24 },
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full">
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <SectionHeader
          eyebrow="Question bank"
          title="A huge question bank"
          subtitle="All critical topics, formats and frameworks, each with solutions and tests."
          center
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <GlassCard key={i.title} title={i.title} description={`${i.total} questions`} href="#" />
          ))}
        </div>
      </section>
    </div>
  );
}


