'use client';

import { motion } from 'framer-motion';
import { Cpu, Target, Cog, Ruler, ArrowRight, CheckCircle, Factory, Wrench } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import { equipmentList } from '@/data/company';
import Link from 'next/link';

const capabilities = [
  { icon: <Cpu className="w-6 h-6" />, title: 'CNC Machining', description: 'Computer Numerical Controlled machines for high-precision, repeatable manufacturing with tolerances of ±0.005mm.' },
  { icon: <Target className="w-6 h-6" />, title: '5μm Accuracy', description: 'Precision measurement capabilities ensuring every component meets exact dimensional specifications.' },
  { icon: <Cog className="w-6 h-6" />, title: 'Multi-Axis', description: 'Advanced multi-axis machining for complex geometries and intricate fitting profiles.' },
  { icon: <Ruler className="w-6 h-6" />, title: 'Quality Tooling', description: 'Premium cutting tools and fixtures ensuring consistent surface finish and dimensional accuracy.' },
];

const process = [
  { step: '01', title: 'Raw Material', description: 'Source certified raw materials (SS316, Carbon Steel, Alloy, Brass) with full traceability.' },
  { step: '02', title: 'CNC Machining', description: 'Precision machining on CNC, Traub, and Capstan lathes with 5-micron accuracy.' },
  { step: '03', title: 'Threading', description: 'Accurate thread cutting for NPT, BSP, BSPT, UNF, METRIC, and custom threads.' },
  { step: '04', title: 'Surface Finish', description: 'Deburring, polishing, and surface treatment for optimal performance and aesthetics.' },
  { step: '05', title: 'Quality Inspection', description: 'Comprehensive dimensional, pressure, and NDT testing at every stage.' },
  { step: '06', title: 'Packaging & Dispatch', description: 'Careful packaging with product marking, MTC, and safe dispatch to customers.' },
];

export default function ManufacturingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-industrial" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs text-accent font-medium tracking-wider uppercase mb-6">
              <Factory size={14} />
              Manufacturing Excellence
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Advanced <span className="gradient-text">Manufacturing</span>
            </h1>
            <p className="text-steel-300 text-lg max-w-2xl leading-relaxed">
              Our state-of-the-art facility in India houses modern CNC machining centers
              and precision equipment, enabling us to manufacture components with unmatched
              accuracy and consistency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="container-max relative z-10">
          <SectionHeading
            badge="Our Capability"
            title="Precision"
            highlight="Capabilities"
            description="Leveraging advanced technology to deliver components that meet the most stringent global standards."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {capabilities.map((cap) => (
              <motion.div key={cap.title} variants={fadeInUp} className="glass-card p-6 hover:border-accent/30 transition-all duration-300 group text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto mb-4 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  {cap.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">{cap.title}</h3>
                <p className="text-steel-400 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
              <SectionHeading
                badge="Equipment"
                title="Manufacturing"
                highlight="Facility"
                centered={false}
                description="Our well-equipped manufacturing unit features modern machinery for precision production at scale."
              />

              <div className="space-y-3">
                {equipmentList.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-navy-800/30 transition-colors duration-300"
                  >
                    <CheckCircle size={18} className="text-accent shrink-0" />
                    <span className="text-steel-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
              <div className="glass-card p-8 text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/20 to-accent-glow/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Factory className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">World-Class Facility</h3>
                <p className="text-steel-400 leading-relaxed mb-6">
                  Highly trained and skilled, committed manpower to provide good quality products at economical prices.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '5μm', label: 'Precision' },
                    { value: '9000', label: 'PSI Rated' },
                    { value: '1000+', label: 'Products' },
                    { value: '24/7', label: 'Production' },
                  ].map(s => (
                    <div key={s.label} className="bg-navy-800/50 rounded-lg p-3 border border-steel-800">
                      <p className="font-heading font-bold text-xl gradient-text">{s.value}</p>
                      <p className="text-steel-500 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="container-max relative z-10">
          <SectionHeading
            badge="Our Process"
            title="Manufacturing"
            highlight="Process"
            description="From raw material sourcing to final dispatch — every step is precision-controlled."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {process.map((item) => (
              <motion.div key={item.step} variants={fadeInUp} className="glass-card p-6 hover:border-accent/30 transition-all duration-300 group relative overflow-hidden">
                <span className="absolute top-4 right-6 font-heading font-black text-5xl text-steel-800/20">
                  {item.step}
                </span>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-heading font-bold text-sm mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/quality" className="btn-outline">
              View Quality Assurance
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
