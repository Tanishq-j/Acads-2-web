var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className", "isActive", "size"],
  _excluded5 = ["className"],
  _excluded6 = ["className"],
  _excluded7 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Pagination = _ref => {
  var {
      className
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx("nav", _objectSpread({
    role: "navigation",
    "aria-label": "pagination",
    className: cn("mx-auto flex w-full justify-center", className)
  }, props));
};
Pagination.displayName = "Pagination";
var PaginationContent = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  var {
      className
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_jsx("ul", _objectSpread({
    ref: ref,
    className: cn("flex flex-row items-center gap-1", className)
  }, props));
});
PaginationContent.displayName = "PaginationContent";
var PaginationItem = /*#__PURE__*/React.forwardRef((_ref3, ref) => {
  var {
      className
    } = _ref3,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_jsx("li", _objectSpread({
    ref: ref,
    className: cn("", className)
  }, props));
});
PaginationItem.displayName = "PaginationItem";
var PaginationLink = _ref4 => {
  var {
      className,
      isActive,
      size = "icon"
    } = _ref4,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_jsx("a", _objectSpread({
    "aria-current": isActive ? "page" : undefined,
    className: cn(buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size
    }), className)
  }, props));
};
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = _ref5 => {
  var {
      className
    } = _ref5,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/_jsxs(PaginationLink, _objectSpread(_objectSpread({
    "aria-label": "Go to previous page",
    size: "default",
    className: cn("gap-1 pl-2.5", className)
  }, props), {}, {
    children: [/*#__PURE__*/_jsx(ChevronLeft, {
      className: "h-4 w-4"
    }), /*#__PURE__*/_jsx("span", {
      children: "Previous"
    })]
  }));
};
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = _ref6 => {
  var {
      className
    } = _ref6,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/_jsxs(PaginationLink, _objectSpread(_objectSpread({
    "aria-label": "Go to next page",
    size: "default",
    className: cn("gap-1 pr-2.5", className)
  }, props), {}, {
    children: [/*#__PURE__*/_jsx("span", {
      children: "Next"
    }), /*#__PURE__*/_jsx(ChevronRight, {
      className: "h-4 w-4"
    })]
  }));
};
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = _ref7 => {
  var {
      className
    } = _ref7,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/_jsxs("span", _objectSpread(_objectSpread({
    "aria-hidden": true,
    className: cn("flex h-9 w-9 items-center justify-center", className)
  }, props), {}, {
    children: [/*#__PURE__*/_jsx(MoreHorizontal, {
      className: "h-4 w-4"
    }), /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "More pages"
    })]
  }));
};
PaginationEllipsis.displayName = "PaginationEllipsis";
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious };