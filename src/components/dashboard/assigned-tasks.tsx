'use client';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { formatDistanceToNow } from 'date-fns';

const tasks = [
  { id: 'task-1', title: 'Refactor authentication flow', dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), completed: false },
  { id: 'task-2', title: 'Implement new dashboard widget', dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), completed: false },
  { id: 'task-3', title: 'Fix bug #123 in the payment module', dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), completed: false },
  { id: 'task-4', title: 'Write documentation for the API', dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), completed: true },
  { id: 'task-5', title: 'Deploy staging environment', dueDate: new Date(), completed: false },
];

export function AssignedTasks() {
  const isOverdue = (date: Date) => !date ? false : new Date() > date && !tasks.find(t=> t.dueDate === date)?.completed;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Assigned Tasks</CardTitle>
        <CardDescription>Tasks assigned to you across projects.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center gap-4">
              <Checkbox id={task.id} checked={task.completed} />
              <div className="flex-1">
                <label htmlFor={task.id} className={`font-medium ${task.completed ? 'text-muted-foreground line-through' : ''}`}>
                  {task.title}
                </label>
              </div>
              {task.dueDate && (
                 <Badge variant={isOverdue(task.dueDate) ? 'destructive' : 'secondary'} className="text-xs">
                    {isOverdue(task.dueDate) ? 'Overdue' : 'Due'} {formatDistanceToNow(task.dueDate, { addSuffix: true })}
                 </Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
