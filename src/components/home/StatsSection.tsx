'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { stats } from '@/data/company';

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 line-glow" />
      <div className="absolute bottom-0 left-0 right-0 line-glow" />

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat ) => (
            <motion.div key={stat.label} variants={fadeInUp}>
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
