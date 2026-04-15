'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, Gauge, ScanSearch, Ruler, Activity, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import { qualityTests } from '@/data/company';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  Gauge: <Gauge className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
  ScanSearch: <ScanSearch className="w-7 h-7" />,
  Ruler: <Ruler className="w-7 h-7" />,
  Activity: <Activity className="w-7 h-7" />,
  FileCheck: <FileCheck className="w-7 h-7" />,
};

const qcSteps = [
  'Incoming raw material inspection',
  'In-process dimensional checks',
  'Thread gauge verification',
  'Surface finish assessment',
  'Hydrostatic pressure testing at 1.5x rated pressure',
  'Non-Destructive Testing (NDT)',
  'Final dimensional inspection',
  'Visual inspection and packaging audit',
  'Material Test Certificate (MTC) generation',
];

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-industrial" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs text-accent font-medium tracking-wider uppercase mb-6">
              <Award size={14} />
              ISO 9001:2015 Certified
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Quality <span className="gradient-text">Assurance</span>
            </h1>
            <p className="text-steel-300 text-lg max-w-2xl leading-relaxed">
              Every component undergoes rigorous testing and inspection to ensure it meets
              the highest international quality standards before reaching our customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ISO Certificate Section */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
              <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="relative z-10">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-accent-glow/10 border-2 border-accent/30 flex items-center justify-center mx-auto mb-6">
                    <Award className="w-12 h-12 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl text-white mb-2">ISO 9001:2015</h3>
                  <p className="text-accent font-medium mb-4">Certified Quality Management System</p>
                  <p className="text-steel-400 leading-relaxed max-w-md mx-auto">
                    Our quality management system is independently audited and certified to
                    ISO 9001:2015, ensuring consistent product quality and continuous improvement.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
              <h2 className="font-heading font-bold text-3xl text-white mb-6">
                Zero-Defect <span className="gradient-text">Commitment</span>
              </h2>
              <p className="text-steel-300 leading-relaxed mb-6">
                We manufacture all products to very precise tolerance under rigid quality
                control. Our products are tested with continuous research and development
                programs to fulfill the demand of high-performance quality products for
                instrumentation and process tubing.
              </p>
              <div className="space-y-3">
                {[
                  'ISO 9001:2015 Certified Processes',
                  '100% Incoming Material Inspection',
                  'In-Process Quality Checks',
                  'Final Inspection Before Dispatch',
                  'Full Material Traceability',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-accent shrink-0" />
                    <span className="text-steel-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testing Methods */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="container-max relative z-10">
          <SectionHeading
            badge="Testing Methods"
            title="Rigorous"
            highlight="Testing Standards"
            description="Every product undergoes multiple quality tests to ensure reliability in the most demanding applications."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {qualityTests.map((test) => (
              <motion.div key={test.name} variants={fadeInUp} className="glass-card p-6 hover:border-accent/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  {iconMap[test.icon]}
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">{test.name}</h3>
                <p className="text-steel-400 text-sm leading-relaxed">{test.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* QC Process */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="container-max relative z-10">
          <SectionHeading
            badge="QC Process"
            title="Quality Control"
            highlight="Workflow"
            description="Our 9-step quality control process ensures zero defects from raw material to finished product."
          />

          <div className="max-w-3xl mx-auto">
            {qcSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 mb-4"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-heading font-bold text-xs shrink-0 mt-0.5">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 py-2 border-b border-steel-800/50">
                  <span className="text-steel-300 text-sm">{step}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/contact" className="btn-primary">
              Request Quality Documentation
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
