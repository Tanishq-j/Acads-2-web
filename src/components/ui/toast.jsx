var _excluded = ["className"],
  _excluded2 = ["className", "variant"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      className
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ToastPrimitives.Viewport, _objectSpread({
    ref: ref,
    className: cn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className)
  }, props));
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
  variants: {
    variant: {
      default: "border bg-background text-foreground",
      destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Toast = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  var {
      className,
      variant
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_jsx(ToastPrimitives.Root, _objectSpread({
    ref: ref,
    className: cn(toastVariants({
      variant
    }), className)
  }, props));
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = /*#__PURE__*/React.forwardRef((_ref3, ref) => {
  var {
      className
    } = _ref3,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_jsx(ToastPrimitives.Action, _objectSpread({
    ref: ref,
    className: cn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className)
  }, props));
});
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = /*#__PURE__*/React.forwardRef((_ref4, ref) => {
  var {
      className
    } = _ref4,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_jsx(ToastPrimitives.Close, _objectSpread(_objectSpread({
    ref: ref,
    className: cn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
    "toast-close": ""
  }, props), {}, {
    children: /*#__PURE__*/_jsx(X, {
      className: "h-4 w-4"
    })
  }));
});
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = /*#__PURE__*/React.forwardRef((_ref5, ref) => {
  var {
      className
    } = _ref5,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/_jsx(ToastPrimitives.Title, _objectSpread({
    ref: ref,
    className: cn("text-sm font-semibold", className)
  }, props));
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = /*#__PURE__*/React.forwardRef((_ref6, ref) => {
  var {
      className
    } = _ref6,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/_jsx(ToastPrimitives.Description, _objectSpread({
    ref: ref,
    className: cn("text-sm opacity-90", className)
  }, props));
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;
export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction };