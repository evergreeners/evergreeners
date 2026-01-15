import { AppLayout } from '@/components/layout/app-layout';
import { mockActivity, mockUser } from '@/lib/mock-data';
import { calculateStreaks } from '@/lib/streaks';
import { StreaksCard } from '@/components/dashboard/streaks-card';
import { ActivityCharts } from '@/components/dashboard/activity-charts';
import { ActivityHeatmap } from '@/components/dashboard/activity-heatmap';
import { InsightEngine } from '@/components/dashboard/insight-engine';

export const metadata = {
  title: 'Dashboard | Evergreeners',
};

export default function DashboardPage() {
  const { currentStreak, longestStreak } = calculateStreaks(mockActivity);

  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {mockUser.name.split(' ')[0]}!
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StreaksCard title="Current Streak" value={currentStreak} unit="days" />
          <StreaksCard title="Longest Streak" value={longestStreak} unit="days" />
          <StreaksCard title="Total Commits" value={mockActivity.reduce((acc, a) => acc + a.count, 0)} unit="this year" />
          <StreaksCard title="Busiest Day" value="Wednesday" unit="this year" />
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
             <ActivityHeatmap activity={mockActivity} />
          </div>
          <div className="lg:col-span-2">
            <ActivityCharts activity={mockActivity} />
          </div>
        </div>

        <div>
          <InsightEngine activity={mockActivity} />
        </div>
      </div>
    </AppLayout>
  );
}
