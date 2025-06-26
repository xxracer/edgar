import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import type { Metadata } from 'next';
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'House Lockout Service',
  description: 'Locked out of your house? Our professional locksmiths provide fast, safe, and reliable home entry services 24/7. Call for immediate help.',
  alternates: {
    canonical: '/house-lockouts',
  },
  other: {
    'application/ld+json': JSON.stringify(getServiceSchema({
      name: "House Lockout Service",
      description: "24/7 emergency house lockout and re-entry services.",
      url: "/house-lockouts"
    }))
  }
};

const features = [
    "24/7 Emergency Access",
    "Non-Destructive Entry Methods",
    "Lock Repair and Replacement",
    "Fast, Local Response",
    "Rekeying Services",
    "Broken Key Extraction"
];

export default function HouseLockoutsPage() {
  return (
    <div className="animate-fade-in">
      <section className="relative w-full py-20 md:py-32 bg-card">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Home Lockout Assistance</h1>
            <p className="text-lg text-muted-foreground">
              Being locked out of your own home is frustrating. We provide a quick and secure solution to get you back inside without damaging your property.
            </p>
            <p className="font-bold text-accent text-xl">Service Fee: Starting at $35</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md transition-transform hover:scale-105">
              <a href="tel:2819890245">Call for Home Access: (281) 989-0245</a>
            </Button>
          </div>
          <div className="relative h-64 md:h-80">
            <Image src="https://static.wixstatic.com/media/c5947c_60c38407e36d4cb69a25dfa60117663e~mv2.png" alt="Key in a house door lock" fill className="object-cover rounded-lg shadow-xl" data-ai-hint="house front door" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">Your Residential Lock Experts</h2>
              <p className="text-muted-foreground mb-6">
                Our team is equipped to handle any residential lock and key issue. We prioritize your safety and security, ensuring a smooth and stress-free experience.
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
              <Image src="https://static.wixstatic.com/media/c5947c_d37467c6804f430da9583fc39ee07b6d~mv2.jpg" alt="A person unlocking a house door" fill className="object-cover rounded-lg shadow-xl" data-ai-hint="house key lock" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Back Inside in No Time</h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">Don't let a lockout ruin your day. Contact us for fast, professional service anytime, anywhere.</p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-8 px-12 shadow-lg transition-transform hover:scale-105">
                <a href="tel:2819890245">Call (281) 989-0245 Now</a>
            </Button>
        </div>
      </section>
    </div>
  );
}
