import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GitCommit, ShieldCheck, ShieldAlert, CalendarClock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Logo } from '@/components/logo';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { AnimatedSection } from '@/components/landing/animated-section';


const RuleCard = ({ icon, title, description, isWarning }: { icon: React.ReactNode, title: string, description: string, isWarning?: boolean }) => (
    <div className={cn(
        "group relative flex flex-col items-center p-6 text-center rounded-lg transition-all",
        "bg-white/5 backdrop-blur-md border border-white/10 hover:border-emerald-500/50",
        isWarning && "border-yellow-500/20 hover:border-yellow-400/50"
    )}>
        <div className={cn(
            "mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-white/5",
            isWarning ? 'text-yellow-400' : 'text-emerald-400'
        )}>
            {icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold font-code text-slate-200">{title}</h3>
        <p className="text-slate-400 tracking-wide">{description}</p>
    </div>
);

const RankBadge = ({ title, description, locked = true, highlight = false }: { title: string, description: string, locked?: boolean, highlight?: boolean }) => (
    <div className="flex flex-col items-center gap-2">
        <div className={cn(
            "h-10 px-5 rounded-full flex items-center justify-center font-code font-semibold text-sm transition-all",
            locked ? "bg-slate-800 text-slate-500 border border-slate-700" : "bg-emerald-900/50 text-emerald-300 border border-emerald-700 shadow-lg shadow-emerald-500/10",
            highlight && "bg-lime-400/10 text-lime-300 border border-lime-700 shadow-lg shadow-lime-500/10"
        )}>
            {title}
        </div>
        <p className="text-xs text-slate-500 tracking-wide">{description}</p>
    </div>
);


const DemoCarousel = () => (
    <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
            <CarouselItem>
                <div className="p-1">
                     <Card className="shadow-2xl overflow-hidden bg-slate-900/50 border-white/10 backdrop-blur-sm">
                        <CardContent className="flex flex-col items-center justify-center p-6">
                            <h3 className="text-2xl font-bold text-emerald-400 mb-4 font-code">The Proof is in the Grid.</h3>
                            <p className="text-center text-slate-400 mb-6 tracking-wide">Your entire season, visualized. Every day is a verdict.</p>
                            <Image
                                src="https://picsum.photos/seed/heatmap-demo/1000/600"
                                alt="Activity Heatmap"
                                width={1000}
                                height={600}
                                className="rounded-lg border border-white/10"
                                data-ai-hint="data visualization graph"
                            />
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="p-1">
                     <Card className="shadow-2xl overflow-hidden bg-slate-900/50 border-white/10 backdrop-blur-sm">
                        <CardContent className="flex flex-col items-center justify-center p-6">
                            <h3 className="text-2xl font-bold text-emerald-400 mb-4 font-code">The Streak is Everything.</h3>
                             <p className="text-center text-slate-400 mb-6 tracking-wide">Current. Longest. The numbers don't lie.</p>
                            <Image
                                src="https://picsum.photos/seed/streaks-demo/1000/600"
                                alt="Streaks Cards"
                                width={1000}
                                height={600}
                                className="rounded-lg border border-white/10"
                                data-ai-hint="dashboard stats cards"
                            />
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-12 text-slate-400 border-slate-700 hover:bg-slate-800 hover:text-white" />
        <CarouselNext className="mr-12 text-slate-400 border-slate-700 hover:bg-slate-800 hover:text-white" />
    </Carousel>
);

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-emerald-950 text-slate-300 font-body">
      <div className="absolute inset-0 -z-0 h-full w-full bg-emerald-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <header className="sticky top-0 z-50 border-b border-white/10 bg-emerald-950/30 px-4 py-3 backdrop-blur-md sm:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Logo className="h-7 w-7 text-emerald-500" />
            <span className="font-headline text-xl text-white">Evergreeners</span>
          </Link>
          <Button asChild variant="ghost" className="text-slate-300 hover:bg-white/5 hover:text-white">
            <Link href="/dashboard">Login</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative container mx-auto flex flex-col items-center px-4 py-24 text-center sm:py-32">
          <h1 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-400 sm:text-6xl md:text-7xl">
            We Are Not Here to Impress. We Are Here to Remain.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl tracking-wide">
            A consistency engine for developers. One meaningful commit a day. No excuses. No grace days.
          </p>
          <Button asChild size="lg" className="mt-8 bg-emerald-500 text-emerald-950 font-bold hover:bg-emerald-400 transition-all">
            <Link href="/dashboard">
              <GitCommit className="mr-2" />
              Connect GitHub to Enter
            </Link>
          </Button>
        </section>
        
        {/* Demo Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto">
            <DemoCarousel />
          </div>
        </section>

        {/* The Rules Section */}
        <AnimatedSection as="section" className="container mx-auto px-4 py-20 sm:py-28">
          <div className="text-center mb-16">
             <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-white">
              The Laws of the System
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <RuleCard
              icon={<ShieldCheck size={28} />}
              title="The Proof"
              description="GitHub is the only truth. One meaningful action per day (Commit, Docs, Script). Spam is visible, but allowed."
            />
            <RuleCard
              icon={<ShieldAlert size={28} />}
              title="The Streak"
              description="Starts at Day 1. Miss a day? Reset to 0. Miss 7 consecutive days? You are eliminated from the Season."
              isWarning
            />
             <RuleCard
              icon={<CalendarClock size={28} />}
              title="The Season"
              description="The calendar resets every 30 days. Your streak resets, but your 'Perennial' records remain."
            />
          </div>
        </AnimatedSection>

        {/* The Ranks Section */}
        <AnimatedSection as="section" className="bg-emerald-950/50 py-20 sm:py-28">
          <div className="container mx-auto flex flex-col items-center text-center">
             <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-white">
              The Ranks
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-400 tracking-wide">Titles earned by survival.</p>
            <div className="mt-12 w-full max-w-4xl">
              <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800"></div>
                <div className="relative flex justify-between">
                    <RankBadge title="Daywalker" description="7-Day Streak" locked={false} highlight={true} />
                    <RankBadge title="Mainliner" description="14-Day Streak" locked={false} />
                    <RankBadge title="Unbroken" description="30-Day Streak" locked={true} />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t border-white/10">
        <div className="container mx-auto flex h-24 items-center justify-center px-4 py-4 sm:px-6">
            <p className="text-center text-lg text-slate-500 font-code tracking-wide">
                There is no final win. The only metric is: Who is still here?
            </p>
        </div>
      </footer>
    </div>
  );
