import { lazy, Suspense, useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import HeroSection from '@/components/HeroSection';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// Code-split below-the-fold sections
const WelcomeSection = lazy(() => import('@/components/WelcomeSection'));
const EventsSection = lazy(() => import('@/components/EventsSection'));
const NewsSection = lazy(() => import('@/components/NewsSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const SponsorsSection = lazy(() => import('@/components/SponsorsSection'));

const Index = () => {
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const reveal = () => setShowRest(true);
    // Reveal after preloader completes or after idle fallback
    const onPreloaderComplete = () => reveal();
    window.addEventListener('preloaderComplete', onPreloaderComplete);
    const idleId = window.requestIdleCallback ? window.requestIdleCallback(reveal, { timeout: 2000 }) : setTimeout(reveal, 1200);
    return () => {
      window.removeEventListener('preloaderComplete', onPreloaderComplete);
      if (window.cancelIdleCallback && typeof idleId === 'number') window.cancelIdleCallback(idleId);
      if (typeof idleId === 'number') clearTimeout(idleId);
    };
  }, []);

  const [showSplash, setShowSplash] = useState(() => {
    try {
      const nav = performance.getEntriesByType('navigation')[0];
      const isReload = nav && nav.type === 'reload';
      const hasShown = sessionStorage.getItem('splashShown') === 'true';
      return isReload || !hasShown;
    } catch (_) {
      return sessionStorage.getItem('splashShown') !== 'true';
    }
  });

  // Once preloader completes, never show again in this tab
  useEffect(() => {
    const onPreloaderComplete = () => setShowSplash(false);
    window.addEventListener('preloaderComplete', onPreloaderComplete);
    return () => window.removeEventListener('preloaderComplete', onPreloaderComplete);
  }, []);

  return (
    <div className="min-h-screen">
      {showSplash && <SplashScreen />}
      <HeroSection />
      {showRest && (
        <Suspense fallback={null}>
          <WelcomeSection />
          <EventsSection />
          <NewsSection />
          <ContactSection />
          <SponsorsSection />
        </Suspense>
      )}
    </div>
  );
};

export default Index;