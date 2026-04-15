'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench, Gauge, CircleDot } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import StarRating from '@/components/ui/StarRating';
import { products } from '@/data/products';

const categoryIcons: Record<string, React.ReactNode> = {
  'tube-fittings': <Wrench className="w-5 h-5" />,
  'hydraulic-fittings': <Gauge className="w-5 h-5" />,
  'valves': <CircleDot className="w-5 h-5" />,
};

const categoryColors: Record<string, string> = {
  'tube-fittings': 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
  'hydraulic-fittings': 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
  'valves': 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
};

const categoryTextColors: Record<string, string> = {
  'tube-fittings': 'text-blue-400',
  'hydraulic-fittings': 'text-amber-400',
  'valves': 'text-emerald-400',
};

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[120px]" />

      <div className="container-max relative z-10">
        <SectionHeading
          badge="Our Products"
          title="Featured"
          highlight="Products"
          description="Explore our range of precision-engineered tube fittings, hydraulic fittings, and valves designed for critical applications."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {featured.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              className="group"
            >
              <div className="glass-card-enhanced p-5 sm:p-6 h-full flex flex-col">
                {/* Product Visual */}
                <div className={`relative h-40 sm:h-48 rounded-xl bg-gradient-to-br ${categoryColors[product.category]} border flex items-center justify-center mb-5 sm:mb-6 overflow-hidden`}>
                  <div className="absolute inset-0 grid-pattern opacity-20" />

                  {/* Abstract product representation */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-navy-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center ${categoryTextColors[product.category]} group-hover:scale-110 transition-transform duration-500`}>
                      {categoryIcons[product.category]}
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full bg-navy-900/60 ${categoryTextColors[product.category]}`}>
                      {product.categoryLabel}
                    </span>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-base sm:text-lg text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Star Rating */}
                <div className="mb-3">
                  <StarRating productId={product.id} size={13} />
                </div>

                <p className="text-steel-400 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                  {product.description}
                </p>

                {/* Specs preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-1 rounded-md bg-navy-800/80 backdrop-blur-sm text-steel-300 border border-steel-800/50">
                    {product.specifications.pressure}
                  </span>
                  <span className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-1 rounded-md bg-navy-800/80 backdrop-blur-sm text-steel-300 border border-steel-800/50">
                    {product.specifications.size}
                  </span>
                </div>

                {/* Link */}
                <Link
                  href={`/products?highlight=${product.id}`}
                  className="inline-flex items-center gap-2 text-accent text-sm font-medium group/link"
                >
                  View Details
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 sm:mt-12"
        >
          <Link href="/products" className="btn-outline">
            View All Products
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
