import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var EventsSection = () => {
  var events = [{
    title: 'ACADS SIH Session',
    date: '02 September 2024',
    time: '10:00 AM - 12:00 PM',
    location: 'Seminar Hall, CSE Department',
    description: 'Smart India Hackathon preparation session with problem statements and team formation guidance.',
    image: '/placeholder.svg',
    status: 'upcoming'
  }, {
    title: 'Workshop of LeetCode and HackerRank',
    date: '15-16th October 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Computer Lab 1 & 2',
    description: 'Intensive coding workshop covering problem-solving strategies and competitive programming.',
    image: '/placeholder.svg',
    status: 'upcoming'
  }, {
    title: 'Beyond Resume 2025',
    date: '22 March 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Auditorium',
    description: 'Flagship event under Pioneer. 3 rounds: Aptitude, Group Discussion, One-on-One Interview. Prize: INR 10,000.',
    image: '/placeholder.svg',
    status: 'upcoming',
    href: '/beyond-resume'
  }];
  return /*#__PURE__*/_jsx("section", {
    className: "py-20 px-6",
    children: /*#__PURE__*/_jsxs("div", {
      className: "max-w-6xl mx-auto",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "text-center mb-16",
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-4xl md:text-5xl font-bold mb-6",
          children: /*#__PURE__*/_jsx("span", {
            className: "gradient-text",
            children: "Upcoming Events & Sessions"
          })
        }), /*#__PURE__*/_jsx("p", {
          className: "text-xl text-muted-foreground max-w-2xl mx-auto",
          children: "Don't miss out on our exciting workshops, sessions, and networking events"
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8",
        children: events.map((event, index) => /*#__PURE__*/_jsxs("div", {
          className: "glass-card overflow-hidden group animate-slide-up flex flex-col h-full",
          style: {
            animationDelay: "".concat(index * 0.1, "s")
          },
          children: [/*#__PURE__*/_jsxs("div", {
            className: "relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden",
            children: [/*#__PURE__*/_jsx("div", {
              className: "absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"
            }), /*#__PURE__*/_jsx("div", {
              className: "absolute top-4 right-4",
              children: /*#__PURE__*/_jsx("span", {
                className: "px-3 py-1 rounded-full text-xs font-medium ".concat(event.status === 'upcoming' ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-muted/20 text-muted-foreground border border-muted/30'),
                children: event.status === 'upcoming' ? 'Upcoming' : 'Completed'
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "absolute inset-0 opacity-20",
              children: /*#__PURE__*/_jsx("div", {
                className: "w-full h-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30"
              })
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "p-6 flex flex-col h-full",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors",
              children: event.title
            }), /*#__PURE__*/_jsxs("div", {
              className: "space-y-2 mb-4",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2 text-sm text-muted-foreground",
                children: [/*#__PURE__*/_jsx(Calendar, {
                  className: "w-4 h-4 text-primary"
                }), /*#__PURE__*/_jsx("span", {
                  children: event.date
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2 text-sm text-muted-foreground",
                children: [/*#__PURE__*/_jsx(MapPin, {
                  className: "w-4 h-4 text-secondary"
                }), /*#__PURE__*/_jsx("span", {
                  children: event.location
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-2 text-sm text-muted-foreground",
                children: [/*#__PURE__*/_jsx(Users, {
                  className: "w-4 h-4 text-accent"
                }), /*#__PURE__*/_jsx("span", {
                  children: event.time
                })]
              })]
            }), /*#__PURE__*/_jsx("p", {
              className: "text-muted-foreground leading-relaxed mb-6",
              children: event.description
            }), /*#__PURE__*/_jsxs("div", {
              className: "flex gap-3 mt-auto",
              children: ['href' in event && event.href ? /*#__PURE__*/_jsxs(Link, {
                to: event.href,
                className: "glass-button flex-1 flex items-center justify-center gap-2 text-center",
                children: [/*#__PURE__*/_jsx("span", {
                  children: "Details"
                }), /*#__PURE__*/_jsx(ExternalLink, {
                  className: "w-4 h-4"
                })]
              }) : /*#__PURE__*/_jsxs(Link, {
                to: "/events",
                className: "glass-button flex-1 flex items-center justify-center gap-2 text-center",
                children: [/*#__PURE__*/_jsx("span", {
                  children: "Details"
                }), /*#__PURE__*/_jsx(ExternalLink, {
                  className: "w-4 h-4"
                })]
              }), event.status === 'upcoming' && /*#__PURE__*/_jsx("button", {
                className: "px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-medium text-background hover:scale-105 transition-transform duration-300 glow-effect",
                children: "Register Now"
              })]
            })]
          })]
        }, event.title))
      })]
    })
  });
};
export default EventsSection;