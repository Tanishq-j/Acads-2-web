import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Handshake, Trophy, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var SponsorsPage = () => {
  var [currentSlide, setCurrentSlide] = useState(0);

  // Extended sponsor data
  var sponsors = [{
    name: 'Tech Corp',
    logo: '/api/placeholder/150/80',
    description: 'Leading technology solutions provider'
  }, {
    name: 'Innovation Labs',
    logo: '/api/placeholder/150/80',
    description: 'Research and development company'
  }, {
    name: 'Digital Solutions',
    logo: '/api/placeholder/150/80',
    description: 'Digital transformation experts'
  }, {
    name: 'Future Tech',
    logo: '/api/placeholder/150/80',
    description: 'Emerging technology pioneers'
  }, {
    name: 'Smart Systems',
    logo: '/api/placeholder/150/80',
    description: 'Intelligent automation solutions'
  }, {
    name: 'Code Masters',
    logo: '/api/placeholder/150/80',
    description: 'Software development company'
  }, {
    name: 'Tech Leaders',
    logo: '/api/placeholder/150/80',
    description: 'Technology consulting firm'
  }, {
    name: 'Innovation Hub',
    logo: '/api/placeholder/150/80',
    description: 'Startup incubation center'
  }, {
    name: 'Digital Pioneers',
    logo: '/api/placeholder/150/80',
    description: 'Digital marketing agency'
  }, {
    name: 'Future Labs',
    logo: '/api/placeholder/150/80',
    description: 'Advanced research institute'
  }];

  // Split sponsors into slides
  var slide1 = sponsors.slice(0, 5);
  var slide2 = sponsors.slice(5, 10);
  var slides = [slide1, slide2];
  var benefits = [{
    icon: Trophy,
    title: 'Brand Visibility',
    description: 'Showcase your brand to 500+ tech-savvy students and faculty members'
  }, {
    icon: Star,
    title: 'Talent Pipeline',
    description: 'Connect with top students for internships and full-time opportunities'
  }, {
    icon: Handshake,
    title: 'Community Impact',
    description: 'Support education and contribute to the next generation of tech leaders'
  }, {
    icon: Heart,
    title: 'CSR Goals',
    description: 'Align with your corporate social responsibility objectives'
  }];
  var sponsorshipTiers = [{
    title: 'Title Sponsor',
    amount: '₹1,00,000+',
    benefits: ['Event naming rights', 'Logo on all marketing materials', 'Speaking opportunity', 'Dedicated booth space', 'Social media promotion']
  }, {
    title: 'Gold Sponsor',
    amount: '₹50,000+',
    benefits: ['Logo on event materials', 'Booth space', 'Social media mentions', 'Newsletter inclusion', 'Certificate of appreciation']
  }, {
    title: 'Silver Sponsor',
    amount: '₹25,000+',
    benefits: ['Logo on website', 'Social media mentions', 'Event program listing', 'Certificate of appreciation']
  }];
  var nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  var prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    var interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);
  return /*#__PURE__*/_jsxs("div", {
    className: "min-h-screen pt-20",
    children: [/*#__PURE__*/_jsx("section", {
      className: "py-20 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/_jsxs("div", {
          className: "max-w-4xl mx-auto text-center",
          children: [/*#__PURE__*/_jsx("h1", {
            className: "text-5xl md:text-6xl font-bold gradient-text mb-6",
            children: "Our Sponsors"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-xl text-muted-foreground mb-8 leading-relaxed",
            children: "Partnering with industry leaders to create exceptional opportunities for our students"
          })]
        })
      })
    }), /*#__PURE__*/_jsx("section", {
      className: "py-16 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/_jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-4xl font-bold text-center mb-12",
            children: "Our Valued Partners"
          }), /*#__PURE__*/_jsxs("div", {
            className: "relative",
            children: [/*#__PURE__*/_jsx("button", {
              onClick: prevSlide,
              className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 glass-card p-3 hover:bg-white/20 transition-all",
              "aria-label": "Previous slide",
              children: /*#__PURE__*/_jsx(ChevronLeft, {
                className: "w-6 h-6"
              })
            }), /*#__PURE__*/_jsx("button", {
              onClick: nextSlide,
              className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 glass-card p-3 hover:bg-white/20 transition-all",
              "aria-label": "Next slide",
              children: /*#__PURE__*/_jsx(ChevronRight, {
                className: "w-6 h-6"
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "overflow-hidden rounded-2xl",
              children: /*#__PURE__*/_jsx("div", {
                className: "flex transition-transform duration-500 ease-in-out",
                style: {
                  transform: "translateX(-".concat(currentSlide * 100, "%)")
                },
                children: slides.map((slide, slideIndex) => /*#__PURE__*/_jsx("div", {
                  className: "w-full flex-shrink-0",
                  children: /*#__PURE__*/_jsx("div", {
                    className: "glass-card p-8",
                    children: /*#__PURE__*/_jsx("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8",
                      children: slide.map((sponsor, index) => /*#__PURE__*/_jsxs("div", {
                        className: "flex flex-col items-center p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-center",
                        children: [/*#__PURE__*/_jsx("img", {
                          src: sponsor.logo,
                          alt: sponsor.name,
                          className: "max-w-full max-h-16 object-contain filter brightness-90 hover:brightness-100 transition-all mb-4"
                        }), /*#__PURE__*/_jsx("h3", {
                          className: "font-semibold mb-2",
                          children: sponsor.name
                        }), /*#__PURE__*/_jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: sponsor.description
                        })]
                      }, index))
                    })
                  })
                }, slideIndex))
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "flex justify-center mt-6 space-x-2",
              children: slides.map((_, index) => /*#__PURE__*/_jsx("button", {
                onClick: () => setCurrentSlide(index),
                className: "w-3 h-3 rounded-full transition-all ".concat(index === currentSlide ? 'bg-primary' : 'bg-white/30'),
                "aria-label": "Go to slide ".concat(index + 1)
              }, index))
            })]
          })]
        })
      })
    }), /*#__PURE__*/_jsx("section", {
      className: "py-16 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/_jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-4xl font-bold text-center mb-12",
            children: "Why Partner With ACADS?"
          }), /*#__PURE__*/_jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: benefits.map((benefit, index) => /*#__PURE__*/_jsxs("div", {
              className: "glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all",
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4",
                children: /*#__PURE__*/_jsx(benefit.icon, {
                  className: "w-8 h-8 text-white"
                })
              }), /*#__PURE__*/_jsx("h3", {
                className: "text-xl font-bold mb-3",
                children: benefit.title
              }), /*#__PURE__*/_jsx("p", {
                className: "text-muted-foreground",
                children: benefit.description
              })]
            }, index))
          })]
        })
      })
    }), /*#__PURE__*/_jsx("section", {
      className: "py-16 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/_jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-4xl font-bold text-center mb-12",
            children: "Sponsorship Opportunities"
          }), /*#__PURE__*/_jsx("div", {
            className: "grid md:grid-cols-3 gap-8",
            children: sponsorshipTiers.map((tier, index) => /*#__PURE__*/_jsxs("div", {
              className: "glass-card p-8 rounded-2xl hover:scale-105 transition-all",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "text-center mb-6",
                children: [/*#__PURE__*/_jsx("h3", {
                  className: "text-2xl font-bold mb-2",
                  children: tier.title
                }), /*#__PURE__*/_jsx("p", {
                  className: "text-3xl font-bold text-primary",
                  children: tier.amount
                })]
              }), /*#__PURE__*/_jsx("ul", {
                className: "space-y-3",
                children: tier.benefits.map((benefit, benefitIndex) => /*#__PURE__*/_jsxs("li", {
                  className: "flex items-center",
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"
                  }), /*#__PURE__*/_jsx("span", {
                    className: "text-sm",
                    children: benefit
                  })]
                }, benefitIndex))
              })]
            }, index))
          })]
        })
      })
    }), /*#__PURE__*/_jsx("section", {
      className: "py-16 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/_jsxs("div", {
          className: "max-w-4xl mx-auto text-center glass-card p-8 rounded-2xl",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-3xl font-bold mb-4",
            children: "Become Our Partner"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-muted-foreground mb-6",
            children: "Join hands with ACADS to create meaningful impact in tech education and connect with the next generation of innovators."
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex flex-col sm:flex-row gap-4 justify-center",
            children: [/*#__PURE__*/_jsx(Button, {
              className: "glass-button",
              children: "View Sponsorship Proposal"
            }), /*#__PURE__*/_jsx(Button, {
              variant: "outline",
              className: "border-primary/30 hover:bg-primary/10",
              children: "Contact Partnership Team"
            })]
          })]
        })
      })
    }), /*#__PURE__*/_jsx("section", {
      className: "py-16 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/_jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-4xl font-bold text-center mb-12",
            children: "Our Impact"
          }), /*#__PURE__*/_jsxs("div", {
            className: "grid md:grid-cols-4 gap-8",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "text-center glass-card p-6 rounded-2xl",
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-4xl font-bold text-primary mb-2",
                children: "500+"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-muted-foreground",
                children: "Students Reached"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "text-center glass-card p-6 rounded-2xl",
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-4xl font-bold text-primary mb-2",
                children: "50+"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-muted-foreground",
                children: "Events Organized"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "text-center glass-card p-6 rounded-2xl",
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-4xl font-bold text-primary mb-2",
                children: "20+"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-muted-foreground",
                children: "Industry Partners"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "text-center glass-card p-6 rounded-2xl",
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-4xl font-bold text-primary mb-2",
                children: "100+"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-muted-foreground",
                children: "Placed Students"
              })]
            })]
          })]
        })
      })
    })]
  });
};
export default SponsorsPage;