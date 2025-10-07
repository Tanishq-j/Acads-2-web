import { Link } from 'react-router-dom';
import { Play, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import clubLogo from '@/assets/ACADSSs.png';

const HeroSection = () => {
  const [animationsReady, setAnimationsReady] = useState(false);

  useEffect(() => {
    // Listen for preloader completion
    const handlePreloaderComplete = () => {
      // Start immediately as overlay is removed
      setAnimationsReady(true);
    };

    // Check if preloader is already complete
    if (document.body.classList.contains('preloader-complete')) {
      setAnimationsReady(true);
    }
    window.addEventListener('preloaderComplete', handlePreloaderComplete);

    return () => {
      window.removeEventListener('preloaderComplete', handlePreloaderComplete);
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background/95 to-background"
    >
      {/* Cross grid like original with enhanced animations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-white/15" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/15" />
        
        {/* Animated grid dots */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Vertical words stack: Integrity, And, Excellence */}
      <div
        className="absolute left-[6vw] top-1/2 -translate-y-1/2 select-none z-30"
        style={{ visibility: animationsReady ? 'visible' : 'hidden' }}
      >
        <div className={`transition-all duration-900 ease-out ${animationsReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
          <h2 className="font-extrabold leading-none tracking-tight text-foreground/90 hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(15px, 6vw, 80px)' }}>
            Integrity
          </h2>
        </div>
        <div className={`mt-3 transition-all duration-900 ease-out ${animationsReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
          <h2 className="font-extrabold leading-none tracking-tight text-foreground/90 hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(15px, 6vw, 80px)' }}>
            And
          </h2>
        </div>
        <div className={`mt-3 transition-all duration-900 ease-out ${animationsReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
          <h2 className="font-extrabold leading-none tracking-tight text-foreground/90 hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(15px, 6vw, 80px)' }}>
            Excellence
          </h2>
        </div>
      </div>

      {/* Center motif with enhanced animations */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[60vmin] max-w-[560px] aspect-square">
          <div className="absolute inset-0 rounded-full border border-white/12 bg-white/[0.03] z-10" />
          <div className="absolute inset-6 rounded-full border border-white/10 z-10" />
          <div className="absolute inset-12 rounded-full border border-white/10 z-10" />
          <div className="absolute inset-20 rounded-full border border-white/10 z-10" />
          <div className="absolute inset-28 rounded-full border border-white/10 z-10" />


          {/* Removed mid floating word (And) since stacked on left */}

          {/* Logo with enhanced reveal animation - start slightly earlier */}
          <img
            src={clubLogo}
            alt="ACADS Logo"
            loading="eager"
            decoding="sync"
            fetchpriority="high"
            className={`absolute inset-0 m-auto w-44 md:w-72 object-contain z-20 pointer-events-none transition-all duration-1000 ease-out ${animationsReady ? 'opacity-50 scale-100' : 'opacity-0 scale-75'}`}
            style={{ 
              filter: 'drop-shadow(0 0 22px hsla(var(--primary),0.3))',
              visibility: animationsReady ? 'visible' : 'hidden'
            }}
          />
        </div>
      </div>

      {/* Right-bottom information panel with slide-up animation */}
      <div 
        className={`absolute z-40 border-t border-l border-white/12 bg-[hsl(var(--card))]/92 backdrop-blur-md shadow-[0_-10px_40px_rgba(0,0,0,0.35)] transition-transform transition-opacity duration-1100 ease-out ${animationsReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        style={{ 
          left: 'calc(50vw - 8px)', 
          right: 0, 
          top: '50vh', 
          height: '50vh',
          visibility: animationsReady ? 'visible' : 'hidden'
        }}
      >
        <div className="relative h-full px-6 py-7 md:px-10 md:py-10">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-foreground hover:text-primary transition-colors duration-500">
          Association of CSE (AIML & DS) Students.
          </h1>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-3xl hover:text-foreground transition-colors duration-500">
          
          Empowering students with real-world AI and DS experience through hackathons, competitions, and collaborations inspiring innovation and excellence.
          </p>
          <ul className="mt-6 space-y-3 text-foreground/95">
            <li className="flex items-start gap-3 group hover:text-primary transition-colors duration-300">
              <span className="mt-2 h-2 w-2 rounded-sm bg-foreground/90 group-hover:bg-primary transition-colors duration-300" /> 
              Build real-world AI projects
            </li>
            <li className="flex items-start gap-3 group hover:text-primary transition-colors duration-300">
              <span className="mt-2 h-2 w-2 rounded-sm bg-foreground/90 group-hover:bg-primary transition-colors duration-300" /> 
              Learn industry-relevant skills
            </li>
            <li className="flex items-start gap-3 group hover:text-primary transition-colors duration-300">
              <span className="mt-2 h-2 w-2 rounded-sm bg-foreground/90 group-hover:bg-primary transition-colors duration-300" /> 
              Collaborate, innovate, and grow
            </li>
          </ul>
          {/* Buttons with enhanced hover effects */}
          <div className="absolute right-6 md:right-10 bottom-6 md:bottom-8 flex gap-4">
            <Link 
              to="/gallery" 
              className="glass-button inline-flex items-center gap-2 px-5 py-3 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
            >
              <Play className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" /> 
              Watch a video
            </Link>
            <Link 
              to="/events" 
              className="glass-button inline-flex items-center gap-2 px-5 py-3 hover:scale-105 hover:shadow-lg transition-all duration-300 group"
            >
              <Calendar className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" /> 
              See events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
