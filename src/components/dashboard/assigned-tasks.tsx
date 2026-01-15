'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { formatDistanceToNow } from 'date-fns';

const tasks = [
  { id: 'task-1', title: 'Refactor authentication flow', description: 'Migrate from legacy session management to JWT-based authentication for improved security and scalability.', dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), completed: false },
  { id: 'task-2', title: 'Implement new dashboard widget', description: 'Create a new "Active Projects" widget that shows real-time contribution data from the top 5 repositories.', dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), completed: false },
  { id: 'task-3', title: 'Fix bug #123 in the payment module', description: 'Investigate and resolve the issue causing intermittent payment failures for international users.', dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), completed: false },
  { id: 'task-4', title: 'Write documentation for the API', description: 'Complete the API reference for all v2 endpoints, including code examples for each.', dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), completed: true },
  { id: 'task-5', title: 'Deploy staging environment', description: 'Push the latest build from the `develop` branch to the staging server for QA testing.', dueDate: new Date(), completed: false },
];


export function AssignedTasks() {
  const isOverdue = (date: Date, completed: boolean) => !completed && new Date() > date;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Assigned Tasks</CardTitle>
        <CardDescription>Expand each task to see more details.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {tasks.map(task => (
            <AccordionItem value={task.id} key={task.id} className="rounded-md border px-4">
              <AccordionTrigger className="py-3 text-sm font-medium hover:no-underline">
                 <div className="flex w-full items-center gap-4">
                    <Checkbox id={`check-${task.id}`} checked={task.completed} className="mt-1" />
                    <div className="flex-1 text-left">
                      <label htmlFor={`check-${task.id}`} className={`font-medium ${task.completed ? 'text-muted-foreground line-through' : ''}`}>
                        {task.title}
                      </label>
                    </div>
                    {task.dueDate && (
                       <Badge variant={isOverdue(task.dueDate, task.completed) ? 'destructive' : 'secondary'} className="text-xs">
                          {isOverdue(task.dueDate, task.completed) ? 'Overdue' : 'Due'} {formatDistanceToNow(task.dueDate, { addSuffix: true })}
                       </Badge>
                    )}
                 </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                {task.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
