'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import type { AdminUserWithTasks } from '@/lib/mock-data';
import { CheckCircle2, ListTodo } from 'lucide-react';

type UserCardProps = {
  user: AdminUserWithTasks;
  onViewTasks: () => void;
};

export function UserCard({ user, onViewTasks }: UserCardProps) {
  const completedTasks = user.tasks.filter(t => t.completed).length;
  const totalTasks = user.tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-14 w-14 border-2 border-primary">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl">{user.name}</CardTitle>
          <CardDescription>@{user.username}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="flex items-center justify-between text-sm">
          <Badge variant={user.role === 'Admin' ? 'default' : 'secondary'}>{user.role}</Badge>
          <div className="flex flex-wrap gap-1 justify-end max-w-[60%]">
            {user.badges.slice(0, 2).map(badge => (
              <Badge key={badge} variant="outline">{badge}</Badge>
            ))}
             {user.badges.length > 2 && <Badge variant="outline">+{user.badges.length - 2}</Badge>}
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
            <div className='flex justify-between items-center'>
                 <h4 className="text-sm font-medium">Task Progress</h4>
                 <span className="text-xs text-muted-foreground">{completedTasks} / {totalTasks} completed</span>
            </div>
            <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={onViewTasks}>
          <ListTodo className="mr-2 h-4 w-4" />
          View Tasks
        </Button>
      </CardFooter>
    </Card>
  );
}
