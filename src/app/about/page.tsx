'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Eye, Rocket, Award, Users, Cog, Calendar, CheckCircle } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';

const timeline = [
  { year: '1995', title: 'Company Founded', description: 'Preciflow established in Thane, Maharashtra with a vision to manufacture world-class instrumentation fittings.' },
  { year: '2000', title: 'Product Expansion', description: 'Expanded product range to include hydraulic fittings, establishing partnerships with major industrial clients.' },
  { year: '2005', title: 'CNC Modernization', description: 'Invested in advanced CNC machining centers, achieving 5-micron precision capability.' },
  { year: '2010', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification, affirming our commitment to international quality standards.' },
  { year: '2015', title: 'Global Exports', description: 'Started exporting to international markets, reaching 30+ countries across Asia, Europe, and the Middle East.' },
  { year: '2020', title: '1000+ Products', description: 'Crossed 1000+ product variants milestone, serving Oil & Gas, Chemical, Power, and Defence sectors.' },
  { year: 'Present', title: 'Continuing Excellence', description: 'Pushing boundaries with new materials, innovative designs, and expanding global footprint.' },
];

const values = [
  { icon: <Target className="w-6 h-6" />, title: 'Precision', description: 'Every component manufactured to exact specifications with tolerances as tight as 5 microns.' },
  { icon: <CheckCircle className="w-6 h-6" />, title: 'Quality', description: 'Uncompromising quality control with multiple inspection stages from raw material to final product.' },
  { icon: <Users className="w-6 h-6" />, title: 'Customer Focus', description: 'From conceptualization to final installation, we offer complete solutions tailored to client needs.' },
  { icon: <Rocket className="w-6 h-6" />, title: 'Innovation', description: 'Continuous R&D to develop high-performance products that meet evolving industry demands.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-industrial" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Logo with 3D premium rectangle look */}
            <motion.div
              initial={{ opacity: 0, rotateY: -30, x: -60 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="shrink-0"
              style={{ perspective: '1200px' }}
            >
              <motion.div
                className="relative group"
                whileHover={{
                  rotateY: 5,
                  rotateX: -3,
                  scale: 1.03,
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Ambient glow behind */}
                <div className="absolute -inset-4 rounded-3xl bg-accent/8 blur-2xl opacity-60 group-hover:opacity-100 group-hover:bg-accent/12 transition-all duration-700" />

                {/* Main card */}
                <div className="relative rounded-2xl overflow-hidden border border-accent/20 group-hover:border-accent/40 transition-all duration-500"
                  style={{
                    boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(9,132,227,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}
                >
                  {/* Top accent line */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[3px] z-10"
                    style={{
                      background: 'linear-gradient(90deg, transparent, #0984e3, #00d2ff, #0984e3, transparent)',
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-white/[0.02] z-10 pointer-events-none" />

                  {/* Logo image */}
                  <div className="relative bg-gradient-to-br from-navy-800/90 via-navy-900/95 to-navy-950 p-2">
                    <Image
                      src="/images/logo.jpeg"
                      alt="Preciflow Valves & Fittings"
                      width={400}
                      height={300}
                      className="w-[280px] sm:w-[320px] md:w-[380px] h-auto object-contain rounded-xl"
                      priority
                    />
                  </div>

                  {/* Bottom reflection bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                </div>

                {/* 3D edge shadow (left side) */}
                <div className="absolute top-2 -left-1 bottom-2 w-2 rounded-l-xl bg-gradient-to-r from-navy-950 to-transparent opacity-80"
                  style={{ transform: 'translateZ(-10px)' }}
                />

                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-accent/40 rounded-tr-xl"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-accent/40 rounded-bl-xl"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-accent-glow/30 rounded-tl-xl"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-accent-glow/30 rounded-br-xl"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 1.5 }}
                />
              </motion.div>
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs text-accent font-medium tracking-wider uppercase mb-6">
                <Calendar size={14} />
                Established 1995
              </div>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                About <span className="gradient-text">Preciflow</span>
              </h1>
              <p className="text-steel-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                Incorporated in 1995, Preciflow Valves & Fittings is a firm engaged in manufacturing
                and supplying a wide range of instrumentation tube fittings, hydraulic fittings,
                and precision turned components.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-6">
                Three Decades of <span className="gradient-text">Engineering Excellence</span>
              </h2>
              <div className="space-y-4 text-steel-300 leading-relaxed">
                <p>
                  Preciflow Valves & Fittings is not only manufacturing their products but are also
                  providing raw and machined forged instrumentation fittings to meet increasing demands
                  in both domestic and international markets.
                </p>
                <p>
                  We serve various industries such as Oil & Refineries, Power Generation, Chemical
                  and Fertilizer Industries. We continue to grow and expand our product range to
                  meet increasing demands of industries worldwide.
                </p>
                <p>
                  We leverage the skills of our engineers along with our superior infrastructure
                  facilities and in-house quality control equipment to meet the exacting product
                  requirements of our clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Years Experience', value: '30+', icon: <Calendar className="w-5 h-5" /> },
                { label: 'Products Range', value: '1000+', icon: <Cog className="w-5 h-5" /> },
                { label: 'Happy Clients', value: '500+', icon: <Users className="w-5 h-5" /> },
                { label: 'Certification', value: 'ISO', icon: <Award className="w-5 h-5" /> },
              ].map((item) => (
                <div key={item.label} className="glass-card-enhanced p-6 text-center hover:border-accent/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-3">
                    {item.icon}
                  </div>
                  <div className="font-heading font-bold text-2xl gradient-text mb-1">{item.value}</div>
                  <div className="text-steel-400 text-xs">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="container-max relative z-10">
          <SectionHeading
            badge="Our Purpose"
            title="Vision &"
            highlight="Mission"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="glass-card-enhanced p-8 md:p-10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-glow/10 border border-accent/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">Our Vision</h3>
              <p className="text-steel-300 leading-relaxed">
                To be recognized as one of the leaders in manufacturing and supply of instrument
                valves and fittings products through innovative, responsive, cost-effective,
                globally professional, and quality services to the industry.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="glass-card-enhanced p-8 md:p-10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-glow/10 border border-accent/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">Our Mission</h3>
              <p className="text-steel-300 leading-relaxed">
                To provide safety, durability, and quality in our instrument valves and fittings
                products and bring values to our customers worldwide by surpassing their needs
                and expectations through unmatched performance and complete satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="container-max relative z-10">
          <SectionHeading
            badge="Core Values"
            title="What Drives"
            highlight="Our Excellence"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeInUp} className="glass-card-enhanced p-6 text-center hover:border-accent/30 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">{value.title}</h3>
                <p className="text-steel-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="container-max relative z-10">
          <SectionHeading
            badge="Our Journey"
            title="Company"
            highlight="Timeline"
            description="A legacy of precision engineering and continuous growth since 1995."
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:-translate-x-px" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-navy-900 -translate-x-1.5 md:-translate-x-1.5 mt-2 z-10 shadow-glow" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mb-1">{item.title}</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
