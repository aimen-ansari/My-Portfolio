import React, { useState, useEffect } from 'react';

const Scroll = ({
  showAfter = 300,
  size = 'md',
  position = 'right',
  offset = 24
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const buttonSizeMap = {
    sm: 48,
    md: 56,
    lg: 64
  };

  const iconSizeMap = {
    sm: 20,
    md: 24,
    lg: 28
  };
  const sizePx = buttonSizeMap[size];
  const iconSize = iconSizeMap[size];
  
  // Progress ring calculations
  const radius = sizePx / 2 - 4;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (circumference * scrollProgress) / 100;
  
  const positionClass = position === 'left' ? 'left-6' : 'right-6';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - winHeight;
      const scrolled = (scrollTop / totalScroll) * 100;
      
      setScrollProgress(Math.min(scrolled, 100));
      setIsVisible(scrollTop > showAfter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter]);

  const handleScrollToTop = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Custom arrow icon component
  const ArrowUpIcon = ({ size }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );

  if (!isVisible) return null;

  return (
    <div
      className={`fixed ${positionClass} z-50 transition-all duration-500 ease-out transform hover:scale-110 active:scale-95`}
      style={{ bottom: `${offset}px` }}
    >
      <div className="relative group" style={{ width: sizePx, height: sizePx }}>
        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
        
        {/* Progress ring */}
        <svg
          className="absolute inset-0 -rotate-90 drop-shadow-sm pointer-events-none"
          width={sizePx}
          height={sizePx}
          viewBox={`0 0 ${sizePx} ${sizePx}`}
        >
          {/* Background circle */}
          <circle
            cx={sizePx / 2}
            cy={sizePx / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth={strokeWidth}
          />

          {/* Progress circle */}
          <circle
            cx={sizePx / 2}
            cy={sizePx / 2}
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            className="transition-all duration-300 ease-out"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Main button */}
        <button
          onClick={handleScrollToTop}
          className="relative z-20 w-full h-full flex items-center justify-center rounded-full bg-white/95 backdrop-blur-sm text-gray-700 shadow-xl border border-white/50 transition-all duration-300 ease-out hover:bg-white hover:text-gray-900 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 active:transform active:scale-95"
          aria-label="Scroll to top"
        >
          <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
            <ArrowUpIcon size={iconSize} />
          </div>
          
          {/* Inner shine effect */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </button>

        {/* Ripple effect on click */}
        <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 animate-ping group-active:opacity-30 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Scroll;
