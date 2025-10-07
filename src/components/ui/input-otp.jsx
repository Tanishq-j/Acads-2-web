var _excluded = ["className", "containerClassName"],
  _excluded2 = ["className"],
  _excluded3 = ["index", "className"];
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import { cn } from "@/lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var InputOTP = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      className,
      containerClassName
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(OTPInput, _objectSpread({
    ref: ref,
    containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
    className: cn("disabled:cursor-not-allowed", className)
  }, props));
});
InputOTP.displayName = "InputOTP";
var InputOTPGroup = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  var {
      className
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_jsx("div", _objectSpread({
    ref: ref,
    className: cn("flex items-center", className)
  }, props));
});
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = /*#__PURE__*/React.forwardRef((_ref3, ref) => {
  var {
      index,
      className
    } = _ref3,
    props = _objectWithoutProperties(_ref3, _excluded3);
  var inputOTPContext = React.useContext(OTPInputContext);
  var {
    char,
    hasFakeCaret,
    isActive
  } = inputOTPContext.slots[index];
  return /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
    ref: ref,
    className: cn("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-2 ring-ring ring-offset-background", className)
  }, props), {}, {
    children: [char, hasFakeCaret && /*#__PURE__*/_jsx("div", {
      className: "pointer-events-none absolute inset-0 flex items-center justify-center",
      children: /*#__PURE__*/_jsx("div", {
        className: "h-4 w-px animate-caret-blink bg-foreground duration-1000"
      })
    })]
  }));
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = /*#__PURE__*/React.forwardRef((_ref4, ref) => {
  var props = _extends({}, (_objectDestructuringEmpty(_ref4), _ref4));
  return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({
    ref: ref,
    role: "separator"
  }, props), {}, {
    children: /*#__PURE__*/_jsx(Dot, {})
  }));
});
InputOTPSeparator.displayName = "InputOTPSeparator";
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };