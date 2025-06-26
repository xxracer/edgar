import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Testimonials from "@/components/testimonials";
import { Car, Home as HomeIcon, Lock, ShieldCheck, Clock, Award } from 'lucide-react';
import type { Metadata } from "next";
import { getLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: '24/7 Emergency Locksmith Services',
  description: 'Fast, reliable, and affordable 24/7 lockout services for your car, home, or safe. Call (281)989-0245 for immediate assistance in the Houston area.',
  alternates: {
    canonical: '/',
  },
  other: {
    'application/ld+json': JSON.stringify(getLocalBusinessSchema())
  }
};

const services = [
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    title: "Car Lockouts",
    description: "Stranded? We'll get you back in your vehicle quickly and without damage, 24/7.",
    href: "/car-lockouts",
    price: "Service Fee: Starting at $35"
  },
  {
    icon: <HomeIcon className="h-10 w-10 text-primary" />,
    title: "House Lockouts",
    description: "Locked out of your home? Our experts provide fast, reliable access to your property.",
    href: "/house-lockouts",
    price: "Service Fee: Starting at $35"
  },
  {
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "Safe Lockouts",
    description: "Can't access your valuables? We specialize in opening safes of all types.",
    href: "/safe-lockouts",
    price: "Service Fee: Starting at $35"
  },
]

const features = [
    {
        icon: <Clock className="h-8 w-8 text-accent" />,
        title: "24/7 Availability",
        description: "We're here for you day or night, holidays included."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-accent" />,
        title: "Damage-Free",
        description: "Our tools and techniques ensure your property is safe."
    },
    {
        icon: <Award className="h-8 w-8 text-accent" />,
        title: "Professional & Certified",
        description: "Our technicians are trained, licensed, and insured."
    }
]

export default function Home() {
  return (
    <div className="flex flex-col animate-fade-in">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
            <div className="container grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter">Locked Out? We're On Our Way.</h1>
                    <p className="text-lg text-muted-foreground md:text-xl">Fast, professional, and affordable 24/7 emergency lockout services. Your key to peace of mind is just a call away.</p>
                    <p className="font-bold text-accent text-xl">Service Fee: Starting at $35</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg transition-transform hover:scale-105">
                            <a href="tel:2819890245">Call Now: (281) 989-0245</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
                            <Link href="/#services">Our Services</Link>
                        </Button>
                    </div>
                </div>
                 <div className="relative h-64 md:h-full min-h-[300px]">
                     <Image src="https://placehold.co/600x400.png" alt="Locksmith helping with a car lockout" fill className="object-cover rounded-lg shadow-2xl" data-ai-hint="car lockout service" />
                 </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 lg:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
                    <p className="text-muted-foreground mt-2 text-lg">Reliable service when you need it most.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="font-headline text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 lg:py-24 bg-card">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
                    <p className="text-muted-foreground mt-2 text-lg">Comprehensive solutions for any lockout situation.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card key={service.title} className="text-center group overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <CardHeader>
                                <div className="flex justify-center mb-4">{service.icon}</div>
                                <CardTitle className="font-headline">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">{service.description}</p>
                                <Button asChild variant="link" className="text-primary font-bold mt-4">
                                    <Link href={service.href}>Learn More &rarr;</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
            <div className="container text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Need Help Immediately?</h2>
                <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">Don't wait. Our emergency team is on standby to assist you 24 hours a day, 7 days a week.</p>
                <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-8 px-12 shadow-lg transition-transform hover:scale-105">
                    <a href="tel:2819890245">Call (281) 989-0245 Now</a>
                </Button>
            </div>
        </section>
    </div>
  )
}
