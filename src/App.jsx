import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import SponsorsPage from "./pages/SponsorsPage";
import Workshops from "./pages/Workshops";
import News from "./pages/News";
import Join from "./pages/Join";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BeyondResume from "./pages/BeyondResume";
import Legacy from "./pages/Legacy";
import Footer from "./components/Footer";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var queryClient = new QueryClient();
var App = () => /*#__PURE__*/_jsx(QueryClientProvider, {
  client: queryClient,
  children: /*#__PURE__*/_jsxs(TooltipProvider, {
    children: [/*#__PURE__*/_jsx(Toaster, {}), /*#__PURE__*/_jsx(Sonner, {}), /*#__PURE__*/_jsx(BrowserRouter, {
      children: /*#__PURE__*/_jsxs("div", {
        className: "min-h-screen",
        children: [/*#__PURE__*/_jsx(Header, {}), /*#__PURE__*/_jsxs(Routes, {
          children: [/*#__PURE__*/_jsx(Route, {
            path: "/",
            element: /*#__PURE__*/_jsx(Index, {})
          }), /*#__PURE__*/_jsx(Route, {
            path: "/about",
            element: /*#__PURE__*/_jsx(About, {})
          }), /*#__PURE__*/_jsx(Route, {
            path: "/mission",
            element: /*#__PURE__*/_jsx(About, {})
          }), /*#__PURE__*/_jsx(Route, {
            path: "/why-join",
            element: /*#__PURE__*/_jsx(About, {})
          }), /*#__PURE__*/_jsx(Route, {
            path: "/events",
            element: /*#__PURE__*/_jsx(Events, {})
          }), /*#__PURE__*/_jsx(Route, {
            path: "/team",
            element: /*#__PURE__*/_jsx(Team, {})
          }), /*#__PURE__*/_jsx(Route, {
            path: "/gallery",
            element: /*#__PURE__*/_jsx(Gallery, {})
          }), /*#__PURE__*/_jsx(Route, {
          path: "/workshops",
          element: /*#__PURE__*/_jsx(Workshops, {})
        }), /*#__PURE__*/_jsx(Route, {
          path: "/news",
          element: /*#__PURE__*/_jsx(News, {})
        }), /*#__PURE__*/_jsx(Route, {
          path: "/join",
          element: /*#__PURE__*/_jsx(Join, {})
        }), /*#__PURE__*/_jsx(Route, {
            path: "/beyond-resume",
            element: /*#__PURE__*/_jsx(BeyondResume, {})
          }), /*#__PURE__*/_jsx(Route, {
            path: "/sponsors",
            element: /*#__PURE__*/_jsx(SponsorsPage, {})
          }), /*#__PURE__*/_jsx(Route, {
          path: "/faq",
          element: /*#__PURE__*/_jsx(FAQ, {})
        }), /*#__PURE__*/_jsx(Route, {
            path: "/contact",
            element: /*#__PURE__*/_jsx(Contact, {})
          }), /*#__PURE__*/_jsx(Route, {
            path: "/legacy",
            element: /*#__PURE__*/_jsx(Legacy, {})
          }), /*#__PURE__*/_jsx(Route, {
            path: "*",
            element: /*#__PURE__*/_jsx(NotFound, {})
          })]
        }), /*#__PURE__*/_jsx(Footer, {})]
      })
    })]
  })
});
export default App;