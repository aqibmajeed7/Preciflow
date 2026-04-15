'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, ChevronDown, Wrench, Gauge, CircleDot, ArrowRight, Phone, MessageCircle, Star, Send } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import StarRating from '@/components/ui/StarRating';
import { products } from '@/data/products';
import Link from 'next/link';

const categories = [
  { id: 'all', label: 'All Products', icon: <Filter className="w-4 h-4" />, count: products.length },
  { id: 'tube-fittings', label: 'Tube & Instrumentation', icon: <Wrench className="w-4 h-4" />, count: products.filter(p => p.category === 'tube-fittings').length },
  { id: 'hydraulic-fittings', label: 'Hydraulic Fittings', icon: <Gauge className="w-4 h-4" />, count: products.filter(p => p.category === 'hydraulic-fittings').length },
  { id: 'valves', label: 'Valves', icon: <CircleDot className="w-4 h-4" />, count: products.filter(p => p.category === 'valves').length },
];

const materials = ['All Materials', 'Stainless Steel 316', 'Carbon Steel', 'Alloy Steel', 'Nickel Alloy', 'Brass'];

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

const categoryBadgeColors: Record<string, string> = {
  'tube-fittings': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'hydraulic-fittings': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'valves': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

// Interactive star selector for user input
function StarSelector({ rating, onRate }: { rating: number; onRate: (r: number) => void }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="transition-transform duration-150 hover:scale-125"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onRate(star)}
        >
          <Star
            size={22}
            className={`transition-colors duration-150 ${
              star <= (hovered || rating)
                ? 'text-amber-400 fill-amber-400'
                : 'text-steel-600'
            }`}
          />
        </button>
      ))}
      {rating > 0 && (
        <span className="text-amber-400 text-sm font-semibold ml-2">{rating}.0</span>
      )}
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('All Materials');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  // Review state
  const [reviews, setReviews] = useState<Record<string, Review[]>>({});
  const [userRating, setUserRating] = useState(0);
  const [userName, setUserName] = useState('');
  const [userComment, setUserComment] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesMaterial = selectedMaterial === 'All Materials' ||
        product.specifications.moc.some(m => m.includes(selectedMaterial));
      return matchesCategory && matchesSearch && matchesMaterial;
    });
  }, [activeCategory, searchQuery, selectedMaterial]);

  const handleSubmitReview = useCallback(() => {
    if (!selectedProduct || userRating === 0 || !userName.trim()) return;

    const newReview: Review = {
      id: Date.now().toString(),
      name: userName.trim(),
      rating: userRating,
      comment: userComment.trim(),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    };

    setReviews(prev => ({
      ...prev,
      [selectedProduct.id]: [...(prev[selectedProduct.id] || []), newReview],
    }));

    setUserRating(0);
    setUserName('');
    setUserComment('');
  }, [selectedProduct, userRating, userName, userComment]);

  const productReviews = selectedProduct ? (reviews[selectedProduct.id] || []) : [];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-industrial" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-steel-300 text-lg max-w-2xl">
              Explore our comprehensive range of precision-engineered tube fittings,
              hydraulic fittings, and valves — rated up to 9,000 PSI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Products */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="container-max relative z-10">
          {/* Search & Filters Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-4 mb-10"
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-navy-800/50 border border-steel-800 text-white placeholder:text-steel-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-steel-500 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Material Filter */}
            <div className="relative">
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="appearance-none w-full lg:w-56 px-4 py-3.5 pr-10 rounded-xl bg-navy-800/50 border border-steel-800 text-steel-200 focus:outline-none focus:border-accent/50 transition-all duration-300 cursor-pointer"
              >
                {materials.map(m => (
                  <option key={m} value={m} className="bg-navy-900">{m}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-steel-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? 'bg-accent/10 border-accent/30 text-accent shadow-glow'
                    : 'bg-navy-800/30 border-steel-800 text-steel-400 hover:border-steel-600 hover:text-steel-200'
                }`}
              >
                {cat.icon}
                {cat.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === cat.id ? 'bg-accent/20 text-accent' : 'bg-steel-800 text-steel-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Results count */}
          <p className="text-steel-500 text-sm mb-6">
            Showing <span className="text-white font-medium">{filteredProducts.length}</span> products
          </p>

          {/* Product Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="product-card-premium h-full flex flex-col">
                    {/* Product Visual */}
                    <div className={`relative h-40 rounded-xl bg-gradient-to-br ${categoryColors[product.category]} border flex items-center justify-center mb-4 overflow-hidden`}>
                      <div className="absolute inset-0 grid-pattern opacity-20" />
                      <div className={`relative z-10 w-14 h-14 rounded-xl bg-navy-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center ${categoryTextColors[product.category]} group-hover:scale-110 transition-transform duration-500`}>
                        {product.category === 'tube-fittings' && <Wrench className="w-6 h-6" />}
                        {product.category === 'hydraulic-fittings' && <Gauge className="w-6 h-6" />}
                        {product.category === 'valves' && <CircleDot className="w-6 h-6" />}
                      </div>
                    </div>

                    {/* Badge */}
                    <span className={`inline-flex self-start px-2.5 py-0.5 rounded-md text-[10px] font-medium border mb-2 ${categoryBadgeColors[product.category]}`}>
                      {product.categoryLabel}
                    </span>

                    {/* Name */}
                    <h3 className="font-heading font-semibold text-white text-sm mb-1.5 group-hover:text-accent transition-colors duration-300">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="mb-2">
                      <StarRating productId={product.id} size={12} />
                    </div>

                    {/* Specs */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-navy-800/80 text-steel-400 border border-steel-800/50">
                        {product.specifications.pressure}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-steel-500 text-lg mb-2">No products found</p>
              <p className="text-steel-600 text-sm">Try adjusting your filters or search query.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setSelectedProduct(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-4 left-4 right-4 bottom-4 md:top-6 md:bottom-6 md:left-auto md:right-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50 glass-card-enhanced overflow-y-auto"
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border mb-3 ${categoryBadgeColors[selectedProduct.category]}`}>
                      {selectedProduct.categoryLabel}
                    </span>
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">
                      {selectedProduct.name}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 rounded-lg bg-navy-800 text-steel-400 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Visual */}
                <div className={`h-48 rounded-xl bg-gradient-to-br ${categoryColors[selectedProduct.category]} border flex items-center justify-center mb-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-pattern opacity-10" />
                  <div className={`w-20 h-20 rounded-2xl bg-navy-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center ${categoryTextColors[selectedProduct.category]}`}>
                    {selectedProduct.category === 'tube-fittings' && <Wrench className="w-10 h-10" />}
                    {selectedProduct.category === 'hydraulic-fittings' && <Gauge className="w-10 h-10" />}
                    {selectedProduct.category === 'valves' && <CircleDot className="w-10 h-10" />}
                  </div>
                </div>

                {/* Rating display */}
                <div className="mb-4">
                  <StarRating productId={selectedProduct.id} size={16} />
                </div>

                {/* Description */}
                <p className="text-steel-300 leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                {/* Specifications */}
                <div className="space-y-4 mb-8">
                  <h3 className="font-heading font-semibold text-white text-lg">Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-navy-800/50 backdrop-blur-sm rounded-lg p-4 border border-steel-800/50">
                      <p className="text-steel-500 text-xs uppercase tracking-wider mb-1">Pressure Rating</p>
                      <p className="text-white font-medium">{selectedProduct.specifications.pressure}</p>
                    </div>
                    <div className="bg-navy-800/50 backdrop-blur-sm rounded-lg p-4 border border-steel-800/50">
                      <p className="text-steel-500 text-xs uppercase tracking-wider mb-1">Size Range</p>
                      <p className="text-white font-medium">{selectedProduct.specifications.size}</p>
                    </div>
                  </div>

                  <div className="bg-navy-800/50 backdrop-blur-sm rounded-lg p-4 border border-steel-800/50">
                    <p className="text-steel-500 text-xs uppercase tracking-wider mb-2">Material of Construction</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.specifications.moc.map((m) => (
                        <span key={m} className="px-3 py-1 rounded-full bg-navy-900 text-steel-300 text-xs border border-steel-700">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-navy-800/50 backdrop-blur-sm rounded-lg p-4 border border-steel-800/50">
                    <p className="text-steel-500 text-xs uppercase tracking-wider mb-2">End Connections</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.specifications.endConnections.map((c) => (
                        <span key={c} className="px-3 py-1 rounded-full bg-navy-900 text-steel-300 text-xs border border-steel-700">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Link href="/contact" className="btn-primary flex-1 text-center text-sm">
                    <Phone size={16} className="mr-2" />
                    Request Quote
                  </Link>
                  <a
                    href={`https://wa.me/917021193600?text=${encodeURIComponent(`Hi, I'm interested in ${selectedProduct.name}. Can you provide a quote?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 text-center text-sm !border-green-500 !text-green-400 hover:!bg-green-500 hover:!text-white"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    WhatsApp Inquiry
                  </a>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-steel-700 to-transparent mb-6" />

                {/* Reviews Section */}
                <div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-4 flex items-center gap-2">
                    <Star size={18} className="text-amber-400" />
                    Reviews & Ratings
                    {productReviews.length > 0 && (
                      <span className="text-steel-500 text-sm font-normal">({productReviews.length})</span>
                    )}
                  </h3>

                  {/* Existing Reviews */}
                  {productReviews.length > 0 && (
                    <div className="space-y-3 mb-6 max-h-48 overflow-y-auto pr-1">
                      {productReviews.map((review) => (
                        <motion.div
                          key={review.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-navy-800/40 backdrop-blur-sm rounded-xl p-4 border border-steel-800/40"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                                {review.name.charAt(0).toUpperCase()}
                              </div>
                              <span className="text-white text-sm font-medium">{review.name}</span>
                            </div>
                            <span className="text-steel-600 text-xs">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-0.5 mb-2">
                            {[1, 2, 3, 4, 5].map(s => (
                              <Star key={s} size={12} className={s <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-steel-700'} />
                            ))}
                          </div>
                          {review.comment && (
                            <p className="text-steel-400 text-sm leading-relaxed">{review.comment}</p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Write a Review */}
                  <div className="bg-navy-800/30 backdrop-blur-sm rounded-xl p-5 border border-steel-800/40">
                    <p className="text-steel-300 text-sm font-medium mb-3">Write a Review</p>

                    {/* Star input */}
                    <div className="mb-3">
                      <StarSelector rating={userRating} onRate={setUserRating} />
                    </div>

                    {/* Name */}
                    <input
                      type="text"
                      placeholder="Your name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-900/80 border border-steel-800/60 text-white text-sm placeholder:text-steel-600 focus:outline-none focus:border-accent/40 transition-colors mb-3"
                    />

                    {/* Comment */}
                    <textarea
                      placeholder="Write your review (optional)..."
                      value={userComment}
                      onChange={(e) => setUserComment(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-900/80 border border-steel-800/60 text-white text-sm placeholder:text-steel-600 focus:outline-none focus:border-accent/40 transition-colors resize-none mb-3"
                    />

                    {/* Submit */}
                    <button
                      onClick={handleSubmitReview}
                      disabled={userRating === 0 || !userName.trim()}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                        userRating > 0 && userName.trim()
                          ? 'bg-accent text-white hover:bg-accent/90 hover:shadow-glow'
                          : 'bg-steel-800 text-steel-500 cursor-not-allowed'
                      }`}
                    >
                      <Send size={14} />
                      Submit Review
                    </button>
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
