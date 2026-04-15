'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flame, FlaskConical, Zap, Pill, Ship, Shield, FileText, Train, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import { industries } from '@/data/company';

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Pill: <Pill className="w-6 h-6" />,
  Ship: <Ship className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Train: <Train className="w-6 h-6" />,
};

export default function IndustriesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container-max relative z-10">
        <SectionHeading
          badge="Industries We Serve"
          title="Trusted Across"
          highlight="Critical Industries"
          description="From oil rigs to pharmaceutical plants, our precision-engineered components power the world's most demanding operations."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="glass-card-enhanced p-5 sm:p-6 cursor-pointer group hover:border-accent/30 transition-all duration-400"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-3 sm:mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                {iconMap[industry.icon]}
              </div>
              <h3 className="font-heading font-semibold text-white text-sm sm:text-base mb-2 group-hover:text-accent transition-colors duration-300">
                {industry.name}
              </h3>
              <p className="text-steel-400 text-xs sm:text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12"
        >
          <Link href="/industries" className="inline-flex items-center gap-2 text-accent hover:text-accent-light text-sm font-medium transition-colors duration-300 group">
            Explore All Industries
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
