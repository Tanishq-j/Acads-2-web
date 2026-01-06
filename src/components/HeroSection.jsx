import { Link } from 'react-router-dom';
import { Play, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import clubLogo from '@/assets/ACADSS_circle.png';

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
      className="relative min-h-screen overflow-hidden bg-background flex flex-col items-center justify-center text-center pt-20"
    >
      {/* Background Grid & Elements */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200/50" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-200/50" />

        {/* Animated grid dots (darker for light theme) */}
        <div className="absolute inset-0 opacity-40">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
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
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center gap-8 md:gap-12">

        {/* 1. Stacked Word Animation (Top or Behind) */}
        {/* Moving this to be part of the flow or subtle background text as per "regular" request. 
            However, keeping original "Integrity/And/Excellence" words as floating elements 
            can look good if positioned correctly. Let's position them subtly around the center 
            or keep them as a quiet backdrop. For a clean center layout, let's place them 
            above the logo or interwoven. 
            
            Actually, let's keep them as a distinct intro or surrounding element. 
            User wants "Regular" speed. Let's place them horizontally above the logo? 
            Or keep vertical left but ensuring it doesn't overlap centered content.
            
            Let's simplify: Place "Integrity And Excellence" as a subtitle or header tag?
            User asked to "Redesign".
            Let's put them floating on the layout edges to frame the center content.
        */}
        <div className="hidden lg:block absolute left-[5%] top-1/2 -translate-y-1/2 text-left pointer-events-none opacity-20">
          <h2 className="text-6xl font-bold text-slate-300">Integrity</h2>
          <h2 className="text-6xl font-bold text-slate-300 mt-2">Excellence</h2>
        </div>


        {/* 2. Central Logo Motif */}
        <div className="relative w-[50vmin] max-w-[400px] aspect-square flex items-center justify-center">
          {/* Concentric Circles (Darker borders for visibility) */}
          <div className="absolute inset-0 rounded-full border border-slate-200 bg-slate-50/50" />
          <div className="absolute inset-8 rounded-full border border-slate-200" />
          <div className="absolute inset-16 rounded-full border border-slate-200" />

          <img
            src={clubLogo}
            alt="ACADS Logo"
            className={`relative w-48 md:w-64 object-contain z-20 transition-all duration-[2000ms] ease-out ${animationsReady ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            style={{
              filter: 'drop-shadow(0 10px 20px rgba(8, 176, 215, 0.2))'
            }}
          />
        </div>

        {/* 3. Text Content (Centered Below Logo) */}
        <div className={`flex flex-col items-center gap-6 max-w-3xl transition-all duration-[2000ms] delay-300 ease-out ${animationsReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

