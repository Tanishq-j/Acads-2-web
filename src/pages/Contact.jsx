function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Contact = () => {
  var {
    toast
  } = useToast();
  var [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    occupation: '',
    city: '',
    inquiry: ''
  });
  var handleInputChange = e => {
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      [e.target.name]: e.target.value
    }));
  };
  var handleSubmit = e => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.occupation || !formData.inquiry) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      occupation: '',
      city: '',
      inquiry: ''
    });
  };
  var contactInfo = [{
    icon: Mail,
    title: 'Email Us',
    details: 'contact@acadskitcoek.in',
    subtitle: 'We reply within 24 hours'
  }, {
    icon: Phone,
    title: 'Call Us',
    details: '+91 9876543210',
    subtitle: 'Mon-Fri 9AM-6PM'
  }, {
    icon: MapPin,
    title: 'Visit Us',
    details: 'KIT College of Engineering, Kolhapur',
    subtitle: 'Maharashtra, India'
  }, {
    icon: Clock,
    title: 'Office Hours',
    details: 'Monday - Friday',
    subtitle: '9:00 AM - 6:00 PM'
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
            children: "Contact Us"
          }), /*#__PURE__*/_jsx("p", {
            className: "text-xl text-muted-foreground mb-8 leading-relaxed",
            children: "Get in touch with us. We'd love to hear from you and answer any questions."
          })]
        })
      })
    }), /*#__PURE__*/_jsx("section", {
      className: "py-16 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/_jsx("div", {
          className: "max-w-6xl mx-auto",
          children: /*#__PURE__*/_jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",
            children: contactInfo.map((info, index) => /*#__PURE__*/_jsxs("div", {
              className: "glass-card p-6 rounded-2xl text-center hover:scale-105 transition-all",
              children: [/*#__PURE__*/_jsx("div", {
                className: "w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4",
                children: /*#__PURE__*/_jsx(info.icon, {
                  className: "w-8 h-8 text-white"
                })
              }), /*#__PURE__*/_jsx("h3", {
                className: "text-xl font-bold mb-2",
                children: info.title
              }), /*#__PURE__*/_jsx("p", {
                className: "text-foreground font-medium mb-1",
                children: info.details
              }), /*#__PURE__*/_jsx("p", {
                className: "text-sm text-muted-foreground",
                children: info.subtitle
              })]
            }, index))
          })
        })
      })
    }), /*#__PURE__*/_jsx("section", {
      className: "py-16 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/_jsx("div", {
          className: "max-w-7xl mx-auto",
          children: /*#__PURE__*/_jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "glass-card p-8 rounded-2xl h-full flex flex-col",
              children: [/*#__PURE__*/_jsx("h2", {
                className: "text-3xl font-bold mb-6",
                children: "Send us a Message"
              }), /*#__PURE__*/_jsxs("form", {
                onSubmit: handleSubmit,
                className: "space-y-6 flex-1 flex flex-col",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "grid md:grid-cols-2 gap-4",
                  children: [/*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsxs("label", {
                      className: "block text-sm font-medium mb-2",
                      children: ["Name ", /*#__PURE__*/_jsx("span", {
                        className: "text-red-400",
                        children: "*"
                      })]
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "relative",
                      children: [/*#__PURE__*/_jsx(User, {
                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      }), /*#__PURE__*/_jsx(Input, {
                        type: "text",
                        name: "name",
                        value: formData.name,
                        onChange: handleInputChange,
                        className: "glass-input pl-10",
                        placeholder: "Your full name",
                        required: true
                      })]
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsx("label", {
                      className: "block text-sm font-medium mb-2",
                      children: "Phone"
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "relative",
                      children: [/*#__PURE__*/_jsx(Phone, {
                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      }), /*#__PURE__*/_jsx(Input, {
                        type: "tel",
                        name: "phone",
                        value: formData.phone,
                        onChange: handleInputChange,
                        className: "glass-input pl-10",
                        placeholder: "Your phone number"
                      })]
                    })]
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  children: [/*#__PURE__*/_jsxs("label", {
                    className: "block text-sm font-medium mb-2",
                    children: ["Email ", /*#__PURE__*/_jsx("span", {
                      className: "text-red-400",
                      children: "*"
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    className: "relative",
                    children: [/*#__PURE__*/_jsx(Mail, {
                      className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground"
                    }), /*#__PURE__*/_jsx(Input, {
                      type: "email",
                      name: "email",
                      value: formData.email,
                      onChange: handleInputChange,
                      className: "glass-input pl-10",
                      placeholder: "your.email@example.com",
                      required: true
                    })]
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  className: "grid md:grid-cols-2 gap-4",
                  children: [/*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsxs("label", {
                      className: "block text-sm font-medium mb-2",
                      children: ["Current Occupation ", /*#__PURE__*/_jsx("span", {
                        className: "text-red-400",
                        children: "*"
                      })]
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "relative",
                      children: [/*#__PURE__*/_jsx(Building, {
                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      }), /*#__PURE__*/_jsx(Input, {
                        type: "text",
                        name: "occupation",
                        value: formData.occupation,
                        onChange: handleInputChange,
                        className: "glass-input pl-10",
                        placeholder: "Student, Professional, etc.",
                        required: true
                      })]
                    })]
                  }), /*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsx("label", {
                      className: "block text-sm font-medium mb-2",
                      children: "City"
                    }), /*#__PURE__*/_jsxs("div", {
                      className: "relative",
                      children: [/*#__PURE__*/_jsx(MapPin, {
                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground"
                      }), /*#__PURE__*/_jsx(Input, {
                        type: "text",
                        name: "city",
                        value: formData.city,
                        onChange: handleInputChange,
                        className: "glass-input pl-10",
                        placeholder: "Your city"
                      })]
                    })]
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  children: [/*#__PURE__*/_jsxs("label", {
                    className: "block text-sm font-medium mb-2",
                    children: ["Required Assistance/Inquiry ", /*#__PURE__*/_jsx("span", {
                      className: "text-red-400",
                      children: "*"
                    })]
                  }), /*#__PURE__*/_jsx(Textarea, {
                    name: "inquiry",
                    value: formData.inquiry,
                    onChange: handleInputChange,
                    className: "glass-input min-h-[120px] resize-none",
                    placeholder: "Please describe how we can help you...",
                    required: true
                  })]
                }), /*#__PURE__*/_jsxs(Button, {
                  type: "submit",
                  className: "glass-button w-full mt-auto",
                  children: [/*#__PURE__*/_jsx(Send, {
                    className: "w-5 h-5 mr-2"
                  }), "Send Message"]
                })]
              })]
            }), /*#__PURE__*/_jsxs("div", {
              className: "glass-card p-8 rounded-2xl h-full flex flex-col",
              children: [/*#__PURE__*/_jsx("h2", {
                className: "text-3xl font-bold mb-6",
                children: "Find Us"
              }), /*#__PURE__*/_jsxs("div", {
                className: "mb-6",
                children: [/*#__PURE__*/_jsx("h3", {
                  className: "text-xl font-semibold mb-3",
                  children: "KIT College of Engineering"
                }), /*#__PURE__*/_jsx("p", {
                  className: "text-muted-foreground mb-4",
                  children: "Gokul Shirgaon, Kolhapur - Sangli Rd, Kolhapur, Maharashtra 416234"
                }), /*#__PURE__*/_jsxs("div", {
                  className: "relative h-64 bg-white/5 rounded-xl overflow-hidden mb-6",
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
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "space-y-4",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex items-start space-x-3",
                  children: [/*#__PURE__*/_jsx(MapPin, {
                    className: "w-5 h-5 text-primary mt-1 flex-shrink-0"
                  }), /*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsx("p", {
                      className: "font-medium",
                      children: "Address"
                    }), /*#__PURE__*/_jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: "Gokul Shirgaon, Kolhapur - Sangli Rd, Kolhapur, Maharashtra 416234"
                    })]
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  className: "flex items-start space-x-3",
                  children: [/*#__PURE__*/_jsx(Clock, {
                    className: "w-5 h-5 text-primary mt-1 flex-shrink-0"
                  }), /*#__PURE__*/_jsxs("div", {
                    children: [/*#__PURE__*/_jsx("p", {
                      className: "font-medium",
                      children: "Office Hours"
                    }), /*#__PURE__*/_jsxs("p", {
                      className: "text-sm text-muted-foreground",
                      children: ["Monday - Friday: 9:00 AM - 6:00 PM", /*#__PURE__*/_jsx("br", {}), "Saturday: 9:00 AM - 2:00 PM"]
                    })]
                  })]
                })]
              }), /*#__PURE__*/_jsxs(Button, {
                variant: "outline",
                className: "w-full mt-auto border-primary/30 hover:bg-primary/10",
                children: [/*#__PURE__*/_jsx(MapPin, {
                  className: "w-4 h-4 mr-2"
                }), "Get Directions"]
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/_jsx("section", {
      className: "py-16 px-4",
      children: /*#__PURE__*/_jsx("div", {
        className: "container mx-auto",
        children: /*#__PURE__*/_jsxs("div", {
          className: "max-w-4xl mx-auto glass-card p-8 rounded-2xl",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-3xl font-bold text-center mb-8",
            children: "Frequently Asked Questions"
          }), /*#__PURE__*/_jsxs("div", {
            className: "grid md:grid-cols-2 gap-6",
            children: [/*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("h4", {
                className: "font-semibold mb-2",
                children: "How can I join ACADS?"
              }), /*#__PURE__*/_jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Keep an eye on our announcements for recruitment drives and interview schedules."
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("h4", {
                className: "font-semibold mb-2",
                children: "Are events open to all students?"
              }), /*#__PURE__*/_jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Most of our events are open to all students. Some may have specific eligibility criteria."
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("h4", {
                className: "font-semibold mb-2",
                children: "How can companies sponsor us?"
              }), /*#__PURE__*/_jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Companies can reach out through our contact form or email for sponsorship opportunities."
              })]
            }), /*#__PURE__*/_jsxs("div", {
              children: [/*#__PURE__*/_jsx("h4", {
                className: "font-semibold mb-2",
                children: "Do you offer mentorship programs?"
              }), /*#__PURE__*/_jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Yes, we have mentorship programs connecting students with industry professionals."
              })]
            })]
          })]
        })
      })
    })]
  });
};
export default Contact;