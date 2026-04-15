'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Factory, Clock, ThumbsUp, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';

const badges = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'ISO 9001:2015',
    description: 'Internationally certified quality management system.',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Since 1995',
    description: '30+ years of precision manufacturing excellence.',
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: 'In-House CNC',
    description: 'State-of-the-art CNC machining with 5μm accuracy.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Zero Defect',
    description: 'Rigorous NDT, tensile, and pressure testing.',
  },
  {
    icon: <ThumbsUp className="w-8 h-8" />,
    title: '500+ Clients',
    description: 'Trusted by leading industries across the globe.',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Global Reach',
    description: 'Exporting precision components to 50+ countries.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-navy-950" />

      <div className="container-max relative z-10">
        <SectionHeading
          badge="Why Choose Us"
          title="Engineering Excellence,"
          highlight="Delivered"
          description="Three decades of precision manufacturing, uncompromising quality, and customer-first innovation."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="glass-card-enhanced p-6 sm:p-8 h-full hover:border-accent/30 transition-all duration-400 overflow-hidden">
                {/* Number watermark */}
                <span className="absolute top-3 right-5 sm:top-4 sm:right-6 font-heading font-black text-5xl sm:text-6xl text-steel-800/20 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-glow/5 border border-accent/20 flex items-center justify-center text-accent mb-4 sm:mb-5 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    {badge.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-steel-400 text-xs sm:text-sm leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
