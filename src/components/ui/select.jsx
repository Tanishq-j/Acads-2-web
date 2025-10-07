var _excluded = ["className", "children"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className", "children", "position"],
  _excluded5 = ["className"],
  _excluded6 = ["className", "children"],
  _excluded7 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      className,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsxs(SelectPrimitive.Trigger, _objectSpread(_objectSpread({
    ref: ref,
    className: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className)
  }, props), {}, {
    children: [children, /*#__PURE__*/_jsx(SelectPrimitive.Icon, {
      asChild: true,
      children: /*#__PURE__*/_jsx(ChevronDown, {
        className: "h-4 w-4 opacity-50"
      })
    })]
  }));
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  var {
      className
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_jsx(SelectPrimitive.ScrollUpButton, _objectSpread(_objectSpread({
    ref: ref,
    className: cn("flex cursor-default items-center justify-center py-1", className)
  }, props), {}, {
    children: /*#__PURE__*/_jsx(ChevronUp, {
      className: "h-4 w-4"
    })
  }));
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = /*#__PURE__*/React.forwardRef((_ref3, ref) => {
  var {
      className
    } = _ref3,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_jsx(SelectPrimitive.ScrollDownButton, _objectSpread(_objectSpread({
    ref: ref,
    className: cn("flex cursor-default items-center justify-center py-1", className)
  }, props), {}, {
    children: /*#__PURE__*/_jsx(ChevronDown, {
      className: "h-4 w-4"
    })
  }));
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = /*#__PURE__*/React.forwardRef((_ref4, ref) => {
  var {
      className,
      children,
      position = "popper"
    } = _ref4,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_jsx(SelectPrimitive.Portal, {
    children: /*#__PURE__*/_jsxs(SelectPrimitive.Content, _objectSpread(_objectSpread({
      ref: ref,
      className: cn("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
      position: position
    }, props), {}, {
      children: [/*#__PURE__*/_jsx(SelectScrollUpButton, {}), /*#__PURE__*/_jsx(SelectPrimitive.Viewport, {
        className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
        children: children
      }), /*#__PURE__*/_jsx(SelectScrollDownButton, {})]
    }))
  });
});
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = /*#__PURE__*/React.forwardRef((_ref5, ref) => {
  var {
      className
    } = _ref5,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/_jsx(SelectPrimitive.Label, _objectSpread({
    ref: ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
  }, props));
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = /*#__PURE__*/React.forwardRef((_ref6, ref) => {
  var {
      className,
      children
    } = _ref6,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/_jsxs(SelectPrimitive.Item, _objectSpread(_objectSpread({
    ref: ref,
    className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
  }, props), {}, {
    children: [/*#__PURE__*/_jsx("span", {
      className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
      children: /*#__PURE__*/_jsx(SelectPrimitive.ItemIndicator, {
        children: /*#__PURE__*/_jsx(Check, {
          className: "h-4 w-4"
        })
      })
    }), /*#__PURE__*/_jsx(SelectPrimitive.ItemText, {
      children: children
    })]
  }));
});
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = /*#__PURE__*/React.forwardRef((_ref7, ref) => {
  var {
      className
    } = _ref7,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/_jsx(SelectPrimitive.Separator, _objectSpread({
    ref: ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className)
  }, props));
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton };