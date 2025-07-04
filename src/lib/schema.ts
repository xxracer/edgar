interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

// NOTE: Replace "https://your-domain.com" with your actual domain for production.
const domain = "https://your-domain.com";
const logoUrl = "https://static.wixstatic.com/media/c5947c_01ae2a13fd3e433094c0d286ddd5a9ee~mv2.png";

export const getServiceSchema = ({ name, description, url }: ServiceSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": name,
  "provider": {
    "@type": "Locksmith",
    "name": "Emergency Locksmith",
    "telephone": "+1-281-989-0245",
    "image": logoUrl, 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St", 
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77001",
      "addressCountry": "US"
    },
    "url": domain
  },
  "areaServed": {
    "@type": "City",
    "name": "Houston"
  },
  "name": name,
  "description": description,
  "url": `${domain}${url}`
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "name": "Emergency Locksmith",
  "telephone": "+1-281-989-0245",
  "url": domain,
  "logo": logoUrl,
  "image": `https://placehold.co/1200x630.png`,
  "description": "Fast, reliable, and affordable lockout services for your car, home, or safe. Call (281)989-0245 for immediate assistance. We are available 24/7.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "postalCode": "77001",
    "addressCountry": "US"
  },
  "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
  "priceRange": "$$"
});
