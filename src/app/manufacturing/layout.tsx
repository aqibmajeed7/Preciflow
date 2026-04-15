import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing',
  description: 'State-of-the-art CNC machining facility with 5-micron accuracy. Advanced manufacturing capabilities for precision tube fittings and valves at Preciflow.',
  openGraph: {
    title: 'Manufacturing | Preciflow Valves & Fittings',
    description: 'CNC precision machining with 5μm accuracy for world-class instrumentation components.',
  },
};

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
