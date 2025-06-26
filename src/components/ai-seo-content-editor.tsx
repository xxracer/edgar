'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { optimizeKeywords, type AIKeywordOptimizationOutput } from '@/ai/flows/ai-keyword-optimization';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Copy, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  pageContent: z.string().min(100, 'Page content must be at least 100 characters long.'),
  focusKeyword: z.string().min(3, 'Focus keyword must be at least 3 characters long.'),
  relatedKeywords: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function AiSeoContentEditor() {
  const [result, setResult] = useState<AIKeywordOptimizationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pageContent: '',
      focusKeyword: '',
      relatedKeywords: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setResult(null);
    try {
      const optimizationResult = await optimizeKeywords({
        pageContent: values.pageContent,
        focusKeyword: values.focusKeyword,
        relatedKeywords: values.relatedKeywords,
        numKeywords: 10
      });
      setResult(optimizationResult);
    } catch (error) {
      console.error('Error optimizing content:', error);
      toast({
        title: 'Error',
        description: 'Failed to optimize content. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  function copyToClipboard(text: string, type: string) {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: `SEO ${type} copied to clipboard.`,
    });
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="pageContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Page Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Paste your page content here..." {...field} rows={10} />
                  </FormControl>
                  <FormDescription>
                    The main text content of your web page.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="focusKeyword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Focus Keyword</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 24/7 car lockout service" {...field} />
                  </FormControl>
                   <FormDescription>
                    The primary keyword you want to rank for.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="relatedKeywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Related Keywords</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., emergency locksmith, car key replacement" {...field} />
                  </FormControl>
                   <FormDescription>
                    A comma-separated list of related keywords.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full text-lg py-6">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Optimizing...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-5 w-5" />
                  Optimize Content
                </>
              )}
            </Button>
          </form>
        </Form>

        {result && (
          <div className="mt-8 space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Optimized Keywords</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.optimizedKeywords.join(', '), 'keywords')}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy keywords</span>
                </Button>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.optimizedKeywords.map((keyword, index) => (
                    <li key={index} className="flex items-center gap-2 p-2 bg-secondary/50 rounded-md">
                      <span className="text-sm font-medium">{keyword}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Suggested SEO Description</CardTitle>
                 <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.seoDescription, 'description')}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy description</span>
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground p-4 border rounded-md bg-secondary/50">{result.seoDescription}</p>
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
