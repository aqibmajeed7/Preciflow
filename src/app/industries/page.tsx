'use client';

import { motion } from 'framer-motion';
import { Flame, FlaskConical, Zap, Pill, Ship, Shield, FileText, Train, ArrowRight, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import { industries } from '@/data/company';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-8 h-8" />,
  FlaskConical: <FlaskConical className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Pill: <Pill className="w-8 h-8" />,
  Ship: <Ship className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
  Train: <Train className="w-8 h-8" />,
};

const industryProducts: Record<string, string[]> = {
  'oil-gas': ['Male Connectors', 'Needle Valves', 'Ball Valves', 'Quick Release Couplings', 'High-Pressure Fittings'],
  'chemical': ['Stainless Steel Fittings', 'Corrosion-Resistant Valves', 'Union Connectors', 'Female Elbows'],
  'power': ['Instrumentation Fittings', 'Needle Valves', 'Tube Fittings', 'High-Temperature Connectors'],
  'pharma': ['SS316 Fittings', 'Sanitary Connectors', 'Ball Valves', 'Clean-Process Fittings'],
  'ship-building': ['Marine-Grade Fittings', 'Hydraulic Connectors', 'Quick Release Couplings', 'Bulkheads'],
  'defence': ['Military-Grade Valves', 'Pressure-Rated Fittings', 'Custom Connectors', 'Needle Valves'],
  'pulp-paper': ['High-Temperature Fittings', 'Chemical-Resistant Valves', 'Union Tees', 'Adapters'],
  'rolling-stock': ['Vibration-Resistant Fittings', 'Hydraulic Connectors', 'Male Adaptors', 'Hose Connectors'],
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-industrial" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Industries <span className="gradient-text">We Serve</span>
            </h1>
            <p className="text-steel-300 text-lg max-w-2xl leading-relaxed">
              From oil rigs to pharmaceutical plants, our precision-engineered components
              power the world&apos;s most critical and demanding industrial operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="container-max relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                variants={fadeInUp}
                className="glass-card overflow-hidden hover:border-accent/30 transition-all duration-400"
              >
                <div className={`grid md:grid-cols-3 gap-0 ${index % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                  {/* Info */}
                  <div className="p-8 md:p-10 md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        {iconMap[industry.icon]}
                      </div>
                      <div>
                        <h2 className="font-heading font-bold text-xl md:text-2xl text-white">{industry.name}</h2>
                        <p className="text-steel-500 text-sm">Industry Application</p>
                      </div>
                    </div>

                    <p className="text-steel-300 leading-relaxed mb-6">{industry.description}</p>

                    <div>
                      <h4 className="text-steel-400 text-xs uppercase tracking-wider font-medium mb-3">Related Products</h4>
                      <div className="flex flex-wrap gap-2">
                        {industryProducts[industry.id]?.map((product) => (
                          <span key={product} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800/50 border border-steel-800 text-steel-300 text-xs">
                            <CheckCircle size={12} className="text-accent" />
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="relative h-48 md:h-auto bg-gradient-to-br from-accent/5 to-accent-glow/5 flex items-center justify-center border-t md:border-t-0 md:border-l border-steel-800/50">
                    <div className="grid-pattern absolute inset-0 opacity-30" />
                    <div className="text-accent/20">
                      {iconMap[industry.icon] && (
                        <div className="scale-[3] opacity-30">
                          {iconMap[industry.icon]}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-steel-400 mb-6 text-lg">Can&apos;t find your industry? We serve custom requirements too.</p>
            <Link href="/contact" className="btn-primary">
              Contact Our Team
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
