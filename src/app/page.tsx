import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Github } from 'lucide-react';
import { Leaderboard } from '@/components/dashboard/leaderboard';

export default function LandingPage() {
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

      <main className="flex-1 container mx-auto max-w-4xl py-8 sm:py-12 px-4">
        <div className="text-center mb-12">
            <h2 className="font-code text-4xl sm:text-5xl font-bold tracking-tight">
                ./run streak-competition
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                A community of developers building consistent coding habits. Commit to public repositories daily, climb the leaderboard, and grow your digital forest.
            </p>
        </div>
        
        <Leaderboard />

      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Evergreeners. All rights reserved.</p>
      </footer>
    </div>
  );
}
