'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Lock, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/car-lockouts', label: 'Car Lockouts' },
  { href: '/house-lockouts', label: 'House Lockouts' },
  { href: '/safe-lockouts', label: 'Safe Lockouts' },
];

const adminLinks = [
    { href: '/admin/seo-tool', label: 'Keyword Tool' },
    { href: '/admin/seo-content-editor', label: 'Content Optimizer' }
];

export default function Header() {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8 hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <Lock className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold text-lg">SecureAccess Pro</span>
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={cn(
                    'flex items-center gap-1 transition-colors hover:text-primary text-sm font-medium',
                    isAdminPage ? 'text-primary' : 'text-muted-foreground'
                )}>
                  Admin Tools
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {adminLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
                                    <span className="font-headline font-bold text-lg">SecureAccess Pro</span>
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
                                <div className="border-t pt-6 mt-2 space-y-4">
                                    <p className="text-muted-foreground font-medium">Admin Tools</p>
                                    {adminLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={cn(
                                                'block text-lg font-medium transition-colors hover:text-primary',
                                                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
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
