import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import type { Metadata } from 'next';
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Safe Lockout Service',
  description: 'Professional safe opening services for all types of safes. We can help you regain access to your valuables without damage. Confidential and secure.',
  alternates: {
    canonical: '/safe-lockouts',
  },
  other: {
    'application/ld+json': JSON.stringify(getServiceSchema({
      name: "Safe Lockout Service",
      description: "Confidential and professional safe opening services.",
      url: "/safe-lockouts"
    }))
  }
};

const features = [
    "All Safe Types & Brands",
    "Combination Recovery",
    "Electronic & Manual Safes",
    "Damage-Free Opening",
    "Confidential & Discreet Service",
    "Safe Repair & Maintenance"
];

export default function SafeLockoutsPage() {
  return (
    <div className="animate-fade-in">
      <section className="relative w-full py-20 md:py-32 bg-card">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Expert Safe Opening</h1>
            <p className="text-lg text-muted-foreground">
              Can't access your safe? Our certified technicians use specialized tools and techniques to open your safe while preserving its integrity and your valuables.
            </p>
            <p className="font-bold text-accent text-xl">Service Fee: Starting at $35</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md transition-transform hover:scale-105">
              <a href="tel:2819890245">Request Safe Service: (281) 989-0245</a>
            </Button>
          </div>
          <div className="relative h-64 md:h-80">
            <Image src="https://placehold.co/600x400.png" alt="A large, secure metal safe" fill className="object-cover rounded-lg shadow-xl" data-ai-hint="secure safe" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">Access Your Valuables</h2>
              <p className="text-muted-foreground mb-6">
                We understand the importance of accessing your important documents, jewelry, and other valuables. Our service is professional, discreet, and reliable.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80">
              <Image src="https://placehold.co/600x400.png" alt="A technician working on a safe lock" fill className="object-cover rounded-lg shadow-xl" data-ai-hint="safe combination lock"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Secure & Confidential Service</h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">Your privacy and security are our top priorities. Contact us for a confidential consultation.</p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-8 px-12 shadow-lg transition-transform hover:scale-105">
                <a href="tel:2819890245">Call (281) 989-0245 Now</a>
            </Button>
        </div>
      </section>
    </div>
  );
}
