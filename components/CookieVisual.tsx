import React from 'react';

interface CookieVisualProps {
  onClick: () => void;
  isShaking: boolean;
  disabled: boolean;
}

export const CookieVisual: React.FC<CookieVisualProps> = ({ onClick, isShaking, disabled }) => {
  return (
    <div className="relative flex justify-center items-center py-10">
      <button 
        onClick={onClick}
        disabled={disabled}
        className={`
          relative group transition-transform duration-300 transform hover:scale-105 active:scale-95
          ${isShaking ? 'animate-shake' : ''}
          ${disabled ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}
        `}
      >
        {/* Simplified CSS/SVG Fortune Cookie Representation */}
        <div className="w-48 h-48 relative drop-shadow-2xl filter">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Cookie Base */}
                <path d="M100 160C140 160 170 130 180 100C190 70 160 40 100 40C40 40 10 70 20 100C30 130 60 160 100 160Z" fill="#FBC02D"/>
                <path d="M100 160C60 160 30 130 20 100C10 70 40 40 100 40" fill="#F57F17"/>
                {/* Fold/Crease */}
                <path d="M20 100C30 110 50 120 100 120C150 120 170 110 180 100" stroke="#F57F17" strokeWidth="4" strokeLinecap="round"/>
                {/* Highlights */}
                <path d="M60 60C70 50 90 45 110 45" stroke="#FFF9C4" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.6"/>
            </svg>
            
            {!disabled && (
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">Tap to Open</span>
                 </div>
            )}
        </div>
      </button>
    </div>
  );
};