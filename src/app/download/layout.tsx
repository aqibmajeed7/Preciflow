import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download Brochure',
  description: 'Download Preciflow product catalogs and company brochure. Get detailed specifications for tube fittings, hydraulic fittings, and valves.',
  openGraph: {
    title: 'Download Brochure | Preciflow Valves & Fittings',
    description: 'Access our product catalogs and company brochure in PDF format.',
  },
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
