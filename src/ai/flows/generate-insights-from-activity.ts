'use server';

/**
 * @fileOverview Generates insights from GitHub activity data using generative AI.
 *
 * - generateInsightsFromActivity - A function that generates insights from activity data.
 * - GenerateInsightsFromActivityInput - The input type for the generateInsightsFromActivity function.
 * - GenerateInsightsFromActivityOutput - The return type for the generateInsightsFromActivity function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInsightsFromActivityInputSchema = z.object({
  activityData: z.string().describe('The GitHub activity data to analyze.'),
});
export type GenerateInsightsFromActivityInput = z.infer<typeof GenerateInsightsFromActivityInputSchema>;

const GenerateInsightsFromActivityOutputSchema = z.object({
  insights: z.string().describe('The generated insights from the activity data.'),
});
export type GenerateInsightsFromActivityOutput = z.infer<typeof GenerateInsightsFromActivityOutputSchema>;

export async function generateInsightsFromActivity(input: GenerateInsightsFromActivityInput): Promise<GenerateInsightsFromActivityOutput> {
  return generateInsightsFromActivityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInsightsFromActivityPrompt',
  input: {schema: GenerateInsightsFromActivityInputSchema},
  output: {schema: GenerateInsightsFromActivityOutputSchema},
  prompt: `You are an AI assistant that analyzes GitHub activity data and provides insights.

  Analyze the following GitHub activity data and provide insights into the user's coding habits and identify areas for improvement.

  Activity Data: {{{activityData}}}
  `,
});

const generateInsightsFromActivityFlow = ai.defineFlow(
  {
    name: 'generateInsightsFromActivityFlow',
    inputSchema: GenerateInsightsFromActivityInputSchema,
    outputSchema: GenerateInsightsFromActivityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
