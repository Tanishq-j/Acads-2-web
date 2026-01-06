import { lazy, Suspense, useEffect, useState } from 'react';
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
    // Reveal content immediately or with a slight delay for smooth mounting
    setShowRest(true);
  }, []);

  return (
    <div className="min-h-screen">
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