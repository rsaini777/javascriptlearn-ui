import GlassCard from '@/components/GlassCard';
import SectionHeader from '@/components/SectionHeader';

export default function GuidesPage() {
  const guides = [
    { title: 'Front End Interview Playbook', href: '#', description: 'Everything you need to prepare strategically.' },
    { title: 'Front End System Design Playbook', href: '#', description: 'Frameworks for architecture and tradeoffs.' },
    { title: 'React Interview Playbook', href: '#', description: 'React-specific prep from fundamentals to advanced.' },
    { title: 'Behavioral Interview Playbook', href: '#', description: 'Tell compelling stories with clarity and impact.' },
  ];

  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full">
      <section className="section pt-28 pb-16">
        <SectionHeader
          eyebrow="Guides"
          title="Playbooks crafted by senior engineers"
          subtitle="Learn best practices and techniques gleaned from years of interviewing and building."
          center
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {guides.map((g) => (
            <GlassCard key={g.title} title={g.title} description={g.description} href={g.href} />
          ))}
        </div>
      </section>
    </div>
  );
}


