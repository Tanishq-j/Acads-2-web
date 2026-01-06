import { Link } from 'react-router-dom';
import { Play, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import clubLogo from '@/assets/ACADSS_circle.png';

const HeroSection = () => {
  const [animationsReady, setAnimationsReady] = useState(false);

  useEffect(() => {
    // Start animations shortly after mount since preloader is removed
    const timer = setTimeout(() => {
      setAnimationsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-background flex flex-col items-center justify-center text-center pt-20"
    >
      {/* Background Grid & Elements */}
      <div className="pointer-events-none absolute inset-0 select-none">
        {/* Animated grid dots (Darker as requested) */}
        <div className="absolute inset-0 opacity-60">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/80 rounded-full animate-float"
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

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center gap-8 md:gap-12">

        {/* 1. Tagline: Integrity And Excellence (Slide in from Left) */}
        <div
          className={`hidden lg:block absolute top-[30%] -translate-y-1/2 text-left pointer-events-none select-none transition-all ${animationsReady ? 'left-10 opacity-100' : '-left-20 opacity-0'}`}
          style={{ transitionDuration: '6000ms', transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
        >
          <h2 className="text-7xl font-bold text-slate-700/80">Integrity</h2>
          <h2 className="text-5xl font-bold text-primary/80 ml-1 my-1">AND</h2>
          <h2 className="text-7xl font-bold text-slate-700/80">Excellence</h2>
        </div>

        {/* 2. Central Logo Motif (Pushed right with transform) */}
        <div
          className={`relative w-[50vmin] max-w-[400px] aspect-square flex items-center justify-center mt-12 lg:translate-x-80 transition-all ${animationsReady ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          style={{ transitionDuration: '6000ms', transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
        >
          {/* Concentric Circles */}
          <div className="absolute inset-0 rounded-full border border-slate-200 bg-slate-50/50" />
          <div className="absolute inset-8 rounded-full border border-slate-200" />
          <div className="absolute inset-16 rounded-full border border-slate-200" />

          <img
            src={clubLogo}
            alt="ACADS Logo"
            className="relative w-48 md:w-64 object-contain z-20"
            style={{
              filter: 'drop-shadow(0 10px 20px rgba(8, 176, 215, 0.2))'
            }}
          />
        </div>

        {/* 3. Text Content (Centered - No Padding) */}
        <div
          className={`flex flex-col items-center gap-6 max-w-3xl transition-all delay-300 ${animationsReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDuration: '6000ms', transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Association of CSE <br className="hidden md:block" />
            <span className="gradient-text">(AIML & DS)</span> Students
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Empowering students with real-world AI and DS experience through hackathons, competitions, and collaborations.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              to="/gallery"
              className="glass-button flex items-center gap-2 group"
            >
              <Play className="h-5 w-5 fill-current" />
              Watch Video
            </Link>
            <Link
              to="/events"
              className="px-6 py-3 rounded-xl border-2 border-slate-200 font-semibold text-slate-700 hover:border-primary hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Upcoming Events
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
