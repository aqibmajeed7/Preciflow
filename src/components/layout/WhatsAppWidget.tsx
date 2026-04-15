'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappNumber = '917021193600';
  const message = encodeURIComponent(
    'Hello Preciflow! I am interested in your products. Could you please share more details?'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative glass-card px-4 py-3 max-w-[200px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-steel-800 border border-steel-700 flex items-center justify-center text-steel-400 hover:text-white transition-colors"
            >
              <X size={10} />
            </button>
            <p className="text-xs text-steel-200 leading-relaxed">
              Need help? Chat with us on <span className="text-green-400 font-medium">WhatsApp</span>!
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 rotate-45 bg-navy-800/60 border-r border-b border-accent/15" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative"
        onMouseEnter={() => setShowTooltip(false)}
      >
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        <div className="absolute -inset-1 rounded-full bg-green-500/20 animate-pulse" />

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-shadow duration-300"
        >
          <MessageCircle size={26} className="text-white" fill="white" />
        </motion.div>
      </a>
    </div>
  );
}
