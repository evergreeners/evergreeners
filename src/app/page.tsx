import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/logo';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/landing/animated-section';
import { Github, TreeDeciduous, Users, Trophy } from 'lucide-react';
import { Leaderboard } from '@/components/dashboard/leaderboard';

export default function LandingPage() {
  const dashboardImage = PlaceHolderImages.find(p => p.id === 'dashboard-demo-1');

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/80 px-4 py-3 backdrop-blur-sm sm:px-6">
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <h1 className="font-code text-xl font-bold tracking-tighter">Evergreeners</h1>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
                <Link href="https://github.com/evergreeners" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline ml-2">Source</span>
                </Link>
            </Button>
            <Button asChild>
                <Link href="/dashboard">Login with GitHub</Link>
            </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <AnimatedSection as="section" className="py-20 text-center sm:py-28">
            <div className="container">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Cultivate Your Coding Habits
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Turn your daily GitHub commits into a flourishing digital garden. Stay motivated, track your progress, and grow with the community.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild>
                    <Link href="/dashboard">Start Growing</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="#features">Learn More</Link>
                </Button>
            </div>
            </div>
        </AnimatedSection>
        
        {/* Dashboard Preview */}
        {dashboardImage && (
            <AnimatedSection as="section" className="container my-12 sm:my-16">
                 <div className="relative overflow-hidden rounded-xl border shadow-lg">
                    <Image
                    src={dashboardImage.imageUrl}
                    alt={dashboardImage.description}
                    width={1200}
                    height={750}
                    className="object-cover"
                    data-ai-hint={dashboardImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                 </div>
            </AnimatedSection>
        )}

        {/* Features Section */}
        <AnimatedSection as="section" id="features" className="container py-16 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything You Need to Stay Consistent</h2>
                <p className="mt-4 text-muted-foreground">
                    From detailed analytics to friendly competition, Evergreeners provides the tools to help you build a lasting coding habit.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <TreeDeciduous className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">Visualize Your Growth</h3>
                    <p className="mt-2 text-muted-foreground">Watch your contribution graph flourish. Our detailed stats turn your efforts into a tangible digital forest.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                     <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Trophy className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">Climb the Leaderboard</h3>
                    <p className="mt-2 text-muted-foreground">Engage in friendly competition. Maintain your commit streak to climb the ranks from a 'Sprout' to an 'Evergreen'.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold">Join the Community</h3>
                    <p className="mt-2 text-muted-foreground">You're not coding alone. Share your progress and stay accountable with fellow developers on the same journey.</p>
                </div>
            </div>
        </AnimatedSection>

        {/* Leaderboard Section */}
        <AnimatedSection as="section" className="container py-16 sm:py-24">
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Community Leaderboard</h2>
                <p className="mt-4 text-muted-foreground">
                    See who's cultivating the strongest coding habits right now.
                </p>
            </div>
            <div className="mt-12">
                <Leaderboard />
            </div>
        </AnimatedSection>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Evergreeners. All rights reserved.</p>
        <Link href="https://github.com/evergreeners" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block">
          <Github className="h-5 w-5 mx-auto hover:text-foreground" />
        </Link>
      </footer>
    </div>
  );
}
