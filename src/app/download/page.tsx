'use client';

import { motion } from 'framer-motion';
import { Download, FileText, ArrowRight, Wrench, Gauge, CircleDot } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

const downloads = [
  {
    id: 'full-brochure',
    title: 'Company Brochure',
    description: 'Complete product catalog with specifications, Company profile, and contact details.',
    icon: <FileText className="w-8 h-8" />,
    pages: '6 Pages',
    format: 'PDF',
    size: '2.5 MB',
    primary: true,
  },
  {
    id: 'tube-fittings-catalog',
    title: 'Tube & Instrumentation Fittings',
    description: 'Detailed specifications for all tube fitting variants including connectors, elbows, tees, and crosses.',
    icon: <Wrench className="w-8 h-8" />,
    pages: 'Category Catalog',
    format: 'PDF',
    size: '1.2 MB',
    primary: false,
  },
  {
    id: 'hydraulic-catalog',
    title: 'Hydraulic Fittings',
    description: 'Quick release couplings, union adapters, bushings, and 37° flare fitting specifications.',
    icon: <Gauge className="w-8 h-8" />,
    pages: 'Category Catalog',
    format: 'PDF',
    size: '800 KB',
    primary: false,
  },
  {
    id: 'valves-catalog',
    title: 'Valves Catalog',
    description: 'Needle valves and ball valves with pressure ratings, MOC, and dimensional details.',
    icon: <CircleDot className="w-8 h-8" />,
    pages: 'Category Catalog',
    format: 'PDF',
    size: '600 KB',
    primary: false,
  },
];

export default function DownloadPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-industrial" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Download <span className="gradient-text">Brochure</span>
            </h1>
            <p className="text-steel-300 text-lg max-w-2xl leading-relaxed">
              Access our product catalogs and company brochure for detailed specifications,
              dimensions, and ordering information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="container-max relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {downloads.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className={`glass-card-hover p-6 md:p-8 flex flex-col ${item.primary ? 'md:col-span-2' : ''}`}
              >
                <div className={`flex items-start gap-5 ${item.primary ? 'md:flex-row' : 'flex-col'}`}>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading font-bold text-xl text-white">{item.title}</h3>
                      {item.primary && (
                        <span className="px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-steel-400 text-sm leading-relaxed mb-4">{item.description}</p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="text-xs px-2.5 py-1 rounded-md bg-navy-800 text-steel-400 border border-steel-800">
                        {item.format}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-navy-800 text-steel-400 border border-steel-800">
                        {item.size}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-md bg-navy-800 text-steel-400 border border-steel-800">
                        {item.pages}
                      </span>
                    </div>

                    {/* Download button */}
                    <button
                      className={item.primary ? 'btn-primary text-sm' : 'btn-outline text-sm'}
                      onClick={() => alert('Brochure PDF will be available after deployment. Contact info@preciflow.com for immediate access.')}
                    >
                      <Download size={16} className="mr-2" />
                      Download {item.format}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="glass-card p-8 max-w-2xl mx-auto text-center">
              <h3 className="font-heading font-bold text-xl text-white mb-3">Need Custom Documentation?</h3>
              <p className="text-steel-400 text-sm mb-6">
                Contact us for specific product datasheets, material test certificates, or custom catalog requirements.
              </p>
              <Link href="/contact" className="btn-primary text-sm">
                Contact Engineering Team
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
