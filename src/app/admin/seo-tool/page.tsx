import { KeywordSuggestions } from "@/components/keyword-suggestions";
import { Lightbulb } from "lucide-react";

export default function SeoToolPage() {
    return (
        <div className="container py-12">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                    <Lightbulb className="h-10 w-10 text-primary" />
                    <h1 className="font-headline text-4xl font-bold">AI Keyword Optimizer</h1>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">
                    Enter a topic to generate a list of relevant SEO keywords and phrases. Use these suggestions to improve your website's content and rank higher in search engine results.
                </p>

                <KeywordSuggestions />
            </div>
        </div>
    );
}
