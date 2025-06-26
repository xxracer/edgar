'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/car-lockouts', label: 'Car Lockouts' },
  { href: '/house-lockouts', label: 'House Lockouts' },
  { href: '/safe-lockouts', label: 'Safe Lockouts' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8 hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <Lock className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold text-lg">Emergency Locksmith</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end">
            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className={cn(
                    'transition-colors hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                )}
                >
                {link.label}
                </Link>
            ))}
            </nav>

            <div className="flex items-center gap-2">
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <div className="grid gap-6 p-6">
                                <Link href="/" className="flex items-center gap-2 mb-4">
                                    <Lock className="h-6 w-6 text-primary" />
                                    <span className="font-headline font-bold text-lg">Emergency Locksmith</span>
                                </Link>
                                {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        'text-lg font-medium transition-colors hover:text-primary',
                                        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                                    )}
                                >
                                    {link.label}
                                </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-md transition-all hover:scale-105 ml-4">
                    <a href="tel:2819890245">Call (281) 989-0245</a>
                </Button>
            </div>
        </div>
      </div>
    </header>
  );
}
