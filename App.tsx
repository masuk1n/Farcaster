import React, { useState, useCallback } from 'react';
import { AppState, FortuneResponse } from './types';
import { generateFortune } from './services/fortuneService';
import { CookieVisual } from './components/CookieVisual';
import { FortunePaper } from './components/FortunePaper';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [fortune, setFortune] = useState<FortuneResponse | null>(null);

  const handleCrackCookie = useCallback(async () => {
    if (appState === AppState.OPENING) return;

    setAppState(AppState.OPENING);
    
    // Simulate a brief delay for the animation/sound effect feel
    // This provides a satisfying user experience
    const [result] = await Promise.all([
      generateFortune(),
      new Promise(resolve => setTimeout(resolve, 800)) // Min wait time for animation
    ]);

    setFortune(result);
    setAppState(AppState.REVEALED);
  }, [appState]);

  const handleReset = useCallback(() => {
    setAppState(AppState.IDLE);
    setFortune(null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col relative overflow-hidden">
      
      {/* Ambient Background Image (Picsum as placeholder for atmosphere) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
            src="https://picsum.photos/seed/nebula/1000/1000" 
            alt="Background" 
            className="w-full h-full object-cover blur-sm"
        />
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center p-4 w-full max-w-2xl mx-auto">
        
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 to-gold-500 tracking-tight drop-shadow-sm">
            Tiny Fortune
          </h1>
          <p className="text-purple-200 mt-2 text-lg font-light">
            {appState === AppState.IDLE && "Your destiny awaits inside."}
            {appState === AppState.OPENING && "Consulting the spirits..."}
            {appState === AppState.REVEALED && "The universe has spoken."}
          </p>
        </header>

        {/* Dynamic Content Area */}
        <div className="w-full min-h-[300px] flex flex-col items-center justify-center">
          
          {/* State: IDLE or OPENING */}
          {(appState === AppState.IDLE || appState === AppState.OPENING) && (
            <div className={`transition-all duration-500 ${appState === AppState.OPENING ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
              <CookieVisual 
                onClick={handleCrackCookie} 
                isShaking={appState === AppState.OPENING}
                disabled={appState === AppState.OPENING}
              />
              <div className="mt-8 text-center">
                <p className="text-sm uppercase tracking-widest text-gold-700 font-bold opacity-70">
                  {appState === AppState.OPENING ? "Cracking..." : "Tap to Reveal"}
                </p>
              </div>
            </div>
          )}

          {/* State: REVEALED */}
          {appState === AppState.REVEALED && fortune && (
            <FortunePaper fortune={fortune} onReset={handleReset} />
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-4 text-center text-purple-400/50 text-xs">
        <p>Powered by Farcaster</p>
      </footer>

    </div>
  );
};

export default App;