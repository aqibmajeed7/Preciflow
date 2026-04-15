'use client';

import { useMemo } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  productId: string;
  size?: number;
  showCount?: boolean;
}

// Generate consistent but varied ratings per product using a simple hash
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

export default function StarRating({ productId, size = 14, showCount = true }: StarRatingProps) {
  const { rating, count } = useMemo(() => {
    const hash = hashString(productId);
    // Generate rating between 3.8 and 5.0
    const r = 3.8 + (hash % 13) / 10;
    // Generate review count between 12 and 248
    const c = 12 + (hash % 237);
    return { rating: Math.round(r * 10) / 10, count: c };
  }, [productId]);

  const fullStars = Math.floor(rating);
  const partialFill = (rating - fullStars) * 100;
  const emptyStars = 5 - fullStars - (partialFill > 0 ? 1 : 0);

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            size={size}
            className="text-amber-400 fill-amber-400"
          />
        ))}

        {/* Partial star */}
        {partialFill > 0 && (
          <div className="relative">
            <Star size={size} className="text-steel-600" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${partialFill}%` }}
            >
              <Star size={size} className="text-amber-400 fill-amber-400" />
            </div>
          </div>
        )}

        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            size={size}
            className="text-steel-600"
          />
        ))}
      </div>

      <span className="text-amber-400 font-semibold text-xs ml-0.5">{rating}</span>

      {showCount && (
        <span className="text-steel-500 text-xs">({count})</span>
      )}
    </div>
  );
}
