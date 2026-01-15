import { AppLayout } from '@/components/layout/app-layout';
import { mockActivity, mockUser } from '@/lib/mock-data';
import { calculateStreaks } from '@/lib/streaks';
import { StreaksCard } from '@/components/dashboard/streaks-card';
import { ActivityCharts } from '@/components/dashboard/activity-charts';
import { ActivityHeatmap } from '@/components/dashboard/activity-heatmap';
import { AnimatedSection } from '@/components/landing/animated-section';

export const metadata = {
  title: 'Dashboard | Evergreeners',
};

export default function DashboardPage() {
  const { currentStreak, longestStreak } = calculateStreaks(mockActivity);
  const totalCommits = mockActivity.reduce((acc, a) => acc + a.count, 0);

  const cards = [
    { title: 'Current Streak', value: currentStreak, unit: 'days' },
    { title: 'Longest Streak', value: longestStreak, unit: 'days' },
    { title: 'Total Commits', value: totalCommits, unit: 'this year' },
    { title: 'Busiest Day', value: 'Wednesday', unit: 'this year' },
  ];

  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {mockUser.name.split(' ')[0]}!
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <AnimatedSection key={card.title} as="div" className={`transition-all duration-300`} style={{ transitionDelay: `${index * 100}ms` }}>
              <StreaksCard title={card.title as any} value={card.value} unit={card.unit} />
            </AnimatedSection>
          ))}
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
             <ActivityHeatmap activity={mockActivity} />
          </div>
          <div className="lg:col-span-2">
            <ActivityCharts activity={mockActivity} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
