'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { navLinks, companyInfo } from '@/data/company';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-950/90 backdrop-blur-xl border-b border-accent/10 shadow-industrial'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar */}
        <div className={`transition-all duration-500 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
          <div className="container-max flex items-center justify-between h-10 text-xs text-steel-400 px-4 sm:px-6 lg:px-8">
            <div className="hidden md:flex items-center gap-6">
              <a href={`mailto:${companyInfo.emails[0]}`} className="hover:text-accent transition-colors">
                {companyInfo.emails[0]}
              </a>
              <span className="w-px h-3 bg-steel-700" />
              <span>{companyInfo.certification} Certified</span>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <a href={`tel:${companyInfo.phones[0]}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Phone size={12} />
                {companyInfo.phones[0]}
              </a>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - Circle with animation */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              >
                {/* Spinning border ring */}
                <motion.div
                  className="absolute -inset-[3px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'conic-gradient(from 0deg, #0984e3, #00d2ff, #74b9ff, transparent, #0984e3)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                />
                {/* Logo image in circle */}
                <div className={`relative rounded-full overflow-hidden border-2 border-accent/20 transition-all duration-300 ${
                  scrolled ? 'w-10 h-10 lg:w-11 lg:h-11' : 'w-11 h-11 lg:w-12 lg:h-12'
                }`}>
                  <Image
                    src="/images/logo2.png"
                    alt="Preciflow"
                    fill
                    className="object-cover scale-[1.2]"
                    priority
                  />
                </div>
              </motion.div>

              {/* Company name text */}
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-heading font-bold text-base lg:text-lg text-white tracking-tight group-hover:text-accent transition-colors duration-300">
                  Preciflow
                </span>
                <span className="text-[0.55rem] font-medium tracking-[0.18em] uppercase text-accent/70 mt-0.5">
                  Valves & Fittings
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                    pathname === link.href
                      ? 'text-accent'
                      : 'text-steel-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-accent to-accent-glow rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex btn-primary text-sm"
              >
                Request Quote
                <ChevronRight size={16} className="ml-1" />
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2 text-steel-300 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-navy-900/95 backdrop-blur-xl border-l border-accent/10 z-50 xl:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3">
                    {/* Circular logo in mobile menu */}
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent/30">
                      <Image
                        src="/images/logo2.png"
                        alt="Preciflow"
                        fill
                        className="object-cover scale-[1.2]"
                      />
                    </div>
                    <div className="flex flex-col leading-none">
                      <span className="font-heading font-bold text-sm text-white">Preciflow</span>
                      <span className="text-[0.5rem] font-medium tracking-[0.15em] uppercase text-accent/70 mt-0.5">Valves & Fittings</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-steel-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                          pathname === link.href
                            ? 'bg-accent/10 text-accent border border-accent/20'
                            : 'text-steel-300 hover:bg-navy-800/50 hover:text-white'
                        }`}
                      >
                        {link.name}
                        <ChevronRight size={16} className="opacity-40" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-steel-800">
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center text-sm"
                  >
                    Request Quote
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                  <div className="mt-6 space-y-3 text-sm text-steel-400">
                    <a href={`tel:${companyInfo.phones[0]}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                      <Phone size={14} />
                      {companyInfo.phones[0]}
                    </a>
                    <a href={`tel:${companyInfo.phones[1]}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                      <Phone size={14} />
                      {companyInfo.phones[1]}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
