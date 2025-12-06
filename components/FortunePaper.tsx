import React from 'react';
import { FortuneResponse } from '../types';

interface FortunePaperProps {
  fortune: FortuneResponse;
  onReset: () => void;
}

export const FortunePaper: React.FC<FortunePaperProps> = ({ fortune, onReset }) => {
  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      <div className="bg-white text-gray-800 p-1 shadow-lg transform rotate-1 transition-transform hover:rotate-0 duration-300">
        {/* The Paper Strip Design */}
        <div className="border-2 border-red-800 p-6 flex flex-col items-center justify-center min-h-[160px] relative bg-white">
            
            {/* Decorative corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-800"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-800"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-800"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-800"></div>

            <p className="text-xl md:text-2xl font-serif text-center font-bold text-gray-900 mb-4 leading-relaxed">
              "{fortune.text}"
            </p>

            {fortune.luckyNumbers && (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="text-xs font-bold text-red-700 uppercase tracking-widest mr-2">Lucky Numbers:</span>
                {fortune.luckyNumbers.map((num) => (
                  <span key={num} className="bg-red-100 text-red-800 text-xs font-mono font-bold px-2 py-1 rounded-full">
                    {num}
                  </span>
                ))}
              </div>
            )}
        </div>
      </div>

      <div className="mt-8 text-center animate-slide-up">
        <button
          onClick={onReset}
          className="bg-gold-500 hover:bg-gold-400 text-red-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95 ring-2 ring-gold-700 ring-offset-2 ring-offset-gray-900"
        >
          Open Another Cookie
        </button>
      </div>
    </div>
  );
};