import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GitCommit, ShieldCheck, ShieldAlert, CalendarClock, UserCheck, Crown, Shield } from 'lucide-react';
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


const RuleCard = ({ icon, title, description, isWarning }: { icon: React.ReactNode, title: string, description: string, isWarning?: boolean }) => (
  <div className={`flex flex-col items-center p-6 text-center border rounded-lg ${isWarning ? 'border-yellow-500/50 bg-yellow-950/20' : 'border-primary/20'}`}>
    <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${isWarning ? 'bg-yellow-500/10 text-yellow-400' : 'bg-primary/10 text-primary'}`}>
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-semibold font-code">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const RankBadge = ({ title, description, locked = true }: { title: string, description: string, locked?: boolean }) => (
    <div className="flex flex-col items-center">
        <Badge variant={locked ? 'secondary' : 'default'} className={`h-12 px-6 text-lg ${locked ? 'text-muted-foreground' : 'bg-lime-500/80 text-black animate-pulse'}`}>
            {title}
        </Badge>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
);


const DemoCarousel = () => (
    <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
            <CarouselItem>
                <div className="p-1">
                    <Card className="shadow-2xl overflow-hidden bg-transparent">
                        <CardContent className="flex flex-col items-center justify-center p-6">
                            <h3 className="text-2xl font-bold text-primary mb-4 font-code">The Proof is in the Grid.</h3>
                            <p className="text-center text-muted-foreground mb-6">Your entire season, visualized. Every day is a verdict.</p>
                            <Image
                                src="https://picsum.photos/seed/heatmap-demo/1000/600"
                                alt="Activity Heatmap"
                                width={1000}
                                height={600}
                                className="rounded-lg border border-primary/20"
                                data-ai-hint="data visualization graph"
                            />
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="p-1">
                    <Card className="shadow-2xl overflow-hidden bg-transparent">
                        <CardContent className="flex flex-col items-center justify-center p-6">
                            <h3 className="text-2xl font-bold text-primary mb-4 font-code">The Streak is Everything.</h3>
                             <p className="text-center text-muted-foreground mb-6">Current. Longest. The numbers don't lie.</p>
                            <Image
                                src="https://picsum.photos/seed/streaks-demo/1000/600"
                                alt="Streaks Cards"
                                width={1000}
                                height={600}
                                className="rounded-lg border border-primary/20"
                                data-ai-hint="dashboard stats cards"
                            />
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-12" />
        <CarouselNext className="mr-12"/>
    </Carousel>
);

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 px-4 py-3 backdrop-blur-sm sm:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Logo className="h-7 w-7 text-primary" />
            <span className="font-headline text-xl text-primary">Evergreeners</span>
          </Link>
          <Button asChild>
            <Link href="/dashboard">Connect GitHub to Enter.</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center px-4 py-20 text-center sm:py-28 bg-black">
          <h1 className="font-code text-4xl font-bold tracking-tighter text-lime-400 sm:text-5xl md:text-6xl lg:text-7xl">
            We Are Not Here to Impress. We Are Here to Remain.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl font-code">
            A consistency engine for developers. One meaningful commit a day. No excuses. No grace days.
          </p>
          <Button asChild size="lg" className="mt-8 bg-lime-400 text-black hover:bg-lime-300 font-bold">
            <Link href="/dashboard">
              <GitCommit className="mr-2" />
              Connect GitHub to Enter.
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
        <section className="container mx-auto px-4 py-20 sm:py-28">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <RuleCard
              icon={<ShieldCheck size={32} />}
              title="The Proof"
              description="GitHub is the only truth. One meaningful action per day (Commit, Docs, Script). Spam is visible, but allowed."
            />
            <RuleCard
              icon={<ShieldAlert size={32} />}
              title="The Streak"
              description="Starts at Day 1. Miss a day? Reset to 0. Miss 7 consecutive days? You are eliminated from the Season."
              isWarning
            />
             <RuleCard
              icon={<CalendarClock size={32} />}
              title="The Season"
              description="The calendar resets every 30 days. Your streak resets, but your 'Perennial' records remain."
            />
          </div>
        </section>

        {/* The Ranks Section */}
        <section className="bg-primary/5 py-20 sm:py-28">
          <div className="container mx-auto flex flex-col items-center text-center">
             <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              The Ranks
            </h2>
            <div className="mt-10 flex w-full max-w-3xl justify-around gap-4">
                <RankBadge title="Daywalker" description="7-Day Streak" locked={true} />
                <RankBadge title="Mainliner" description="14-Day Streak" locked={true} />
                <RankBadge title="Unbroken" description="30-Day Streak" locked={true} />
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-primary/10">
        <div className="container mx-auto flex h-24 items-center justify-center px-4 py-4 sm:px-6">
            <p className="text-center text-lg text-muted-foreground font-code">
                There is no final win. The only metric is: Who is still here?
            </p>
        </div>
      </footer>
    </div>
  );
}
