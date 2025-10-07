import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import logoVideo from '@/assets/Logo Animate Horizontal.mp4';

const SplashScreen = () => {
  // Decide when to show: first visit in this tab OR a full reload; not on internal nav
  const shouldShowSplash = (() => {
    try {
      const nav = performance.getEntriesByType('navigation')[0];
      const isReload = nav && nav.type === 'reload';
      const hasShown = sessionStorage.getItem('splashShown') === 'true';
      return (isReload || !hasShown) && !window.__splashShownOnce;
    } catch (_) {
      return !window.__splashShownOnce;
    }
  })();

  const [show, setShow] = useState(shouldShowSplash);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!show) {
      // If we are not showing the splash, immediately signal completion
      document.body.classList.add('preloader-complete');
      window.dispatchEvent(new CustomEvent('preloaderComplete'));
      return;
    }
    if (!video) return;

    const handleVideoEnd = () => {
      setVideoEnded(true);
      // Start fade + scale transition after a brief pause
      setTimeout(() => {
        setIsTransitioning(true);
        // Mark as complete and then remove overlay right when fade ends
        setTimeout(() => {
          setIsComplete(true);
          // Align with 1.2s fade: fire a bit before overlay removal to reduce gap
          setTimeout(() => {
            window.dispatchEvent(new CustomEvent('preloaderComplete'));
            setTimeout(() => {
              setShow(false);
              try { sessionStorage.setItem('splashShown', 'true'); } catch (_) {}
              try { window.__splashShownOnce = true; } catch (_) {}
            }, 100); // overlay removed 100ms after animations start
          }, 300);
        }, 800);
      }, 600);
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  // Mark body state when preloader completes (class used by listeners)
  useEffect(() => {
    if (isComplete) {
      document.body.classList.add('preloader-complete');
    }
  }, [isComplete]);

  if (!show) return null;

  const overlay = (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        zIndex: 99999,
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        transition: isTransitioning ? "opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? "scale(1.1)" : "scale(1)"
      }}
    >
      {/* Video Container */}
      <div 
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        style={{
          transform: isTransitioning ? "scale(0.95)" : "scale(1)",
          transition: isTransitioning ? "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
          transformOrigin: "center center"
        }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          style={{
            filter: videoEnded ? "brightness(1.1) contrast(1.05)" : "none",
            transition: videoEnded ? "filter 0.6s ease-out" : "none"
          }}
        >
          <source src={logoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Smooth fade transition overlay */}
        {isTransitioning && (
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(10,10,10,0.4) 0%, rgba(26,26,46,0.7) 50%, rgba(22,33,62,0.95) 100%)",
              animation: "fadeInScale 1.2s ease-out both"
            }}
          />
        )}
      </div>

      {/* Loading indicator */}
      {!videoEnded && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2 text-white/60">
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      )}
    </div>
  );

  return createPortal(overlay, document.body);
};

export default SplashScreen;
