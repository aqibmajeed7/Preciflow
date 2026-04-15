import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Preciflow Valves & Fittings — ISO 9001:2015 certified manufacturer since 1995. 30+ years of precision engineering, 1000+ product variants, serving global industries.',
  openGraph: {
    title: 'About Preciflow Valves & Fittings',
    description: 'Three decades of precision manufacturing excellence. ISO 9001:2015 certified with 1000+ product variants.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
