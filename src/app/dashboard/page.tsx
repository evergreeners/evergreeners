import { AppLayout } from '@/components/layout/app-layout';

export const metadata = {
  title: 'Dashboard | Evergreeners',
};

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="flex flex-col items-center justify-center text-center p-4">
        <div className="w-full max-w-4xl">
          <div className="bg-primary text-primary-foreground rounded-lg p-12 mb-8">
            <h1 className="text-5xl font-bold tracking-tight">EVERGREENERS</h1>
            <p className="mt-2 text-xl">Consistency is the Game</p>
          </div>

          <div className="text-left space-y-6">
            <h2 className="text-3xl font-bold">What is Evergreeners?</h2>
            <p className="text-muted-foreground text-lg">
              Evergreeners is a competitive consistency system built around code, learning, and proof of work.
            </p>
            <p className="text-muted-foreground text-lg">
              It exists for people who are tired of starting strong and disappearing quietly.
            </p>
            <ul className="list-disc list-inside text-muted-foreground text-lg space-y-2">
              <li>Here, presence is visible.</li>
              <li>Streaks matter.</li>
              <li>Silence means something.</li>
            </ul>
          </div>
          
           <div className="bg-primary text-primary-foreground rounded-lg p-12 mt-8">
            <h2 className="text-4xl font-bold tracking-tight">Still Here</h2>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
