import { UserCheck, Code2, Calendar, Brain, Users, DollarSign, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var WhyJoinSection = () => {
  var benefits = [{
    icon: UserCheck,
    title: 'Mentorship & Guidance',
    description: 'Guidance from seniors and mentors to accelerate your growth.',
    color: 'from-primary/20 to-primary/10',
    href: '/mentorship'
  }, {
    icon: Code2,
    title: 'Technical Workshops',
    description: 'Hands-on learning on the latest tools and frameworks.',
    color: 'from-secondary/20 to-secondary/10',
    href: '/workshops'
  }, {
    icon: Calendar,
    title: 'Non‑Technical Events',
    description: 'Personality development and soft‑skills sessions.',
    color: 'from-accent/20 to-accent/10',
    href: '/non-technical'
  }, {
    icon: Brain,
    title: 'Logic Building',
    description: 'Grow problem‑solving and DSA fundamentals.',
    color: 'from-primary/20 to-accent/10',
    href: '/logic-building'
  }, {
    icon: Users,
    title: 'Networking',
    description: 'Connect with peers, alumni, and industry professionals.',
    color: 'from-secondary/20 to-primary/10',
    href: '/networking'
  }, {
    icon: DollarSign,
    title: 'Membership',
    description: 'Student‑friendly access to events and resources.',
    color: 'from-accent/20 to-secondary/10',
    href: '/membership'
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
            children: "Why Join ACADS?"
          })
        }), /*#__PURE__*/_jsx("p", {
          className: "text-xl text-muted-foreground max-w-2xl mx-auto",
          children: "Discover the amazing benefits of being part of our tech community"
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: benefits.map((benefit, index) => /*#__PURE__*/_jsxs(Link, {
          to: benefit.href,
          className: "glass-card p-8 group animate-slide-up hover:scale-105",
          style: {
            animationDelay: "".concat(index * 0.1, "s")
          },
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex items-start gap-4 mb-6",
            children: [/*#__PURE__*/_jsx("div", {
              className: "p-3 rounded-xl bg-gradient-to-br ".concat(benefit.color, " group-hover:scale-110 transition-transform duration-300"),
              children: /*#__PURE__*/_jsx(benefit.icon, {
                className: "w-6 h-6 text-primary"
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "flex-1",
              children: /*#__PURE__*/_jsx("h3", {
                className: "text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors",
                children: benefit.title
              })
            })]
          }), /*#__PURE__*/_jsx("p", {
            className: "text-muted-foreground leading-relaxed mb-6",
            children: benefit.description
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex items-center gap-2 text-primary group-hover:text-accent transition-colors",
            children: [/*#__PURE__*/_jsx("span", {
              className: "font-medium",
              children: "Learn More"
            }), /*#__PURE__*/_jsx(ArrowRight, {
              className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
            })]
          })]
        }, benefit.title))
      }), /*#__PURE__*/_jsx("div", {
        className: "mt-12 text-center",
        children: /*#__PURE__*/_jsxs("div", {
          className: "glass-card p-8 max-w-md mx-auto",
          children: [/*#__PURE__*/_jsx(Sparkles, {
            className: "w-8 h-8 text-accent mx-auto mb-4"
          }), /*#__PURE__*/_jsx("h3", {
            className: "text-2xl font-bold gradient-text mb-2",
            children: "And much more..."
          }), /*#__PURE__*/_jsx("p", {
            className: "text-muted-foreground",
            children: "Join us to discover all the amazing opportunities waiting for you!"
          })]
        })
      })]
    })
  });
};
export default WhyJoinSection;