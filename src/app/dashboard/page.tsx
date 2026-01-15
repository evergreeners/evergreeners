import { AppLayout } from '@/components/layout/app-layout';
import { ActivityCharts } from '@/components/dashboard/activity-charts';
import { ActivityHeatmap } from '@/components/dashboard/activity-heatmap';
import { StreaksCard } from '@/components/dashboard/streaks-card';
import { mockActivity, mockUser } from '@/lib/mock-data';
import { calculateStreaks } from '@/lib/streaks';
import { AssignedTasks } from '@/components/dashboard/assigned-tasks';
import { format, parseISO } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const metadata = {
  title: 'Dashboard | Evergreeners',
};

export default function DashboardPage() {
  const { currentStreak, longestStreak } = calculateStreaks(mockActivity);
  const totalCommits = mockActivity.reduce((sum, a) => sum + a.count, 0);

  // Find the busiest day
  const activityByDay: { [key: string]: number } = {};
  mockActivity.forEach(a => {
      if (a.count > 0) {
        const day = format(parseISO(a.date), 'eeee');
        activityByDay[day] = (activityByDay[day] || 0) + a.count;
      }
  });
  
  const busiestDay = Object.keys(activityByDay).reduce((a, b) => activityByDay[a] > activityByDay[b] ? a : b, '');


  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StreaksCard title="Current Streak" value={currentStreak} unit="days" />
          <StreaksCard title="Longest Streak" value={longestStreak} unit="days" />
          <StreaksCard title="Total Commits" value={totalCommits.toLocaleString()} unit="this year" />
          <StreaksCard title="Busiest Day" value={busiestDay} unit={`~${Math.round(Math.max(...Object.values(activityByDay)) / (totalCommits/7))}x more commits`} />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
             <ActivityHeatmap activity={mockActivity} />
          </div>
          <ActivityCharts activity={mockActivity} />
        </div>
         <div className="grid grid-cols-1 gap-6">
            <AssignedTasks />
        </div>
      </div>
    </AppLayout>
  );
}
