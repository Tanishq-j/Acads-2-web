function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ContactSection = () => {
  var [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occupation: '',
    city: '',
    inquiry: ''
  });
  var handleInputChange = e => {
    var {
      name,
      value
    } = e.target;
    setFormData(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };
  var handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };
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
            children: "Get in Touch"
          })
        }), /*#__PURE__*/_jsx("p", {
          className: "text-xl text-muted-foreground max-w-2xl mx-auto",
          children: "Have questions or want to join ACADS? We'd love to hear from you!"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
        children: [/*#__PURE__*/_jsx("div", {
          className: "space-y-8 h-full",
          children: /*#__PURE__*/_jsxs("div", {
            className: "glass-card p-8 h-full flex flex-col",
            children: [/*#__PURE__*/_jsx("h3", {
              className: "text-2xl font-bold mb-6 gradient-text",
              children: "Visit Us"
            }), /*#__PURE__*/_jsxs("div", {
              className: "relative h-64 rounded-xl overflow-hidden mb-6",
              children: [/*#__PURE__*/_jsx("iframe", {
                src: "https://maps.google.com/maps?q=16.65335101946007,74.26109754067468&z=16&output=embed",
                width: "600",
                height: "450",
                style: { border: 0 },
                allowFullScreen: true,
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
                className: "w-full h-full border-0",
                title: "KIT College of Engineering Map"
              }), /*#__PURE__*/_jsx("div", {
                className: "absolute inset-0 pointer-events-none",
                children: null
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "space-y-4",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "flex items-start gap-4",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "p-2 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10",
                  children: /*#__PURE__*/_jsx(MapPin, {
                    className: "w-5 h-5 text-primary"
                  })
                }), /*#__PURE__*/_jsxs("div", {
                  children: [/*#__PURE__*/_jsx("h4", {
                    className: "font-semibold text-foreground",
                    children: "Address"
                  }), /*#__PURE__*/_jsxs("p", {
                    className: "text-muted-foreground",
                    children: ["KIT's College of Engineering (Autonomous)", /*#__PURE__*/_jsx("br", {}), "Gokul Shirgaon, Kolhapur, Maharashtra 416234"]
                  })]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-start gap-4",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "p-2 rounded-lg bg-gradient-to-r from-secondary/20 to-secondary/10",
                  children: /*#__PURE__*/_jsx(Phone, {
                    className: "w-5 h-5 text-secondary"
                  })
                }), /*#__PURE__*/_jsxs("div", {
                  children: [/*#__PURE__*/_jsx("h4", {
                    className: "font-semibold text-foreground",
                    children: "Phone"
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-muted-foreground",
                    children: "+91 XXX XXX XXXX"
                  })]
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-start gap-4",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "p-2 rounded-lg bg-gradient-to-r from-accent/20 to-accent/10",
                  children: /*#__PURE__*/_jsx(Mail, {
                    className: "w-5 h-5 text-accent"
                  })
                }), /*#__PURE__*/_jsxs("div", {
                  children: [/*#__PURE__*/_jsx("h4", {
                    className: "font-semibold text-foreground",
                    children: "Email"
                  }), /*#__PURE__*/_jsx("p", {
                    className: "text-muted-foreground",
                    children: "contact@acadskitcoek.in"
                  })]
                })]
              })]
            })]
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "glass-card p-8 h-full flex flex-col",
          children: [/*#__PURE__*/_jsx("h3", {
            className: "text-2xl font-bold mb-6 gradient-text",
            children: "Send us a Message"
          }), /*#__PURE__*/_jsxs("form", {
            onSubmit: handleSubmit,
            className: "space-y-6 flex-1 flex flex-col",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: [/*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsxs("label", {
                  htmlFor: "name",
                  className: "block text-sm font-medium text-foreground mb-2",
                  children: ["Name ", /*#__PURE__*/_jsx("span", {
                    className: "text-accent",
                    children: "*"
                  })]
                }), /*#__PURE__*/_jsx("input", {
                  type: "text",
                  id: "name",
                  name: "name",
                  required: true,
                  value: formData.name,
                  onChange: handleInputChange,
                  className: "glass-input w-full",
                  placeholder: "Your full name"
                })]
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("label", {
                  htmlFor: "phone",
                  className: "block text-sm font-medium text-foreground mb-2",
                  children: "Phone"
                }), /*#__PURE__*/_jsx("input", {
                  type: "tel",
                  id: "phone",
                  name: "phone",
                  value: formData.phone,
                  onChange: handleInputChange,
                  className: "glass-input w-full",
                  placeholder: "Your phone number"
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: [/*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsxs("label", {
                  htmlFor: "email",
                  className: "block text-sm font-medium text-foreground mb-2",
                  children: ["Email ", /*#__PURE__*/_jsx("span", {
                    className: "text-accent",
                    children: "*"
                  })]
                }), /*#__PURE__*/_jsx("input", {
                  type: "email",
                  id: "email",
                  name: "email",
                  required: true,
                  value: formData.email,
                  onChange: handleInputChange,
                  className: "glass-input w-full",
                  placeholder: "your.email@example.com"
                })]
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("label", {
                  htmlFor: "city",
                  className: "block text-sm font-medium text-foreground mb-2",
                  children: "City"
                }), /*#__PURE__*/_jsx("input", {
                  type: "text",
                  id: "city",
                  name: "city",
                  value: formData.city,
                  onChange: handleInputChange,
                  className: "glass-input w-full",
                  placeholder: "Your city"
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsxs("label", {
                htmlFor: "occupation",
                className: "block text-sm font-medium text-foreground mb-2",
                children: ["Current Occupation ", /*#__PURE__*/_jsx("span", {
                  className: "text-accent",
                  children: "*"
                })]
              }), /*#__PURE__*/_jsxs("select", {
                id: "occupation",
                name: "occupation",
                required: true,
                value: formData.occupation,
                onChange: handleInputChange,
                className: "glass-input w-full",
                children: [/*#__PURE__*/_jsx("option", {
                  value: "",
                  children: "Select your occupation"
                }), /*#__PURE__*/_jsx("option", {
                  value: "student",
                  children: "Student"
                }), /*#__PURE__*/_jsx("option", {
                  value: "working-professional",
                  children: "Working Professional"
                }), /*#__PURE__*/_jsx("option", {
                  value: "freelancer",
                  children: "Freelancer"
                }), /*#__PURE__*/_jsx("option", {
                  value: "entrepreneur",
                  children: "Entrepreneur"
                }), /*#__PURE__*/_jsx("option", {
                  value: "other",
                  children: "Other"
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsxs("label", {
                htmlFor: "inquiry",
                className: "block text-sm font-medium text-foreground mb-2",
                children: ["Required Assistance/Inquiry ", /*#__PURE__*/_jsx("span", {
                  className: "text-accent",
                  children: "*"
                })]
              }), /*#__PURE__*/_jsx("textarea", {
                id: "inquiry",
                name: "inquiry",
                required: true,
                rows: 4,
                value: formData.inquiry,
                onChange: handleInputChange,
                className: "glass-input w-full resize-none",
                placeholder: "Tell us how we can help you or what you'd like to know about ACADS..."
              })]
            }), /*#__PURE__*/_jsxs("button", {
              type: "submit",
              className: "w-full mt-auto bg-gradient-to-r from-primary to-secondary text-background font-semibold py-4 px-6 rounded-xl hover:scale-105 transition-transform duration-300 glow-effect flex items-center justify-center gap-3",
              children: [/*#__PURE__*/_jsx(Send, {
                className: "w-5 h-5"
              }), "Send Message"]
            })]
          })]
        })]
      })]
    })
  });
};
export default ContactSection;