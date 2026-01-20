import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import acadssLogo from '../assets/ACADSS_circle.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const wasScrolled = useRef(false);
  const dropdownCloseTimeout = useRef(null);

  const openAbout = () => {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current);
      dropdownCloseTimeout.current = null;
    }
    setIsAboutOpen(true);
  };

  const scheduleCloseAbout = () => {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current);
    }
    dropdownCloseTimeout.current = setTimeout(() => {
      setIsAboutOpen(false);
      dropdownCloseTimeout.current = null;
    }, 180);
  };

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navItems = [
    {
      title: 'About',
      hasDropdown: true,
      items: [
        { title: 'Welcome', path: '/about' },
        { title: 'Our Mission', path: '/mission' },
        { title: 'Why Join ACADS', path: '/why-join' }
      ]
    },
    { title: 'Events & Programs', path: '/events' },
    { title: 'Our Team', path: '/team' },
    { title: 'Sponsors', path: '/sponsors' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolledNow = window.scrollY > 8;
      if (scrolledNow && !wasScrolled.current) {
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 120);
      }
      wasScrolled.current = scrolledNow;
      setIsScrolled(scrolledNow);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const headerPlacementClass = isScrolled
    ? `fixed left-0 right-0 ${isBouncing ? 'top-6' : 'top-4'}`
    : 'absolute left-0 right-0 top-0';

  const headerStyleClass = 'bg-transparent';

  return (
    <header className={`${headerPlacementClass} z-50 transition-all duration-500 ease-in-out ${headerStyleClass}`}>
      <div className={`${isScrolled ? 'mx-auto w-[92%] sm:w-[86%] md:w-[80%] lg:w-[70%]' : 'container mx-auto'} px-4 transition-all duration-500 ease-in-out`}>
        <div className={`border rounded-2xl transition-colors duration-700 ease-in-out ${isScrolled ? 'glass-card border-slate-200/60 backdrop-blur-[6px] bg-white/90 shadow-2xl' : 'border-transparent'}`}>
          <div className={`flex items-center justify-between ${isScrolled ? 'h-16 px-4' : 'h-20'} transition-[height,padding] duration-500 ease-in-out`}>

            <Link to="/" className="flex items-center space-x-2">
              <img
                src={acadssLogo}
                alt="ACADS Logo"
                className="w-12 h-12 object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="text-xl font-bold gradient-text hidden sm:block">ACADS</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.title} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={openAbout}
                      onMouseLeave={scheduleCloseAbout}
                    >
                      <button className="group relative flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300 ease-in-out">
                        <span>{item.title}</span>
                        <ChevronDown className="w-4 h-4" />
                        <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-primary/60 transition-all duration-300 ease-in-out group-hover:w-full" />
                      </button>

                      {isAboutOpen && (
                        <div
                          className="absolute top-full left-0 mt-1 w-48 glass-card border border-slate-200/50 rounded-lg py-2 z-50"
                          onMouseEnter={openAbout}
                          onMouseLeave={scheduleCloseAbout}
                        >
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`block px-4 py-2 text-sm transition-colors ease-in-out hover:bg-slate-100 ${isActive(subItem.path) ? 'text-primary bg-slate-50' : 'text-foreground'}`}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`group relative text-foreground hover:text-primary transition-colors duration-300 ease-in-out ${isActive(item.path) ? 'text-primary' : ''}`}
                    >
                      {item.title}
                      <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-primary/60 transition-all duration-300 ease-in-out group-hover:w-full" />
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-foreground hover:text-primary transition-colors duration-300 ease-in-out"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 transition-all duration-500 ease-in-out glass-card mt-2">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                        className="flex items-center justify-between w-full px-4 py-2 text-foreground hover:bg-slate-100 rounded-lg transition-colors duration-300 ease-in-out"
                      >
                        <span>{item.title}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isAboutOpen && (
                        <div className="ml-4 space-y-1">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-300 ease-in-out ${isActive(subItem.path) ? 'text-primary bg-white/5' : 'text-foreground hover:bg-white/10'}`}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ${isActive(item.path) ? 'text-primary bg-white/5' : 'text-foreground hover:bg-white/10'}`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;