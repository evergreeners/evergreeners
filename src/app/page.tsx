import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedSection } from '@/components/landing/animated-section';

const rules = [
  {
    title: 'The First Rule',
    description: 'Public accountability is the only rule. Your streak is public.',
  },
  {
    title: 'The Second Rule',
    description: 'Commit every day. A single day missed resets your streak to zero.',
  },
  {
    title: 'The Third Rule',
    description: 'The season ends. Streaks are reset. Glory is eternal.',
  },
];

const ranks = [
  { name: 'Seedling', days: 0, color: 'text-gray-400' },
  { name: 'Sprout', days: 7, color: 'text-lime-500' },
  { name: 'Sapling', days: 14, color: 'text-green-500' },
  { name: 'Evergreen', days: 30, color: 'text-emerald-500' },
  { name: 'Redwood', days: 100, color: 'text-teal-400' },
  { name: 'Sequoia', days: 365, color: 'text-cyan-400' },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-emerald-950 text-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 sm:p-6">
        <div className="flex items-center gap-2">
          <svg
            className="h-8 w-8 text-emerald-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2L2 7V17L12 22L22 17V7L12 2ZM4 8.236L12 12.511L20 8.236V16.764L12 20.489L4 16.764V8.236Z"
              fill="currentColor"
            />
          </svg>
          <h1 className="text-xl font-bold tracking-tighter">Evergreeners</h1>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/dashboard">Log In</Link>
        </Button>
      </header>

      <main className="flex-1">
        <section className="flex min-h-[80vh] flex-col items-center justify-center text-center p-4">
          <h2 className="text-6xl sm:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-400">
            We Are Not Here to Impress
          </h2>
          <p className="mt-4 max-w-2xl text-lg tracking-wide text-gray-300">
            We are here to build. To grow. To commit. This is not a popularity contest. This is a testament to your dedication, etched in the blockchain of your own effort.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400 text-base font-bold shadow-lg shadow-emerald-500/10">
              Connect GitHub & Start Your Streak
            </Button>
          </div>
        </section>

        <AnimatedSection as="section" className="py-16 sm:py-24">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50"
                >
                  <h3 className="font-bold text-xl text-white">{rule.title}</h3>
                  <p className="mt-2 text-gray-300 tracking-wide">{rule.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection as="section" className="py-16 sm:py-24">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="text-4xl font-bold tracking-tighter text-white">The Ranks</h2>
                <p className="mt-2 text-lg text-gray-300">Your dedication, recognized.</p>
                <div className="mt-12">
                  <div className="relative">
                      {/* Timeline bar */}
                      <div className="absolute left-0 top-1/2 w-full h-0.5 bg-white/10 -translate-y-1/2"></div>
                      
                      <div className="flex justify-between">
                          {ranks.map((rank, index) => (
                              <div key={index} className="relative flex flex-col items-center">
                                  {/* Dot on timeline */}
                                  <div className="w-3 h-3 bg-gray-700 rounded-full border-2 border-white/20"></div>
                                  
                                  {/* Rank Info */}
                                  <div className="mt-4 text-center">
                                      <h3 className={`font-code text-lg font-semibold ${rank.color}`}>{rank.name}</h3>
                                      <p className="text-sm text-gray-400 font-code">{rank.days}+ days</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
                </div>
            </div>
        </AnimatedSection>

      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Evergreeners. All rights reserved.</p>
      </footer>
    </div>
  );
}
