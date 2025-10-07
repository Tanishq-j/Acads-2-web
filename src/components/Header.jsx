import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import acadssLogo from '../assets/ACADSS.png'; // Adjust path if your assets folder location differs
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
var Header = () => {
  var [isMenuOpen, setIsMenuOpen] = useState(false);
  var [isAboutOpen, setIsAboutOpen] = useState(false);
  var [isScrolled, setIsScrolled] = useState(false);
  var [isBouncing, setIsBouncing] = useState(false);
  var wasScrolled = useRef(false);
  var dropdownCloseTimeout = useRef(null);

  var openAbout = function openAbout() {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current);
      dropdownCloseTimeout.current = null;
    }
    setIsAboutOpen(true);
  };

  var scheduleCloseAbout = function scheduleCloseAbout() {
    if (dropdownCloseTimeout.current) {
      clearTimeout(dropdownCloseTimeout.current);
    }
    dropdownCloseTimeout.current = setTimeout(function () {
      setIsAboutOpen(false);
      dropdownCloseTimeout.current = null;
    }, 180);
  };
  var location = useLocation();
  var isActive = path => location.pathname === path;
  var navItems = [{
    title: 'About',
    hasDropdown: true,
    items: [{
      title: 'Welcome',
      path: '/about'
    }, {
      title: 'Our Mission',
      path: '/mission'
    }, {
      title: 'Why Join ACADS',
      path: '/why-join'
    }]
  }, {
    title: 'Events & Programs',
    path: '/events'
  }, {
    title: 'Our Team',
    path: '/team'
  }, {
    title: 'Sponsors',
    path: '/sponsors'
  }, {
    title: 'Gallery',
    path: '/gallery'
  }, {
    title: 'Contact',
    path: '/contact'
  }];
  useEffect(() => {
    var handleScroll = () => {
      var scrolledNow = window.scrollY > 8;
      if (scrolledNow && !wasScrolled.current) {
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 120);
      }
      wasScrolled.current = scrolledNow;
      setIsScrolled(scrolledNow);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch (e) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  var headerPlacementClass = isScrolled ? "fixed left-0 right-0 ".concat(isBouncing ? 'top-6' : 'top-4') : 'absolute left-0 right-0 top-0';
  // Keep a constant border width to avoid layout shift; transition only color/background
  var headerStyleClass = isScrolled ? 'bg-transparent' : 'bg-transparent';
  return /*#__PURE__*/_jsx("header", {
    className: "".concat(headerPlacementClass, " z-50 transition-all duration-500 ease-in-out ").concat(headerStyleClass),
    children: /*#__PURE__*/_jsxs("div", {
      className: "".concat(isScrolled ? 'mx-auto w-[92%] sm:w-[86%] md:w-[80%] lg:w-[70%]' : 'container mx-auto', " px-4 transition-all duration-500 ease-in-out"),
      children: [/*#__PURE__*/_jsx("div", {
        className: "".concat('border rounded-2xl transition-colors duration-700 ease-in-out', " ").concat(isScrolled ? 'glass-card border-white/20 backdrop-blur-[5px] bg-black/40 shadow-2xl' : 'border-transparent'),
        children: /*#__PURE__*/_jsxs("div", {
          className: "flex items-center justify-between ".concat(isScrolled ? 'h-16 px-4' : 'h-20', " transition-[height,padding] duration-500 ease-in-out"),
          children: [/*#__PURE__*/_jsxs(Link, {
            to: "/",
            className: "flex items-center space-x-2",
            children: [/*#__PURE__*/_jsx("img", {
              src: acadssLogo,
              alt: "ACADS Logo",
              className: "w-12 h-12 object-contain",
              loading: "lazy",
              decoding: "async"
            }), /*#__PURE__*/_jsx("span", {
              className: "text-xl font-bold gradient-text hidden sm:block",
              children: "ACADS"
            })]
          }), /*#__PURE__*/_jsx("nav", {
            className: "hidden lg:flex items-center space-x-8",
            children: navItems.map(item => {
              var _item$items;
              return /*#__PURE__*/_jsx("div", {
                className: "relative",
                children: item.hasDropdown ? /*#__PURE__*/_jsxs("div", {
                  className: "relative",
                  onMouseEnter: openAbout,
                  onMouseLeave: scheduleCloseAbout,
                  children: [/*#__PURE__*/_jsxs("button", {
                    className: "group relative flex items-center space-x-1 text-foreground hover:text-white/90 transition-colors duration-300 ease-in-out",
                    children: [/*#__PURE__*/_jsx("span", {
                      children: item.title
                    }), /*#__PURE__*/_jsx(ChevronDown, {
                      className: "w-4 h-4"
                    }), /*#__PURE__*/_jsx("span", {
                      className: "pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-white/60 transition-all duration-300 ease-in-out group-hover:w-full"
                    })]
                  }), isAboutOpen && /*#__PURE__*/_jsx("div", {
                    className: "absolute top-full left-0 mt-1 w-48 glass-card border border-white/20 rounded-lg py-2 z-50",
                    onMouseEnter: openAbout,
                    onMouseLeave: scheduleCloseAbout,
                    children: (_item$items = item.items) === null || _item$items === void 0 ? void 0 : _item$items.map(subItem => /*#__PURE__*/_jsx(Link, {
                      to: subItem.path,
                      className: "block px-4 py-2 text-sm transition-colors ease-in-out hover:bg-white/10 ".concat(isActive(subItem.path) ? 'text-primary bg-white/5' : 'text-foreground'),
                      children: subItem.title
                    }, subItem.path))
                  })]
                }) : /*#__PURE__*/_jsxs(Link, {
                  to: item.path,
                  className: "group relative text-foreground hover:text-white/90 transition-colors duration-300 ease-in-out ".concat(isActive(item.path) ? 'text-primary' : ''),
                  children: [item.title, /*#__PURE__*/_jsx("span", {
                    className: "pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-white/60 transition-all duration-300 ease-in-out group-hover:w-full"
                  })]
                })
              }, item.title);
            })
          }), /*#__PURE__*/_jsx("button", {
            onClick: () => setIsMenuOpen(!isMenuOpen),
            className: "lg:hidden text-foreground hover:text-white/90 transition-colors duration-300 ease-in-out",
            children: isMenuOpen ? /*#__PURE__*/_jsx(X, {
              className: "w-6 h-6"
            }) : /*#__PURE__*/_jsx(Menu, {
              className: "w-6 h-6"
            })
          })]
        })
      }), isMenuOpen && /*#__PURE__*/_jsx("div", {
        className: "lg:hidden py-4 border-t border-white/10 transition-all duration-500 ease-in-out",
        children: /*#__PURE__*/_jsx("nav", {
          className: "space-y-2",
          children: navItems.map(item => {
            var _item$items2;
            return /*#__PURE__*/_jsx("div", {
              children: item.hasDropdown ? /*#__PURE__*/_jsxs(_Fragment, {
                children: [/*#__PURE__*/_jsxs("button", {
                  onClick: () => setIsAboutOpen(!isAboutOpen),
                  className: "flex items-center justify-between w-full px-4 py-2 text-foreground hover:bg-white/10 rounded-lg transition-colors duration-300 ease-in-out",
                  children: [/*#__PURE__*/_jsx("span", {
                    children: item.title
                  }), /*#__PURE__*/_jsx(ChevronDown, {
                    className: "w-4 h-4 transition-transform duration-300 ".concat(isAboutOpen ? 'rotate-180' : '')
                  })]
                }), isAboutOpen && /*#__PURE__*/_jsx("div", {
                  className: "ml-4 space-y-1",
                  children: (_item$items2 = item.items) === null || _item$items2 === void 0 ? void 0 : _item$items2.map(subItem => /*#__PURE__*/_jsx(Link, {
                    to: subItem.path,
                    onClick: () => setIsMenuOpen(false),
                    className: "block px-4 py-2 text-sm rounded-lg transition-colors duration-300 ease-in-out ".concat(isActive(subItem.path) ? 'text-primary bg-white/5' : 'text-foreground hover:bg-white/10'),
                    children: subItem.title
                  }, subItem.path))
                })]
              }) : /*#__PURE__*/_jsx(Link, {
                to: item.path,
                onClick: () => setIsMenuOpen(false),
                className: "block px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out ".concat(isActive(item.path) ? 'text-primary bg-white/5' : 'text-foreground hover:bg-white/10'),
                children: item.title
              })
            }, item.title);
          })
        })
      })]
    })
  });
};
export default Header;