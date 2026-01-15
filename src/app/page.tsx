import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ActivityHeatmap } from '@/components/dashboard/activity-heatmap';
import { mockActivity } from '@/lib/mock-data';
import { Leaf, GitCommit, Target, BarChart4 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center p-6 text-center">
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default function LandingPage() {
  const dashboardImage = PlaceHolderImages.find(img => img.id === 'dashboard-demo-1');

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/80 px-4 py-3 backdrop-blur-sm sm:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Leaf className="h-7 w-7 text-primary" />
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
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Cultivate Your Coding Forest
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            Evergreeners helps you visualize your GitHub activity, build consistent coding habits, and watch your skills grow, one commit at a time.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/dashboard">
              <GitCommit className="mr-2" />
              Start Growing Today
            </Link>
          </Button>
        </section>

        {/* Demo Section */}
        <section className="bg-muted/50 py-16 sm:py-24">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl">
              <Card className="shadow-2xl transition-all duration-300 hover:shadow-primary/20">
                <CardContent className="p-2 sm:p-4">
                  {dashboardImage && (
                    <Image
                      src={dashboardImage.imageUrl}
                      alt="Evergreeners dashboard demo"
                      width={1200}
                      height={780}
                      className="rounded-lg border"
                      data-ai-hint={dashboardImage.imageHint}
                      priority
                    />
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section className="container mx-auto px-4 py-20 sm:py-28">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Everything You Need to Stay Evergreen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Powerful tools to help you maintain your coding momentum.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<BarChart4 size={28} />}
              title="Visualize Your Growth"
              description="See your commit history come to life with an interactive contribution graph and insightful charts."
            />
            <FeatureCard
              icon={<Target size={28} />}
              title="Set and Track Goals"
              description="Define meaningful goals, like commit streaks or contributions to new projects, and monitor your progress."
            />
            <FeatureCard
              icon={<GitCommit size={28} />}
              title="Build Your Streak"
              description="Stay motivated by building and maintaining your daily commit streak. We celebrate every contribution!"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-20 sm:py-28">
          <div className="container mx-auto flex flex-col items-center text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Grow?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Connect your GitHub account in seconds and start your journey to becoming an Evergreener. It's free!
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
            <Leaf className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Evergreeners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
