import Link from 'next/link';
import { Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              <span className="font-headline font-bold text-lg">SecureAccess Pro</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your trusted 24/7 emergency locksmith service.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/car-lockouts" className="text-muted-foreground hover:text-primary transition-colors">Car Lockouts</Link></li>
              <li><Link href="/house-lockouts" className="text-muted-foreground hover:text-primary transition-colors">House Lockouts</Link></li>
              <li><Link href="/safe-lockouts" className="text-muted-foreground hover:text-primary transition-colors">Safe Lockouts</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Phone: <a href="tel:2819890245" className="hover:text-primary transition-colors">(281) 989-0245</a></li>
              <li>Email: <a href="mailto:contact@secureaccesspro.com" className="hover:text-primary transition-colors">contact@secureaccesspro.com</a></li>
            </ul>
          </div>
           <div>
            <h4 className="font-headline font-semibold mb-4">Admin Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/admin/seo-tool" className="text-muted-foreground hover:text-primary transition-colors">Keyword Tool</Link></li>
              <li><Link href="/admin/seo-content-editor" className="text-muted-foreground hover:text-primary transition-colors">Content Optimizer</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SecureAccess Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
