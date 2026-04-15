import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore Preciflow\'s comprehensive range of tube fittings, hydraulic fittings, needle valves, and ball valves. Rated up to 9000 PSI in SS316, Carbon Steel, Alloy, and Brass.',
  openGraph: {
    title: 'Products | Preciflow Valves & Fittings',
    description: 'Precision tube fittings, hydraulic fittings, and valves rated up to 9000 PSI.',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
