import Link from "next/link";
import Image from "next/image";
import Foreword from "@/components/Foreword";
import Testimonials from "@/components/Testimonials";

const cards = [
  {
    title: "UI components",
    description: "Build interactive UI components with real-time preview and tests.",
    href: "/challenges",
  },
  {
    title: "JavaScript functions",
    description: "Practice core JS problems with edge-case driven tests.",
    href: "/learn",
  },
  {
    title: "System design",
    description: "Learn front end system design patterns with tradeoffs.",
    href: "/learn",
  },
  {
    title: "Quiz",
    description: "Check your understanding with quick quizzes across topics.",
    href: "/learn",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden">
      {/* subtle radial glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[32rem] w-[32rem] rounded-full" style={{ backgroundColor: '#00345922', filter: 'blur(64px)' }} />
        <div className="absolute -top-48 right-0 h-[28rem] w-[28rem] rounded-full" style={{ backgroundColor: '#00171f22', filter: 'blur(64px)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full" style={{ backgroundColor: '#00a8e822', filter: 'blur(64px)' }} />
      </div>

      {/* Hero */}
      <section className="section pt-28 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs backdrop-blur" style={{ backgroundColor: '#ffffffcc', border: '1px solid rgba(0,0,0,0.08)', color: '#00171f' }}>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#00a8e8' }} />
          200+ free questions to start
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm" style={{ color: '#00171f' }}>
          Navigate front end interviews with ease
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#6b7280' }}>
          Practice high-quality front end interview questions with detailed solutions, crafted by senior engineers.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" className="glass-button px-6 py-3 font-semibold" style={{ color: '#00171f', backgroundColor: '#ffffffcc' }}>
            Get full access
          </Link>
          <Link href="/learn" className="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 backdrop-blur transition-colors">
            Explore questions
          </Link>
        </div>
      </section>

      {/* Cards */}
      <section className="section pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-stretch items-stretch">
          {cards.map((c) => (
            <Link key={c.title} href={c.href} className="group glass-card p-5 hover:translate-y-[-2px] transition-transform h-full flex flex-col min-h-[180px] md:min-h-[200px]">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg tracking-tight" style={{ color: '#00171f' }}>
                  {c.title}
                </h3>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/60 border border-black/10 group-hover:scale-110 transition-transform" style={{ color: '#00171f' }}>
                  →
                </span>
              </div>
              <div className="glass-divider my-4" />
              <p className="text-sm leading-6" style={{ color: '#6b7280' }}>
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Logos strip */}
      <section className="section pb-24">
        <div className="glass-card p-6">
          <p className="text-center text-sm" style={{ color: '#6b7280' }}>By engineers from</p>
          <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-4 opacity-90">
            {[
              "/vercel.svg",
              "/next.svg",
              "/globe.svg",
              "/window.svg",
              "/file.svg",
              "/vercel.svg",
            ].map((src, i) => (
              <div key={i} className="flex items-center justify-center py-3">
                <Image src={src} alt="logo" width={72} height={24} className="invert opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foreword */}
      <Foreword />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
