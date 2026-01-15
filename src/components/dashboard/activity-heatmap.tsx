'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { Activity } from '@/lib/mock-data';
import { format, getDay, parseISO, startOfYear, endOfYear, eachDayOfInterval } from 'date-fns';

type ActivityHeatmapProps = {
  activity: Activity[];
};

export function ActivityHeatmap({ activity }: ActivityHeatmapProps) {
  const today = new Date();
  const yearStart = startOfYear(today);
  const yearEnd = endOfYear(today);
  const daysInYear = eachDayOfInterval({ start: yearStart, end: yearEnd });

  const activityMap = new Map<string, number>();
  activity.forEach(a => {
    activityMap.set(format(parseISO(a.date), 'yyyy-MM-dd'), a.count);
  });

  const firstDayOfMonth = getDay(yearStart);

  const getIntensityClass = (count: number) => {
    if (count === 0) return 'bg-muted/50';
    if (count < 3) return 'bg-primary/20';
    if (count < 6) return 'bg-primary/40';
    if (count < 10) return 'bg-primary/60';
    return 'bg-primary/90';
  };
  
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = Array.from({ length: 12 }, (_, i) => format(new Date(today.getFullYear(), i, 1), 'MMM'));


  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Contribution Graph</CardTitle>
        <CardDescription>Your commit activity over the last year.</CardDescription>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="flex gap-2">
            <div className="flex flex-col justify-around text-xs text-muted-foreground">
              {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((day, i) => (
                <div key={i}>{day}</div>
              ))}
            </div>
            <div className="w-full overflow-x-auto">
              <div className="flex justify-between text-xs text-muted-foreground">
                {months.map((month) => (
                  <div key={month} className="w-1/12 text-center">{month}</div>
                ))}
              </div>
              <div className="grid grid-flow-col grid-rows-7 gap-1">
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                  <div key={`empty-${index}`} />
                ))}
                {daysInYear.map(day => {
                  const dateString = format(day, 'yyyy-MM-dd');
                  const count = activityMap.get(dateString) || 0;
                  return (
                    <Tooltip key={dateString} delayDuration={0}>
                      <TooltipTrigger asChild>
                        <div
                          className={`h-3 w-3 rounded-sm ${getIntensityClass(count)}`}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm font-medium">
                          {count} commit{count !== 1 ? 's' : ''} on {format(day, 'MMMM d, yyyy')}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
