function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Gallery = () => {
  var [selectedImage, setSelectedImage] = useState(null);
  var galleryCategories = [{
    title: 'Technical Workshops',
    images: [{
      src: '/api/placeholder/400/300',
      caption: 'AI/ML Workshop 2024',
      event: 'Machine Learning Bootcamp',
      date: 'March 2024'
    }, {
      src: '/api/placeholder/400/300',
      caption: 'Coding Competition',
      event: 'HackCode 2024',
      date: 'February 2024'
    }, {
      src: '/api/placeholder/400/300',
      caption: 'Web Development Session',
      event: 'Full Stack Workshop',
      date: 'January 2024'
    }, {
      src: '/api/placeholder/400/300',
      caption: 'Data Science Workshop',
      event: 'Python for Data Science',
      date: 'December 2023'
    }]
  }, {
    title: 'Events & Programs',
    images: [{
      src: '/api/placeholder/400/300',
      caption: 'Tech Fest 2024',
      event: 'Annual Technical Festival',
      date: 'March 2024'
    }, {
      src: '/api/placeholder/400/300',
      caption: 'Industry Visit',
      event: 'Tech Company Tour',
      date: 'February 2024'
    }, {
      src: '/api/placeholder/400/300',
      caption: 'Guest Lecture',
      event: 'Industry Expert Session',
      date: 'January 2024'
    }, {
      src: '/api/placeholder/400/300',
      caption: 'Team Building',
      event: 'ACADS Retreat',
      date: 'December 2023'
    }]
  }, {
    title: 'Achievements',
    images: [{
      src: '/api/placeholder/400/300',
      caption: 'SIH Winners',
      event: 'Smart India Hackathon',
      date: 'August 2023'
    }, {
      src: '/api/placeholder/400/300',
      caption: 'Project Exhibition',
      event: 'Innovation Showcase',
      date: 'May 2023'
    }, {
      src: '/api/placeholder/400/300',
      caption: 'Award Ceremony',
      event: 'Best Association Award',
      date: 'April 2023'
    }, {
      src: '/api/placeholder/400/300',
      caption: 'Competition Winners',
      event: 'Coding Championship',
      date: 'March 2023'
    }]
  }, {
    title: 'Community',
    images: [{
      src: '/api/placeholder/400/300',
      caption: 'New Member Orientation',
      event: 'Welcome Session',
      date: 'July 2024'
    }, {
      src: '/api/placeholder/400/300',
      caption: 'Team Meeting',
      event: 'Monthly Planning',
      date: 'June 2024'
    }, {
      src: '/api/placeholder/400/300',
      caption: 'Alumni Meetup',
      event: 'Network Session',
      date: 'May 2024'
    }, {
      src: '/api/placeholder/400/300',
      caption: 'Study Group',
      event: 'Peer Learning',
      date: 'April 2024'
    }]
  }];

  // Flatten all images for lightbox navigation
  var allImages = galleryCategories.flatMap(category => category.images.map(img => _objectSpread(_objectSpread({}, img), {}, {
    category: category.title
  })));
  var openLightbox = (categoryIndex, imageIndex) => {
    var globalIndex = galleryCategories.slice(0, categoryIndex).reduce((acc, cat) => acc + cat.images.length, 0) + imageIndex;
    setSelectedImage(globalIndex);
  };
  var closeLightbox = () => setSelectedImage(null);
  var navigateLightbox = direction => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : allImages.length - 1);
    } else {
      setSelectedImage(selectedImage < allImages.length - 1 ? selectedImage + 1 : 0);
    }
  };
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
            children: "Gallery"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-xl text-muted-foreground mb-8 leading-relaxed",
            children: "Capturing moments from our journey, events, and achievements"
          })]
        })
      })
    }), /*#__PURE__*/_jsx("section", {
      className: "py-16 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/_jsx("div", {
          className: "max-w-7xl mx-auto space-y-16",
          children: galleryCategories.map((category, categoryIndex) => /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("h2", {
              className: "text-3xl font-bold mb-8 text-center",
              children: category.title
            }), /*#__PURE__*/_jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
              children: category.images.map((image, imageIndex) => /*#__PURE__*/_jsxs("div", {
                className: "glass-card rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all group",
                onClick: () => openLightbox(categoryIndex, imageIndex),
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "relative",
                  children: [/*#__PURE__*/_jsx("img", {
                    src: image.src,
                    alt: image.caption,
                    className: "w-full h-64 object-cover"
                  }), /*#__PURE__*/_jsx("div", {
                    className: "absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center",
                    children: /*#__PURE__*/_jsx("div", {
                      className: "opacity-0 group-hover:opacity-100 transition-opacity text-white text-center p-4",
                      children: /*#__PURE__*/_jsx("p", {
                        className: "font-semibold",
                        children: image.caption
                      })
                    })
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  className: "p-4",
                  children: [/*#__PURE__*/_jsx("h3", {
                    className: "font-semibold mb-2",
                    children: image.event
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "flex items-center text-sm text-muted-foreground",
                    children: [/*#__PURE__*/_jsx(Calendar, {
                      className: "w-4 h-4 mr-1"
                    }), image.date]
                  })]
                })]
              }, imageIndex))
            })]
          }, categoryIndex))
        })
      })
    }), selectedImage !== null && /*#__PURE__*/_jsxs("div", {
      className: "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",
      children: [/*#__PURE__*/_jsx("button", {
        onClick: closeLightbox,
        className: "absolute top-4 right-4 text-white hover:text-primary transition-colors z-10",
        children: /*#__PURE__*/_jsx(X, {
          className: "w-8 h-8"
        })
      }), /*#__PURE__*/_jsx("button", {
        onClick: () => navigateLightbox('prev'),
        className: "absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10",
        children: /*#__PURE__*/_jsx(ChevronLeft, {
          className: "w-8 h-8"
        })
      }), /*#__PURE__*/_jsx("button", {
        onClick: () => navigateLightbox('next'),
        className: "absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10",
        children: /*#__PURE__*/_jsx(ChevronRight, {
          className: "w-8 h-8"
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: "max-w-4xl max-h-full flex flex-col items-center",
        children: [/*#__PURE__*/_jsx("img", {
          src: allImages[selectedImage].src,
          alt: allImages[selectedImage].caption,
          className: "max-w-full max-h-[70vh] object-contain"
        }), /*#__PURE__*/_jsxs("div", {
          className: "mt-4 text-center text-white",
          children: [/*#__PURE__*/_jsx("h3", {
            className: "text-xl font-semibold mb-2",
            children: allImages[selectedImage].caption
          }), /*#__PURE__*/_jsx("p", {
            className: "text-muted-foreground",
            children: allImages[selectedImage].event
          }), /*#__PURE__*/_jsx("p", {
            className: "text-sm text-muted-foreground",
            children: allImages[selectedImage].date
          })]
        })]
      })]
    }), /*#__PURE__*/_jsx("section", {
      className: "py-16 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/_jsx("div", {
          className: "max-w-4xl mx-auto glass-card p-8 rounded-2xl",
          children: /*#__PURE__*/_jsxs("div", {
            className: "grid md:grid-cols-4 gap-6 text-center",
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-3xl font-bold text-primary mb-2",
                children: "50+"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-muted-foreground",
                children: "Events Organized"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-3xl font-bold text-primary mb-2",
                children: "500+"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-muted-foreground",
                children: "Photos Captured"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-3xl font-bold text-primary mb-2",
                children: "1000+"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-muted-foreground",
                children: "Students Impacted"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("div", {
                className: "text-3xl font-bold text-primary mb-2",
                children: "3+"
              }), /*#__PURE__*/_jsx("div", {
                className: "text-muted-foreground",
                children: "Years of Excellence"
              })]
            })]
          })
        })
      })
    })]
  });
};
export default Gallery;