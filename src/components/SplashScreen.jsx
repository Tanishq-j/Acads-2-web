import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import logoImage from '@/assets/ACADSS_circle.png';

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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!show) {
      document.body.classList.add('preloader-complete');
      window.dispatchEvent(new CustomEvent('preloaderComplete'));
      return;
    }

    // Show logo for a fixed duration, then fade out
    const timer = setTimeout(() => {
      setIsTransitioning(true);

      // Mark as complete shortly after transition starts
      setTimeout(() => {
        setIsComplete(true);
        window.dispatchEvent(new CustomEvent('preloaderComplete'));

        // Remove from DOM after transition matches CSS duration
        setTimeout(() => {
          setShow(false);
          try { sessionStorage.setItem('splashShown', 'true'); } catch (_) { }
          try { window.__splashShownOnce = true; } catch (_) { }
        }, 1200);
      }, 800);
    }, 2000); // Show logo for 2 seconds

    return () => clearTimeout(timer);
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
        background: "#FFFFFF", // Clean white background for light theme
        transition: isTransitioning ? "opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
        opacity: isTransitioning ? 0 : 1,
      }}
    >
      <div
        className="relative flex flex-col items-center justify-center p-8"
        style={{
          transform: isTransitioning ? "scale(1.1)" : "scale(1)",
          transition: isTransitioning ? "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
        }}
      >
        <img
          src={logoImage}
          alt="ACADS Logo"
          className="w-48 h-48 md:w-64 md:h-64 object-contain animate-pulse-glow"
          style={{
            filter: "drop-shadow(0 0 20px rgba(8, 176, 215, 0.3))"
          }}
        />
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
};

export default SplashScreen;
