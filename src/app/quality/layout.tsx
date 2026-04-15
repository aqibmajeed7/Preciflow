import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality Assurance',
  description: 'ISO 9001:2015 certified quality management. Rigorous NDT, tensile, pressure, and corrosion testing. Zero-defect commitment with full material traceability.',
  openGraph: {
    title: 'Quality Assurance | Preciflow Valves & Fittings',
    description: 'ISO 9001:2015 certified with 9-step quality control process.',
  },
};

export default function QualityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
