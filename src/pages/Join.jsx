import { Link } from 'react-router-dom';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Join = () => {
  return /*#__PURE__*/_jsx("section", {
    className: "container mx-auto px-6 py-20",
    children: /*#__PURE__*/_jsxs("div", {
      className: "max-w-3xl mx-auto glass-card p-8 rounded-2xl",
      children: [/*#__PURE__*/_jsx("h1", {
        className: "text-3xl md:text-4xl font-extrabold mb-4",
        children: "Join ACADS"
      }), /*#__PURE__*/_jsx("p", {
        className: "text-muted-foreground mb-6",
        children: "We'd love to have you onboard. Fill out the interest form and we'll reach out with next steps."
      }), /*#__PURE__*/_jsx(Link, {
        to: "/contact",
        className: "glass-button inline-block px-5 py-3",
        children: "Contact us"
      })]
    })
  });
};
export default Join;

