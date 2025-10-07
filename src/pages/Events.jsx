import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Events = () => {
  var upcomingEvents = [{
    title: 'ACADS SIH Session',
    date: '02 September 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Main Auditorium',
    description: 'Smart India Hackathon preparation session with industry experts and previous winners.',
    image: '/api/placeholder/400/250',
    status: 'upcoming',
    participants: '150+ Expected'
  }, {
    title: 'Workshop of LeetCode and HackerRank',
    date: '15-16th October 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Computer Lab',
    description: 'Intensive coding workshop covering problem-solving strategies and platform mastery.',
    image: '/api/placeholder/400/250',
    status: 'upcoming',
    participants: '100+ Expected'
  }, {
    title: 'Beyond Resume 2.0',
    date: '14-15th February 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Conference Hall',
    description: 'Career development workshop focusing on personal branding and professional skills.',
    image: '/api/placeholder/400/250',
    status: 'completed',
    participants: '200+ Attended'
  }];
  var eventCategories = [{
    title: 'Technical Workshops',
    description: 'Hands-on sessions covering latest technologies and industry practices',
    count: '12+ Events'
  }, {
    title: 'Hackathons',
    description: 'Competitive coding events to showcase problem-solving skills',
    count: '8+ Events'
  }, {
    title: 'Industry Talks',
    description: 'Sessions with industry experts sharing insights and trends',
    count: '15+ Sessions'
  }, {
    title: 'Career Development',
    description: 'Professional skill building and career guidance programs',
    count: '10+ Programs'
  }];
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
            children: "Events & Programs"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-xl text-muted-foreground mb-8 leading-relaxed",
            children: "Join our exciting events designed to enhance your skills and expand your network"
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
            children: "What We Offer"
          }), /*#__PURE__*/_jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: eventCategories.map((category, index) => /*#__PURE__*/_jsxs("div", {
              className: "glass-card p-6 rounded-2xl hover:scale-105 transition-all",
              children: [/*#__PURE__*/_jsx("h3", {
                className: "text-xl font-bold mb-3",
                children: category.title
              }), /*#__PURE__*/_jsx("p", {
                className: "text-muted-foreground mb-4",
                children: category.description
              }), /*#__PURE__*/_jsx("span", {
                className: "text-primary font-semibold",
                children: category.count
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
            children: "Upcoming & Recent Events"
          }), /*#__PURE__*/_jsx("div", {
            className: "space-y-8",
            children: upcomingEvents.map((event, index) => /*#__PURE__*/_jsx("div", {
              className: "glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all",
              children: /*#__PURE__*/_jsxs("div", {
                className: "grid lg:grid-cols-3 gap-6",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "lg:col-span-1",
                  children: /*#__PURE__*/_jsx("img", {
                    src: event.image,
                    alt: event.title,
                    className: "w-full h-64 lg:h-full object-cover"
                  })
                }), /*#__PURE__*/_jsxs("div", {
                  className: "lg:col-span-2 p-6 lg:p-8",
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "flex items-center mb-4",
                    children: /*#__PURE__*/_jsx("span", {
                      className: "px-3 py-1 rounded-full text-sm font-medium ".concat(event.status === 'upcoming' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'),
                      children: event.status === 'upcoming' ? 'Upcoming' : 'Completed'
                    })
                  }), /*#__PURE__*/_jsx("h3", {
                    className: "text-2xl font-bold mb-4",
                    children: event.title
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-muted-foreground mb-6",
                    children: event.description
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "grid md:grid-cols-2 gap-4 mb-6",
                    children: [/*#__PURE__*/_jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [/*#__PURE__*/_jsx(Calendar, {
                        className: "w-5 h-5 text-primary"
                      }), /*#__PURE__*/_jsx("span", {
                        children: event.date
                      })]
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [/*#__PURE__*/_jsx(Clock, {
                        className: "w-5 h-5 text-primary"
                      }), /*#__PURE__*/_jsx("span", {
                        children: event.time
                      })]
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [/*#__PURE__*/_jsx(MapPin, {
                        className: "w-5 h-5 text-primary"
                      }), /*#__PURE__*/_jsx("span", {
                        children: event.location
                      })]
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [/*#__PURE__*/_jsx(Users, {
                        className: "w-5 h-5 text-primary"
                      }), /*#__PURE__*/_jsx("span", {
                        children: event.participants
                      })]
                    })]
                  }), event.status === 'upcoming' && /*#__PURE__*/_jsxs(Button, {
                    className: "glass-button",
                    children: ["Register Now", /*#__PURE__*/_jsx(ExternalLink, {
                      className: "w-4 h-4 ml-2"
                    })]
                  })]
                })]
              })
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
            children: "Stay Updated"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-muted-foreground mb-6",
            children: "Don't miss out on our upcoming events and programs. Join our community to get notified about new opportunities."
          }), /*#__PURE__*/_jsx(Button, {
            className: "glass-button",
            children: "Join Our Community"
          })]
        })
      })
    })]
  });
};
export default Events;