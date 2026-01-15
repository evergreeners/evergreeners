import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Flame, Zap, GitCommit, Calendar } from 'lucide-react';

const iconMap = {
  "Current Streak": <Flame className="h-5 w-5 text-muted-foreground" />,
  "Longest Streak": <Zap className="h-5 w-5 text-muted-foreground" />,
  "Total Commits": <GitCommit className="h-5 w-5 text-muted-foreground" />,
  "Busiest Day": <Calendar className="h-5 w-5 text-muted-foreground" />,
};

type StreaksCardProps = {
  title: keyof typeof iconMap;
  value: number | string;
  unit: string;
};

export function StreaksCard({ title, value, unit }: StreaksCardProps) {
  const isSpecialStreak = (title.includes('Streak') && typeof value === 'number' && value > 0);

  return (
    <Card className="shadow-lg transition-transform hover:scale-105">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {iconMap[title]}
      </CardHeader>
      <CardContent>
        <div className={`font-code text-2xl font-bold ${isSpecialStreak ? 'text-primary' : ''}`}>
          {value}
        </div>
        <p className="text-xs text-muted-foreground">{unit}</p>
      </CardContent>
    </Card>
  );
}
