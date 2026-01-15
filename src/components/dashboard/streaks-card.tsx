import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Flame, Award, GitCommit, CalendarDays } from 'lucide-react';

const iconMap = {
  "Current Streak": <Flame className="h-5 w-5 text-orange-400" />,
  "Longest Streak": <Award className="h-5 w-5 text-yellow-400" />,
  "Total Commits": <GitCommit className="h-5 w-5 text-green-400" />,
  "Busiest Day": <CalendarDays className="h-5 w-5 text-blue-400" />,
};

type StreaksCardProps = {
  title: keyof typeof iconMap;
  value: number | string;
  unit: string;
};

export function StreaksCard({ title, value, unit }: StreaksCardProps) {
  const Icon = iconMap[title];
  const isSpecialStreak = (title.includes('Streak') && typeof value === 'number' && value > 0);

  return (
    <Card className="shadow-lg transition-transform hover:scale-105 h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon}
      </CardHeader>
      <CardContent>
        <div className={`font-code text-3xl font-bold ${isSpecialStreak ? 'text-primary' : ''}`}>
          {value}
        </div>
        <p className="text-xs text-muted-foreground">{unit}</p>
      </CardContent>
    </Card>
  );
}
