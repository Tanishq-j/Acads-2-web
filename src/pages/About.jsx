import { Users, Target, Heart, Lightbulb } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var About = () => {
  var features = [{
    icon: Users,
    title: 'Community Driven',
    description: 'Building a strong community of passionate students in Computer Science, AI, ML, and Data Science.'
  }, {
    icon: Target,
    title: 'Skill Development',
    description: 'Focused on developing technical and soft skills through workshops, seminars, and hands-on projects.'
  }, {
    icon: Heart,
    title: 'Inclusive Environment',
    description: 'Creating an inclusive space where every student can learn, grow, and contribute to the tech community.'
  }, {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Fostering innovation and creativity through collaborative projects and cutting-edge technology exploration.'
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
            children: "About ACADS"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-xl text-muted-foreground mb-8 leading-relaxed",
            children: "The Association of CSE (AIML & DS) Students of KIT's College of Engineering (Autonomous), Kolhapur"
          })]
        })
      })
    }), /*#__PURE__*/_jsx("section", {
      className: "py-16 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/_jsx("div", {
          className: "max-w-6xl mx-auto",
          children: /*#__PURE__*/_jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12 items-center",
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("h2", {
                className: "text-4xl font-bold mb-6",
                children: "Our Mission"
              }), /*#__PURE__*/_jsx("p", {
                className: "text-lg text-muted-foreground mb-6 leading-relaxed",
                children: "ACADS is dedicated to creating a vibrant ecosystem for students pursuing Computer Science, Artificial Intelligence, Machine Learning, and Data Science. We believe in the power of collaboration, continuous learning, and innovation."
              }), /*#__PURE__*/_jsx("p", {
                className: "text-lg text-muted-foreground leading-relaxed",
                children: "Through various technical and non-technical activities throughout the year, we aim to bridge the gap between academic learning and industry requirements, preparing our members for successful careers in technology."
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "glass-card p-8 rounded-2xl",
              children: /*#__PURE__*/_jsx("img", {
                src: "/api/placeholder/500/400",
                alt: "ACADS Team",
                className: "w-full h-auto rounded-xl"
              })
            })]
          })
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
            children: "What We Stand For"
          }), /*#__PURE__*/_jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: features.map((feature, index) => /*#__PURE__*/_jsxs(Dialog, {
              children: [/*#__PURE__*/_jsx(DialogTrigger, {
                asChild: true,
                children: /*#__PURE__*/_jsxs("button", {
                  className: "w-full text-left glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all",
                  children: [/*#__PURE__*/_jsx("div", {
                    className: "w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4",
                    children: /*#__PURE__*/_jsx(feature.icon, {
                      className: "w-8 h-8 text-white"
                    })
                  }), /*#__PURE__*/_jsx("h3", {
                    className: "text-xl font-bold mb-3 text-center",
                    children: feature.title
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-muted-foreground text-center",
                    children: feature.description
                  })]
                })
              }), /*#__PURE__*/_jsxs(DialogContent, {
                className: "glass-card p-0",
                children: [/*#__PURE__*/_jsx(DialogHeader, {
                  className: "p-6 pb-0",
                  children: /*#__PURE__*/_jsx(DialogTitle, {
                    className: "text-2xl",
                    children: feature.title
                  })
                }), /*#__PURE__*/_jsx("div", {
                  className: "p-6 pt-4 text-muted-foreground leading-relaxed",
                  children: /*#__PURE__*/_jsxs("p", {
                    children: [feature.description, " We go deeper with examples, stories, and ways you can get involved."]
                  })
                })]
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
          className: "max-w-4xl mx-auto glass-card p-8 rounded-2xl",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-4xl font-bold text-center mb-8",
            children: "Our Journey"
          }), /*#__PURE__*/_jsxs("div", {
            className: "space-y-6 text-lg text-muted-foreground leading-relaxed",
            children: [/*#__PURE__*/_jsx("p", {
              children: "Founded with the vision of creating a supportive learning environment, ACADS has grown from a small group of enthusiastic students to a thriving community that represents the future of technology education."
            }), /*#__PURE__*/_jsx("p", {
              children: "Our association has successfully organized numerous workshops, hackathons, technical talks, and networking events that have benefited hundreds of students. We continue to evolve and adapt to the changing landscape of technology education."
            }), /*#__PURE__*/_jsx("p", {
              children: "Today, ACADS stands as a testament to what students can achieve when they come together with a shared vision of learning, growing, and making a positive impact in the world of technology."
            })]
          })]
        })
      })
    })]
  });
};
export default About;