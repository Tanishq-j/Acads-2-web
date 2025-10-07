import { Users, Code, Brain, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import teamPhoto from '@/assets/IMG_3357-1.jpg';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var WelcomeSection = () => {
  var features = [{
    icon: Users,
    title: 'Community',
    description: 'Join a vibrant community of CSE, AIML & DS students'
  }, {
    icon: Code,
    title: 'Technical Skills',
    description: 'Enhance your programming and technical abilities'
  }, {
    icon: Brain,
    title: 'AI & ML Focus',
    description: 'Specialized in Artificial Intelligence & Machine Learning'
  }, {
    icon: Network,
    title: 'Networking',
    description: 'Connect with like-minded peers and industry professionals'
  }];
  return /*#__PURE__*/_jsx("section", {
    className: "py-20 px-6",
    children: /*#__PURE__*/_jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "text-center mb-16",
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-4xl md:text-5xl font-bold mb-6",
          children: /*#__PURE__*/_jsx("span", {
            className: "gradient-text",
            children: "Welcome to ACADS"
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "glass-card p-6 md:p-8 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-[1.6fr_1fr] gap-8 md:gap-10 items-center",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "relative group",
            children: [/*#__PURE__*/_jsx("div", {
              className: "absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/40 via-accent/30 to-secondary/40 opacity-60 blur-md group-hover:opacity-80 transition-opacity"
            }), /*#__PURE__*/_jsxs("div", {
              className: "relative rounded-2xl overflow-hidden border border-white/15 shadow-xl",
              children: [/*#__PURE__*/_jsx("img", {
                src: teamPhoto,
                alt: "ACADS Team",
                className: "w-full h-72 md:h-[22rem] object-cover object-center scale-[0.96] group-hover:scale-[0.99] transition-transform duration-500"
              }), /*#__PURE__*/_jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-background/40 via-background/0 to-transparent"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-left",
            children: [/*#__PURE__*/_jsx("p", {
              className: "text-lg md:text-xl leading-relaxed text-foreground",
              children: "ACADS is an Association of CSE (AIML & DS) Students of KIT's College of Engineering (Autonomous), Kolhapur. We conduct technical and non-technical initiatives throughout the year to nurture innovation, collaboration, and growth."
            }), /*#__PURE__*/_jsx("div", {
              className: "mt-6 h-px w-24 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full"
            }), /*#__PURE__*/_jsxs("div", {
              className: "mt-6 flex items-center gap-4",
              children: [/*#__PURE__*/_jsx(Link, {
                to: "/about",
                className: "glass-button px-6 py-3",
                children: "About ACADS"
              }), /*#__PURE__*/_jsx(Link, {
                to: "/team",
                className: "glass-button px-6 py-3",
                children: "Meet the Team"
              })]
            })]
          })]

        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
        children: features.map((feature, index) => /*#__PURE__*/_jsxs("div", {
          className: "glass-card p-6 text-center group animate-slide-up",
          style: {
            animationDelay: "".concat(index * 0.1, "s")
          },
          children: [/*#__PURE__*/_jsx("div", {
            className: "mb-4 flex justify-center",
            children: /*#__PURE__*/_jsx("div", {
              className: "p-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300",
              children: /*#__PURE__*/_jsx(feature.icon, {
                className: "w-8 h-8 text-primary group-hover:text-accent transition-colors"
              })
            })
          }), /*#__PURE__*/_jsx("h3", {
            className: "text-xl font-semibold mb-3 text-foreground",
            children: feature.title
          }), /*#__PURE__*/_jsx("p", {
            className: "text-muted-foreground leading-relaxed",
            children: feature.description
          })]
        }, feature.title))
      })]
    })
  });
};
export default WelcomeSection;