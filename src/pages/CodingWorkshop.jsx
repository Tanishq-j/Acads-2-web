"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lucideReact = require("lucide-react");
var _jsxRuntime = require("react/jsx-runtime");
var CodingWorkshop = () => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "min-h-screen pt-24 px-4",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
      className: "container mx-auto max-w-5xl text-center mb-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "display-title text-4xl md:text-6xl mb-3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "gradient-text",
          children: "LeetCode & HackerRank Workshop"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto",
        children: "Two-day intensive problem-solving bootcamp covering patterns, tips, and mock contests."
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
      className: "container mx-auto max-w-6xl mb-10",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: "/api/placeholder/900/600",
          alt: "Workshop photo 1",
          className: "w-full h-56 sm:h-64 md:h-72 object-cover rounded-2xl"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: "/api/placeholder/900/600",
          alt: "Workshop photo 2",
          className: "w-full h-56 sm:h-64 md:h-72 object-cover rounded-2xl"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
      className: "container mx-auto max-w-6xl",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "glass-card p-6 rounded-2xl",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center gap-2 text-muted-foreground mb-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Calendar, {
              className: "w-4 h-4"
            }), " Dates"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "text-lg font-semibold",
            children: "To be announced"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "glass-card p-6 rounded-2xl",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center gap-2 text-muted-foreground mb-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.Clock, {
              className: "w-4 h-4"
            }), " Time"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "text-lg font-semibold",
            children: "\u2014"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "glass-card p-6 rounded-2xl",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center gap-2 text-muted-foreground mb-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lucideReact.MapPin, {
              className: "w-4 h-4"
            }), " Venue"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "text-lg font-semibold",
            children: "Computer Lab"
          })]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
      className: "container mx-auto max-w-6xl mt-10",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "glass-card p-6 rounded-2xl text-left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "text-2xl font-semibold mb-3",
          children: "Workshop Outline"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
          className: "list-disc pl-5 text-muted-foreground space-y-2",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: "Patterns: Two Pointers, Sliding Window, Binary Search"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: "Data Structures: Trees, Graphs, Heaps"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: "Practice regimen and contest strategy"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: "Mock contest and editorial walkthrough"
          })]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
      className: "container mx-auto max-w-6xl mt-6 mb-16",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "glass-card p-6 rounded-2xl text-left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "text-2xl font-semibold mb-3",
          children: "Conducted by"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-muted-foreground",
          children: "ACADS Competitive Programming Wing with mentors from senior batches and alumni."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mt-4",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: "#register",
            className: "glass-button inline-flex items-center justify-center",
            children: "Register Now"
          })
        })]
      })
    })]
  });
};
var _default = exports.default = CodingWorkshop;