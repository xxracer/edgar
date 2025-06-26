import { AiSeoContentEditor } from "@/components/ai-seo-content-editor";
import { FileText } from "lucide-react";

export default function SeoContentEditorPage() {
    return (
        <div className="container py-12">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                    <FileText className="h-10 w-10 text-primary" />
                    <h1 className="font-headline text-4xl font-bold">AI Content Optimizer</h1>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">
                    Paste your page content, along with a focus keyword and related terms, to get AI-powered suggestions for optimized keywords and a compelling SEO meta description.
                </p>

                <AiSeoContentEditor />
            </div>
        </div>
    );
}
