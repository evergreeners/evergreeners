'use client';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import type { Activity } from '@/lib/mock-data';
import { getDay, parseISO } from 'date-fns';

type ActivityChartsProps = {
  activity: Activity[];
};

export function ActivityCharts({ activity }: ActivityChartsProps) {
  const activityByDay = [
    { day: 'Sun', commits: 0 },
    { day: 'Mon', commits: 0 },
    { day: 'Tue', commits: 0 },
    { day: 'Wed', commits: 0 },
    { day: 'Thu', commits: 0 },
    { day: 'Fri', commits: 0 },
    { day: 'Sat', commits: 0 },
  ];

  activity.forEach(a => {
    const dayIndex = getDay(parseISO(a.date));
    activityByDay[dayIndex].commits += a.count;
  });
  
  const chartConfig = {
    commits: {
      label: 'Commits',
      color: 'hsl(var(--primary))',
    },
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
        <CardDescription>Your commit distribution by day.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <ResponsiveContainer>
            <BarChart data={activityByDay} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                fontSize={12}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} allowDecimals={false} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent />}
              />
              <Bar dataKey="commits" fill="var(--color-commits)" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
