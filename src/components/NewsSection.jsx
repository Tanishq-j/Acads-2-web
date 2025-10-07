import { Bell, Clock, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var NewsSection = () => {
  var newsItems = [{
    title: 'S.Y. Interviews for Core Team',
    description: 'Applications are now open for Second Year students to join the ACADS core team. Be part of organizing amazing events and workshops.',
    date: '2025-08-18',
    category: 'Recruitment',
    priority: 'high',
    isNew: false
  }, {
    title: 'T.Y. Interviews for Core Team',
    description: 'Third Year students can apply for leadership positions in ACADS. Lead initiatives and mentor junior students.',
    date: '2025-08-21',
    category: 'Recruitment',
    priority: 'high',
    isNew: true
  }];
  var formatDate = dateString => {
    var date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
  var getCategoryColor = category => {
    switch (category) {
      case 'Recruitment':
        return 'from-accent/20 to-accent/10 text-accent border-accent/30';
      case 'Events':
        return 'from-primary/20 to-primary/10 text-primary border-primary/30';
      case 'Partnership':
        return 'from-secondary/20 to-secondary/10 text-secondary border-secondary/30';
      default:
        return 'from-muted/20 to-muted/10 text-muted-foreground border-muted/30';
    }
  };
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
            children: "News & Announcements"
          })
        }), /*#__PURE__*/_jsx("p", {
          className: "text-xl text-muted-foreground max-w-2xl mx-auto",
          children: "Stay updated with the latest happenings at ACADS"
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
        children: newsItems.map((news, index) => /*#__PURE__*/_jsxs("div", {
          className: "glass-card p-6 group cursor-pointer animate-slide-up hover:scale-105 flex flex-col h-full",
          style: {
            animationDelay: "".concat(index * 0.1, "s")
          },
          children: [/*#__PURE__*/_jsxs("div", {
            className: "flex items-start justify-between mb-4",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex items-center gap-3",
              children: [/*#__PURE__*/_jsx("div", {
                className: "p-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20",
                children: /*#__PURE__*/_jsx(Bell, {
                  className: "w-5 h-5 text-primary"
                })
              }), news.isNew && /*#__PURE__*/_jsxs("div", {
                className: "flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30",
                children: [/*#__PURE__*/_jsx(Star, {
                  className: "w-3 h-3 text-accent"
                }), /*#__PURE__*/_jsx("span", {
                  className: "text-xs font-medium text-accent",
                  children: "NEW"
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "flex items-center gap-2 text-sm text-muted-foreground",
              children: [/*#__PURE__*/_jsx(Clock, {
                className: "w-4 h-4"
              }), /*#__PURE__*/_jsx("span", {
                children: formatDate(news.date)
              })]
            })]
          }), /*#__PURE__*/_jsx("div", {
            className: "mb-4",
            children: /*#__PURE__*/_jsx("span", {
              className: "inline-block px-3 py-1 rounded-full text-xs font-medium border bg-gradient-to-r ".concat(getCategoryColor(news.category)),
              children: news.category
            })
          }), /*#__PURE__*/_jsx("h3", {
            className: "text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors",
            children: news.title
          }), /*#__PURE__*/_jsx("p", {
            className: "text-muted-foreground leading-relaxed mb-6",
            children: news.description
          }), /*#__PURE__*/_jsxs("div", {
            className: "flex items-center justify-between mt-auto",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex items-center gap-2 text-primary group-hover:text-accent transition-colors",
              children: [/*#__PURE__*/_jsx("span", {
                className: "font-medium",
                children: "Read More"
              }), /*#__PURE__*/_jsx(ArrowRight, {
                className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
              })]
            }), news.priority === 'high' && /*#__PURE__*/_jsx("div", {
              className: "px-2 py-1 rounded-full bg-gradient-to-r from-red-500/20 to-red-400/10 border border-red-400/30",
              children: /*#__PURE__*/_jsx("span", {
                className: "text-xs font-medium text-red-400",
                children: "Important"
              })
            })]
          })]
        }, news.title))
      })]
    })
  });
};
export default NewsSection;