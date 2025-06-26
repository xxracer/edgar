'use server';

/**
 * @fileOverview AI-powered keyword optimization agent.
 *
 * - optimizeKeywords - A function that optimizes keywords for SEO.
 * - AIKeywordOptimizationInput - The input type for the optimizeKeywords function.
 * - AIKeywordOptimizationOutput - The return type for the optimizeKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIKeywordOptimizationInputSchema = z.object({
  pageContent: z.string().describe('The content of the page to optimize.'),
  focusKeyword: z.string().describe('The primary keyword for the page.'),
  relatedKeywords: z
    .string()
    .describe('Comma separated list of related keywords for the page.').optional(),
  numKeywords: z
    .number()
    .default(5)
    .describe('The number of optimized keywords to generate.'),
});
export type AIKeywordOptimizationInput = z.infer<typeof AIKeywordOptimizationInputSchema>;

const AIKeywordOptimizationOutputSchema = z.object({
  optimizedKeywords: z.array(z.string()).describe('An array of optimized keywords.'),
  seoDescription: z.string().describe('A suggested SEO description for the page.'),
});
export type AIKeywordOptimizationOutput = z.infer<typeof AIKeywordOptimizationOutputSchema>;

export async function optimizeKeywords(input: AIKeywordOptimizationInput): Promise<AIKeywordOptimizationOutput> {
  return optimizeKeywordsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiKeywordOptimizationPrompt',
  input: {schema: AIKeywordOptimizationInputSchema},
  output: {schema: AIKeywordOptimizationOutputSchema},
  prompt: `You are an SEO expert. Optimize the following page content for the focus keyword "{{{focusKeyword}}}". Also take into account these related keywords: {{{relatedKeywords}}}.  Generate a list of {{numKeywords}} optimized keywords for the page content: {{{pageContent}}}. Also generate a short SEO description for the page.

Return the keywords as a JSON array of strings and the SEO description as a string in a JSON object. Do not include any explanation or introductory text. Just return the JSON.`,
});

const optimizeKeywordsFlow = ai.defineFlow(
  {
    name: 'optimizeKeywordsFlow',
    inputSchema: AIKeywordOptimizationInputSchema,
    outputSchema: AIKeywordOptimizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
