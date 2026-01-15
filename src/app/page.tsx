import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, GitCommit, Target, BarChart4, TrendingUp, Award } from 'lucide-react';
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


const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center p-6 text-center transition-transform transform hover:scale-105 duration-300">
    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const DemoCarousel = () => (
    <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
            <CarouselItem>
                <div className="p-1">
                    <Card className="shadow-2xl overflow-hidden">
                        <CardContent className="flex flex-col items-center justify-center p-6 bg-card">
                            <h3 className="text-2xl font-bold text-primary mb-4">Visualize Your Activity</h3>
                            <p className="text-center text-muted-foreground mb-6">See your entire year of contributions at a glance with a detailed heatmap.</p>
                            <Image
                                src="https://picsum.photos/seed/heatmap-demo/1000/600"
                                alt="Activity Heatmap"
                                width={1000}
                                height={600}
                                className="rounded-lg border"
                                data-ai-hint="data visualization graph"
                            />
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="p-1">
                    <Card className="shadow-2xl overflow-hidden">
                        <CardContent className="flex flex-col items-center justify-center p-6 bg-card">
                            <h3 className="text-2xl font-bold text-primary mb-4">Track Your Streaks</h3>
                             <p className="text-center text-muted-foreground mb-6">Stay motivated by building your commit streak. Every day counts!</p>
                            <Image
                                src="https://picsum.photos/seed/streaks-demo/1000/600"
                                alt="Streaks Cards"
                                width={1000}
                                height={600}
                                className="rounded-lg border"
                                data-ai-hint="dashboard stats cards"
                            />
                        </CardContent>
                    </Card>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div className="p-1">
                     <Card className="shadow-2xl overflow-hidden">
                        <CardContent className="flex flex-col items-center justify-center p-6 bg-card">
                            <h3 className="text-2xl font-bold text-primary mb-4">Set and Conquer Goals</h3>
                             <p className="text-center text-muted-foreground mb-6">Define what success looks like for you and track your progress towards it.</p>
                            <Image
                                src="https://picsum.photos/seed/goals-demo/1000/600"
                                alt="Goals Page"
                                width={1000}
                                height={600}
                                className="rounded-lg border"
                                data-ai-hint="task list progress"
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
      <header className="sticky top-0 z-50 border-b bg-background/80 px-4 py-3 backdrop-blur-sm sm:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Logo className="h-7 w-7 text-primary" />
            <span className="font-headline text-xl text-primary">Evergreeners</span>
          </Link>
          <Button asChild>
            <Link href="/dashboard">Sign In with GitHub</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center px-4 py-20 text-center sm:py-28">
           <div className="mb-4 rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            From little commits, big things grow.
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Cultivate Your Coding Forest
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Evergreeners transforms your GitHub activity into a living garden. Visualize your progress, build consistent habits, and watch your skills flourish.
          </p>
          <Button asChild size="lg" className="mt-8 animate-pulse">
            <Link href="/dashboard">
              <GitCommit className="mr-2" />
              Start Growing Your Forest
            </Link>
          </Button>
        </section>

        {/* Animated Demo Section */}
        <section className="bg-muted/50 py-16 sm:py-24">
          <div className="container mx-auto">
            <DemoCarousel />
          </div>
        </section>


        {/* Features Section */}
        <section className="container mx-auto px-4 py-20 sm:py-28">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Everything You Need to Stay Evergreen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Powerful tools designed to nurture your coding momentum.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<BarChart4 size={32} />}
              title="Visualize Your Growth"
              description="See your commit history come to life with an interactive contribution graph and insightful charts."
            />
            <FeatureCard
              icon={<TrendingUp size={32} />}
              title="Build Your Streak"
              description="Stay motivated by building and maintaining your daily commit streak. We celebrate every single contribution!"
            />
             <FeatureCard
              icon={<Award size={32} />}
              title="Set & Track Goals"
              description="Define meaningful goals—from commit streaks to new projects—and visually track your journey to achieving them."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-20 sm:py-28">
          <div className="container mx-auto flex flex-col items-center text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to See Your Forest Grow?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Connect your GitHub account in seconds. It's free and open-source. Start your journey to becoming an Evergreener today.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/dashboard">
                 Sign In & Get Started
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <Logo className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Evergreeners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
