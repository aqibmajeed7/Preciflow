import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries Served',
  description: 'Preciflow serves Oil & Gas, Chemical, Power Generation, Pharma, Ship Building, Defence, Rolling Stock, and Pulp & Paper industries with precision fittings and valves.',
  openGraph: {
    title: 'Industries Served | Preciflow Valves & Fittings',
    description: 'Trusted across 8+ critical industries worldwide.',
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
