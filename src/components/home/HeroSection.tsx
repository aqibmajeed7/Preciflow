'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Award, Shield, Factory } from 'lucide-react';

const heroWords = ['Tube Fittings', 'Hydraulic Fittings', 'Needle Valves', 'Ball Valves', 'Precision Components'];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % heroWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-industrial" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-accent-glow/5 blur-3xl" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 60] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(90deg, #0984E3 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/30"
          style={{
            top: `${20 + i * 12}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container-max relative z-10 py-24 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent mb-6 sm:mb-8"
          >
            <Award size={16} />
            <span className="font-medium">ISO 9001:2015 Certified</span>
            <span className="text-steel-500">•</span>
            <span className="text-steel-400">Since 1995</span>
          </motion.div>

          {/* Main Heading - Preciflow Valves */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-2"
          >
            Preciflow Valves
          </motion.h1>

          {/* Rotating word */}
          <div className="h-[44px] sm:h-[54px] md:h-[66px] lg:h-[80px] xl:h-[96px] overflow-hidden mb-4 sm:mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentWord}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl gradient-text"
              >
                {heroWords[currentWord]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-steel-300 text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-3 sm:mb-4 italic"
          >
            &ldquo;Precisely Fulfill Engineering Needs&rdquo;
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-steel-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8 sm:mb-10"
          >
            India&apos;s trusted manufacturer of high-performance tube fittings, hydraulic fittings,
            and valves — serving critical industries worldwide with uncompromising quality
            up to <span className="text-accent font-semibold">9,000 PSI</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
          >
            <Link href="/products" className="btn-primary text-sm sm:text-base w-full sm:w-auto text-center">
              Explore Products
              <ChevronRight size={18} className="ml-1" />
            </Link>
            <Link href="/contact" className="btn-outline text-sm sm:text-base w-full sm:w-auto text-center">
              Request a Quote
              <ArrowRight size={18} className="ml-1" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10 sm:mt-16 flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-steel-500"
          >
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-accent/60" />
              <span>9,000 PSI Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Factory size={18} className="text-accent/60" />
              <span>CNC Precision Machining</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={18} className="text-accent/60" />
              <span>1000+ Components</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-steel-600 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
