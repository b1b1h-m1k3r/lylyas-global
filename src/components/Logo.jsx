import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light'; // For dark backgrounds

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Golden Lotus SVG Emblem */}
      <div className="relative w-8 h-8 md:w-9 md:h-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Center Petal */}
          <path d="M50 12 C44 32 43 62 50 84 C57 62 56 32 50 12 Z" fill="#C4A882" />
          {/* Inner Left Petal */}
          <path d="M46 30 C33 46 33 66 47 80 C39 70 38 48 46 30 Z" fill="#BFA175" />
          {/* Inner Right Petal */}
          <path d="M54 30 C67 46 67 66 53 80 C61 70 62 48 54 30 Z" fill="#BFA175" />
          {/* Outer Left Petal */}
          <path d="M40 45 C24 55 18 72 38 83 C26 73 28 58 40 45 Z" fill="#A8885F" />
          {/* Outer Right Petal */}
          <path d="M60 45 C76 55 82 72 62 83 C74 73 72 58 60 45 Z" fill="#A8885F" />
          {/* Base Crescent */}
          <path d="M35 84 Q50 88 65 84 Q50 86 35 84 Z" fill="#C4A882" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col tracking-wider">
        <span className={`text-base md:text-lg font-serif font-bold tracking-[0.2em] leading-tight ${isLight ? 'text-white' : 'text-[#1B4332]'}`}>
          LYLYAS
        </span>
        <span className={`text-[9px] md:text-[10px] font-sans font-medium tracking-[0.35em] uppercase leading-none mt-0.5 ${isLight ? 'text-[#C4A882]' : 'text-[#2D6A4F]'}`}>
          GLOBAL
        </span>
      </div>
    </Link>
  );
}
