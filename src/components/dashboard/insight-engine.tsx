'use client';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Activity } from '@/lib/mock-data';
import { generateInsightsFromActivity } from '@/ai/flows/generate-insights-from-activity';
import { Bot, Sparkles } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

type InsightEngineProps = {
  activity: Activity[];
};

export function InsightEngine({ activity }: InsightEngineProps) {
  const [insights, setInsights] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateInsights = async () => {
    setIsLoading(true);
    setError(null);
    setInsights('');
    try {
      const activityString = JSON.stringify(activity, null, 2);
      const result = await generateInsightsFromActivity({ activityData: activityString });
      setInsights(result.insights);
    } catch (e) {
      console.error(e);
      setError('Failed to generate insights. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <CardTitle>Insight Engine</CardTitle>
        </div>
        <CardDescription>
          Use generative AI to analyze your activity and get personalized feedback.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-4">
        <Button onClick={handleGenerateInsights} disabled={isLoading}>
          <Sparkles className="mr-2 h-4 w-4" />
          {isLoading ? 'Generating...' : 'Generate Insights'}
        </Button>
        {isLoading && (
          <div className="w-full space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        )}
        {error && <p className="text-destructive">{error}</p>}
        {insights && (
          <div className="prose prose-sm dark:prose-invert max-w-none rounded-lg border bg-muted/50 p-4">
            <p>{insights}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
