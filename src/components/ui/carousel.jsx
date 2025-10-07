var _excluded = ["orientation", "opts", "setApi", "plugins", "className", "children"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className", "variant", "size"],
  _excluded5 = ["className", "variant", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var CarouselContext = /*#__PURE__*/React.createContext(null);
function useCarousel() {
  var context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
var Carousel = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  var [carouselRef, api] = useEmblaCarousel(_objectSpread(_objectSpread({}, opts), {}, {
    axis: orientation === "horizontal" ? "x" : "y"
  }), plugins);
  var [canScrollPrev, setCanScrollPrev] = React.useState(false);
  var [canScrollNext, setCanScrollNext] = React.useState(false);
  var onSelect = React.useCallback(api => {
    if (!api) {
      return;
    }
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);
  var scrollPrev = React.useCallback(() => {
    api === null || api === void 0 || api.scrollPrev();
  }, [api]);
  var scrollNext = React.useCallback(() => {
    api === null || api === void 0 || api.scrollNext();
  }, [api]);
  var handleKeyDown = React.useCallback(event => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  }, [scrollPrev, scrollNext]);
  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api === null || api === void 0 || api.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /*#__PURE__*/_jsx(CarouselContext.Provider, {
    value: {
      carouselRef,
      api: api,
      opts,
      orientation: orientation || ((opts === null || opts === void 0 ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext
    },
    children: /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
      ref: ref,
      onKeyDownCapture: handleKeyDown,
      className: cn("relative", className),
      role: "region",
      "aria-roledescription": "carousel"
    }, props), {}, {
      children: children
    }))
  });
});
Carousel.displayName = "Carousel";
var CarouselContent = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  var {
      className
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var {
    carouselRef,
    orientation
  } = useCarousel();
  return /*#__PURE__*/_jsx("div", {
    ref: carouselRef,
    className: "overflow-hidden",
    children: /*#__PURE__*/_jsx("div", _objectSpread({
      ref: ref,
      className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)
    }, props))
  });
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = /*#__PURE__*/React.forwardRef((_ref3, ref) => {
  var {
      className
    } = _ref3,
    props = _objectWithoutProperties(_ref3, _excluded3);
  var {
    orientation
  } = useCarousel();
  return /*#__PURE__*/_jsx("div", _objectSpread({
    ref: ref,
    role: "group",
    "aria-roledescription": "slide",
    className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)
  }, props));
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = /*#__PURE__*/React.forwardRef((_ref4, ref) => {
  var {
      className,
      variant = "outline",
      size = "icon"
    } = _ref4,
    props = _objectWithoutProperties(_ref4, _excluded4);
  var {
    orientation,
    scrollPrev,
    canScrollPrev
  } = useCarousel();
  return /*#__PURE__*/_jsxs(Button, _objectSpread(_objectSpread({
    ref: ref,
    variant: variant,
    size: size,
    className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
    disabled: !canScrollPrev,
    onClick: scrollPrev
  }, props), {}, {
    children: [/*#__PURE__*/_jsx(ArrowLeft, {
      className: "h-4 w-4"
    }), /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "Previous slide"
    })]
  }));
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = /*#__PURE__*/React.forwardRef((_ref5, ref) => {
  var {
      className,
      variant = "outline",
      size = "icon"
    } = _ref5,
    props = _objectWithoutProperties(_ref5, _excluded5);
  var {
    orientation,
    scrollNext,
    canScrollNext
  } = useCarousel();
  return /*#__PURE__*/_jsxs(Button, _objectSpread(_objectSpread({
    ref: ref,
    variant: variant,
    size: size,
    className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
    disabled: !canScrollNext,
    onClick: scrollNext
  }, props), {}, {
    children: [/*#__PURE__*/_jsx(ArrowRight, {
      className: "h-4 w-4"
    }), /*#__PURE__*/_jsx("span", {
      className: "sr-only",
      children: "Next slide"
    })]
  }));
});
CarouselNext.displayName = "CarouselNext";
export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };