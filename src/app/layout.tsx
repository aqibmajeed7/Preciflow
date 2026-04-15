import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/layout/WhatsAppWidget';
import LoadingScreen from '@/components/ui/LoadingScreen';

export const metadata: Metadata = {
  title: {
    default: 'Preciflow Valves & Fittings | Precision Tube Fittings, Hydraulic Fittings & Valves',
    template: '%s | Preciflow Valves & Fittings',
  },
  description:
    'Preciflow Valves & Fittings — ISO 9001:2015 certified manufacturer of precision tube fittings, hydraulic fittings, needle valves, and ball valves since 1995. Serving Oil & Gas, Chemical, Power, and Pharma industries worldwide.',
  keywords: [
    'tube fittings', 'hydraulic fittings', 'valves', 'needle valve', 'ball valve',
    'instrumentation fittings', 'compression fittings', 'stainless steel fittings',
    'Preciflow', 'manufacturer', 'India', 'ISO 9001:2015',
  ],
  authors: [{ name: 'Preciflow Valves & Fittings' }],
  creator: 'Preciflow Valves & Fittings',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.preciflow.com',
    siteName: 'Preciflow Valves & Fittings',
    title: 'Preciflow Valves & Fittings | Precision Engineering Since 1995',
    description:
      'ISO 9001:2015 certified manufacturer of precision tube fittings, hydraulic fittings, and valves. Serving global industries with 30+ years of engineering excellence.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preciflow Valves & Fittings',
    description: 'Precision Tube Fittings, Hydraulic Fittings & Valves Manufacturer since 1995.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0C1821" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Preciflow Valves & Fittings',
              url: 'https://www.preciflow.com',
              logo: 'https://www.preciflow.com/logo.png',
              description: 'ISO 9001:2015 certified manufacturer of precision tube fittings, hydraulic fittings, and valves since 1995.',
              foundingDate: '1995',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'H/7103, Raj Estate, G&H Wing, CHS, Ltd, Near Jari Mari Talav, Kashimira',
                addressLocality: 'Mira Road East, Thane',
                addressRegion: 'Maharashtra',
                postalCode: '401107',
                addressCountry: 'IN',
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+91-7021193600',
                  contactType: 'sales',
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+91-9819576660',
                  contactType: 'customer service',
                },
              ],
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-body bg-navy-950 text-steel-100 min-h-screen">
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
