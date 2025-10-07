var _excluded = ["shouldScaleBackground"],
  _excluded2 = ["className"],
  _excluded3 = ["className", "children"],
  _excluded4 = ["className"],
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
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Drawer = _ref => {
  var {
      shouldScaleBackground = true
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(DrawerPrimitive.Root, _objectSpread({
    shouldScaleBackground: shouldScaleBackground
  }, props));
};
Drawer.displayName = "Drawer";
var DrawerTrigger = DrawerPrimitive.Trigger;
var DrawerPortal = DrawerPrimitive.Portal;
var DrawerClose = DrawerPrimitive.Close;
var DrawerOverlay = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  var {
      className
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_jsx(DrawerPrimitive.Overlay, _objectSpread({
    ref: ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className)
  }, props));
});
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
var DrawerContent = /*#__PURE__*/React.forwardRef((_ref3, ref) => {
  var {
      className,
      children
    } = _ref3,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_jsxs(DrawerPortal, {
    children: [/*#__PURE__*/_jsx(DrawerOverlay, {}), /*#__PURE__*/_jsxs(DrawerPrimitive.Content, _objectSpread(_objectSpread({
      ref: ref,
      className: cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className)
    }, props), {}, {
      children: [/*#__PURE__*/_jsx("div", {
        className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"
      }), children]
    }))]
  });
});
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = _ref4 => {
  var {
      className
    } = _ref4,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    className: cn("grid gap-1.5 p-4 text-center sm:text-left", className)
  }, props));
};
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = _ref5 => {
  var {
      className
    } = _ref5,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    className: cn("mt-auto flex flex-col gap-2 p-4", className)
  }, props));
};
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = /*#__PURE__*/React.forwardRef((_ref6, ref) => {
  var {
      className
    } = _ref6,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/_jsx(DrawerPrimitive.Title, _objectSpread({
    ref: ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className)
  }, props));
});
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
var DrawerDescription = /*#__PURE__*/React.forwardRef((_ref7, ref) => {
  var {
      className
    } = _ref7,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/_jsx(DrawerPrimitive.Description, _objectSpread({
    ref: ref,
    className: cn("text-sm text-muted-foreground", className)
  }, props));
});
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription };