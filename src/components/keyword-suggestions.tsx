'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestKeywords, type KeywordSuggestionsOutput } from '@/ai/flows/keyword-suggestions';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  topic: z.string().min(3, 'Topic must be at least 3 characters long.'),
});

type FormValues = z.infer<typeof formSchema>;

export function KeywordSuggestions() {
  const [suggestions, setSuggestions] = useState<KeywordSuggestionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await suggestKeywords({ topic: values.topic, numKeywords: 10 });
      setSuggestions(result);
    } catch (error) {
      console.error('Error generating keywords:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate keywords. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: 'Keywords copied to clipboard.',
    });
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Topic</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., emergency car locksmith" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Get Keyword Suggestions'
              )}
            </Button>
          </form>
        </Form>

        {suggestions && suggestions.keywords.length > 0 && (
          <div className="mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Suggested Keywords</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(suggestions.keywords.join(', '))}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy keywords</span>
                </Button>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {suggestions.keywords.map((keyword, index) => (
                    <li key={index} className="flex items-center gap-2 p-2 bg-secondary/50 rounded-md">
                      <span className="text-sm font-medium">{keyword}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
