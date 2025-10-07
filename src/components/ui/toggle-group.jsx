var _excluded = ["className", "variant", "size", "children"],
  _excluded2 = ["className", "children", "variant", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";
import { jsx as _jsx } from "react/jsx-runtime";
var ToggleGroupContext = /*#__PURE__*/React.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      className,
      variant,
      size,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ToggleGroupPrimitive.Root, _objectSpread(_objectSpread({
    ref: ref,
    className: cn("flex items-center justify-center gap-1", className)
  }, props), {}, {
    children: /*#__PURE__*/_jsx(ToggleGroupContext.Provider, {
      value: {
        variant,
        size
      },
      children: children
    })
  }));
});
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  var {
      className,
      children,
      variant,
      size
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var context = React.useContext(ToggleGroupContext);
  return /*#__PURE__*/_jsx(ToggleGroupPrimitive.Item, _objectSpread(_objectSpread({
    ref: ref,
    className: cn(toggleVariants({
      variant: context.variant || variant,
      size: context.size || size
    }), className)
  }, props), {}, {
    children: children
  }));
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
export { ToggleGroup, ToggleGroupItem };