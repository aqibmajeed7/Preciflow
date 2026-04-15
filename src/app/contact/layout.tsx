import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Preciflow Valves & Fittings for quotes, technical specifications, and consultation. Call +91 7021193600 or email info@preciflow.com. Visit us in Mira Road East, Thane.',
  openGraph: {
    title: 'Contact Us | Preciflow Valves & Fittings',
    description: 'Get in touch for custom quotes and engineering consultation.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
