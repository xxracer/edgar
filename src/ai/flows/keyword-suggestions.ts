'use server';

/**
 * @fileOverview Keyword suggestion AI agent.
 *
 * - suggestKeywords - A function that suggests keywords for SEO.
 * - KeywordSuggestionsInput - The input type for the suggestKeywords function.
 * - KeywordSuggestionsOutput - The return type for the suggestKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const KeywordSuggestionsInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate keywords.'),
  numKeywords: z
    .number()
    .default(5)
    .describe('The number of keywords to generate.'),
});
export type KeywordSuggestionsInput = z.infer<typeof KeywordSuggestionsInputSchema>;

const KeywordSuggestionsOutputSchema = z.object({
  keywords: z.array(z.string()).describe('An array of suggested keywords.'),
});
export type KeywordSuggestionsOutput = z.infer<typeof KeywordSuggestionsOutputSchema>;

export async function suggestKeywords(input: KeywordSuggestionsInput): Promise<KeywordSuggestionsOutput> {
  return suggestKeywordsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'keywordSuggestionsPrompt',
  input: {schema: KeywordSuggestionsInputSchema},
  output: {schema: KeywordSuggestionsOutputSchema},
  prompt: `You are an SEO expert. Generate a list of {{numKeywords}} keywords for the topic: {{{topic}}}. Return the keywords as a JSON array of strings. Do not include any explanation or introductory text. Just return the JSON.`,
});

const suggestKeywordsFlow = ai.defineFlow(
  {
    name: 'suggestKeywordsFlow',
    inputSchema: KeywordSuggestionsInputSchema,
    outputSchema: KeywordSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
