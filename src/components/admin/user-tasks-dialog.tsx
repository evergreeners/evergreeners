'use client';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import type { AdminUserWithTasks, Task } from '@/lib/mock-data';
import { formatDistanceToNow } from 'date-fns';
import { PlusCircle } from 'lucide-react';

type UserTasksDialogProps = {
  user: AdminUserWithTasks;
  isOpen: boolean;
  onClose: () => void;
  onAssignTask: (userId: string, taskTitle: string) => void;
};

export function UserTasksDialog({ user, isOpen, onClose, onAssignTask }: UserTasksDialogProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAssignClick = () => {
    if (newTaskTitle.trim()) {
      onAssignTask(user.id, newTaskTitle.trim());
      setNewTaskTitle('');
    }
  };
  
  const isOverdue = (date: Date, completed: boolean) => !completed && new Date() > date;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.avatarUrl} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-2xl">{user.name}'s Tasks</DialogTitle>
              <DialogDescription>@{user.username}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto pr-2">
            <h3 className="text-lg font-semibold">Assign New Task</h3>
            <div className="flex items-center gap-2">
                <Input 
                    placeholder="e.g., Review the new design system" 
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAssignClick()}
                />
                <Button onClick={handleAssignClick} disabled={!newTaskTitle.trim()}>
                    <PlusCircle className="mr-2 h-4 w-4" /> Assign
                </Button>
            </div>
          
            <Separator className="my-6" />

            <h3 className="text-lg font-semibold">Current Tasks ({user.tasks.length})</h3>
            <div className="space-y-3">
            {user.tasks.map(task => (
                <div key={task.id} className="flex items-start gap-4 rounded-md border p-4">
                     <Checkbox id={`task-${task.id}`} checked={task.completed} className="mt-1" />
                     <div className="flex-1">
                        <label htmlFor={`task-${task.id}`} className={`font-medium ${task.completed ? 'text-muted-foreground line-through' : ''}`}>
                            {task.title}
                        </label>
                        <p className="text-sm text-muted-foreground">{task.description}</p>
                     </div>
                     {task.dueDate && (
                       <Badge variant={isOverdue(task.dueDate, task.completed) ? 'destructive' : 'secondary'} className="text-xs whitespace-nowrap">
                          {isOverdue(task.dueDate, task.completed) ? 'Overdue' : 'Due'} {formatDistanceToNow(task.dueDate, { addSuffix: true })}
                       </Badge>
                    )}
                </div>
            ))}
            {user.tasks.length === 0 && (
                <p className='text-sm text-muted-foreground text-center py-4'>No tasks assigned yet.</p>
            )}
            </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
