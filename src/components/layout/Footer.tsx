'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUp, ExternalLink } from 'lucide-react';
import { companyInfo, navLinks } from '@/data/company';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const productLinks = [
  { name: 'Tube & Instrumentation Fittings', href: '/products?category=tube-fittings' },
  { name: 'Hydraulic Fittings', href: '/products?category=hydraulic-fittings' },
  { name: 'Valves', href: '/products?category=valves' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-steel-800/50">
      {/* Decorative top line */}
      <div className="line-glow" />

      {/* CTA Section */}
      <div className="container-max py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent/10 via-navy-800 to-accent-glow/10 border border-accent/20 backdrop-blur-xl p-8 md:p-12 text-center"
        >
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="relative z-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4">
              Ready to Engineer Your Solution?
            </h2>
            <p className="text-steel-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
              Get in touch with our engineering team for custom quotes, technical specifications, and expert consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/products" className="btn-outline">
                Explore Products
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Footer Grid */}
      <div className="container-max px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {/* Company */}
          <motion.div variants={fadeInUp}>
            <div className="mb-6">
              <Image
                src="/images/logo2.png"
                alt="Preciflow Valves & Fittings"
                width={180}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-steel-400 text-sm leading-relaxed mb-4">
              {companyInfo.tagline}. Manufacturing precision tube fittings, hydraulic fittings, and valves since {companyInfo.established}.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs text-accent font-medium">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {companyInfo.certification} Certified
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-400 hover:text-accent text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-steel-700 group-hover:bg-accent transition-colors duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Our Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel-400 hover:text-accent text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-steel-700 group-hover:bg-accent transition-colors duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/download"
                  className="text-accent hover:text-accent-light text-sm transition-colors duration-300 flex items-center gap-2 mt-4 font-medium"
                >
                  <ExternalLink size={14} />
                  Download Brochure
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 shrink-0" />
                <p className="text-steel-400 text-sm leading-relaxed">
                  Mira Road East, Thane – 401107, Maharashtra, India
                </p>
              </div>
              {companyInfo.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-steel-400 hover:text-accent text-sm transition-colors duration-300"
                >
                  <Phone size={14} className="shrink-0" />
                  {phone}
                </a>
              ))}
              {companyInfo.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-steel-400 hover:text-accent text-sm transition-colors duration-300"
                >
                  <Mail size={14} className="shrink-0" />
                  {email}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-800/50">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-steel-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Preciflow Valves & Fittings. All rights reserved. | Specialist in Tube Fittings | Hydraulic Fittings | Valves
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-steel-400 hover:text-accent text-xs transition-colors duration-300 group"
            aria-label="Back to top"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-steel-700 group-hover:border-accent flex items-center justify-center transition-colors duration-300">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
