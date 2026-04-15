'use client';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: { height: 32, fontSize: 'text-lg', iconSize: 28 },
    md: { height: 40, fontSize: 'text-xl', iconSize: 34 },
    lg: { height: 48, fontSize: 'text-2xl', iconSize: 40 },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`} style={{ height: s.height }}>
      {/* Icon Mark */}
      <svg
        width={s.iconSize}
        height={s.iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Outer hexagonal shape */}
        <path
          d="M20 2L36 11V29L20 38L4 29V11L20 2Z"
          fill="url(#logoGradient)"
          stroke="url(#logoStroke)"
          strokeWidth="1.5"
        />
        {/* Inner valve/flow symbol */}
        <path
          d="M14 16L20 12L26 16V24L20 28L14 24V16Z"
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Center precision dot */}
        <circle cx="20" cy="20" r="2.5" fill="white" />
        {/* Flow lines */}
        <line x1="10" y1="20" x2="16" y2="20" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" />
        <line x1="24" y1="20" x2="30" y2="20" stroke="rgba(255,255,255,0.5)" strokeWidth="1" strokeLinecap="round" />
        <defs>
          <linearGradient id="logoGradient" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0984e3" />
            <stop offset="100%" stopColor="#0652DD" />
          </linearGradient>
          <linearGradient id="logoStroke" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#74b9ff" />
            <stop offset="100%" stopColor="#0984e3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text Mark */}
      <div className="flex flex-col leading-none">
        <span
          className={`${s.fontSize} font-heading font-bold tracking-tight bg-gradient-to-r from-white via-white to-steel-300 bg-clip-text text-transparent`}
        >
          Preciflow
        </span>
        <span className="text-[0.6rem] font-medium tracking-[0.25em] uppercase text-accent/80 mt-0.5">
          Valves & Fittings
        </span>
      </div>
    </div>
  );
}
