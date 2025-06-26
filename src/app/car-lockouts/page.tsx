import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import type { Metadata } from 'next';
import { getServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: 'Car Lockout Service',
  description: 'Fast and professional 24/7 car lockout services. We get you back on the road without any damage to your vehicle. Call us for immediate help.',
  alternates: {
    canonical: '/car-lockouts',
  },
  other: {
    'application/ld+json': JSON.stringify(getServiceSchema({
      name: "Car Lockout Service",
      description: "24/7 emergency car lockout assistance.",
      url: "/car-lockouts"
    }))
  }
};

const features = [
    "24/7 Emergency Service",
    "All Vehicle Makes & Models",
    "Damage-Free Unlocking Techniques",
    "Fast Response Times",
    "Transponder Key Programming",
    "Broken Key Extraction"
];

export default function CarLockoutsPage() {
  return (
    <div className="animate-fade-in">
      <section className="relative w-full py-20 md:py-32 bg-card">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Car Lockout Solutions</h1>
            <p className="text-lg text-muted-foreground">
              Locked out of your car? It's a stressful situation, but we're here to help. Our expert technicians provide fast, damage-free entry to get you back on the road in no time.
            </p>
            <p className="font-bold text-accent text-xl">Service Fee: Starting at $35</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md transition-transform hover:scale-105">
              <a href="tel:2819890245">Get Help Now: (281) 989-0245</a>
            </Button>
          </div>
          <div className="relative h-64 md:h-80">
            <Image src="https://static.wixstatic.com/media/c5947c_e583293229584c9fbc4f216c464cd16e~mv2.png" alt="Locksmith working on a car door for a lockout service" fill className="object-cover rounded-lg shadow-xl" data-ai-hint="car lockout"/>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">Our Car Lockout Services</h2>
              <p className="text-muted-foreground mb-6">
                We handle every type of car lockout scenario with precision and care. Whether you've locked your keys in the car, lost them, or have a broken key, we have the solution.
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
              <Image src="https://placehold.co/600x400.png" alt="A set of car keys" fill className="object-cover rounded-lg shadow-xl" data-ai-hint="car keys"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Don't Stay Stranded</h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">One call is all it takes to solve your car lockout problem. We're available 24/7 to provide immediate assistance.</p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-8 px-12 shadow-lg transition-transform hover:scale-105">
                <a href="tel:2819890245">Call (281) 989-0245 for a Quote</a>
            </Button>
        </div>
      </section>
    </div>
  );
}
