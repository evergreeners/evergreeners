'use client';
import { useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { PlusCircle, Target } from 'lucide-react';

type Goal = {
  id: number;
  title: string;
  target: number;
  current: number;
  unit: string;
};

const initialGoals: Goal[] = [
  { id: 1, title: '30-Day Commit Streak', target: 30, current: 12, unit: 'days' },
  { id: 2, title: 'Contribute to 5 new repos', target: 5, current: 2, unit: 'repos' },
  { id: 3, title: 'Reach 1000 commits this year', target: 1000, current: 450, unit: 'commits' },
];

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  return (
    <AppLayout>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Your Goals</h1>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Goal
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {goals.map(goal => (
            <Card key={goal.id}>
              <CardHeader>
                <div className="flex items-center gap-2 text-primary">
                  <Target className="h-5 w-5" />
                  <CardTitle>{goal.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="font-code text-3xl font-bold">{goal.current}</span>
                  <span className="text-muted-foreground">/ {goal.target} {goal.unit}</span>
                </div>
                <Progress value={(goal.current / goal.target) * 100} className="mt-4" />
              </CardContent>
              <CardFooter>
                 <CardDescription>
                    {Math.round((goal.current / goal.target) * 100)}% complete
                 </CardDescription>
              </CardFooter>
            </Card>
          ))}
           <Card className="border-dashed">
             <CardHeader>
                <CardTitle>Create a New Goal</CardTitle>
                <CardDescription>Set a new target to work towards.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="goal-title">Goal Title</Label>
                    <Input id="goal-title" placeholder="e.g., Learn a new language" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goal-target">Target</Label>
                    <Input id="goal-target" type="number" placeholder="e.g., 10" />
                  </div>
              </CardContent>
              <CardFooter>
                  <Button className="w-full">Add Goal</Button>
              </CardFooter>
           </Card>
        </div>
      </div>
    </AppLayout>
  );
}
