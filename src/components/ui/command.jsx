var _excluded = ["className"],
  _excluded2 = ["children"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Command = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      className
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(CommandPrimitive, _objectSpread({
    ref: ref,
    className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className)
  }, props));
});
Command.displayName = CommandPrimitive.displayName;
var CommandDialog = _ref2 => {
  var {
      children
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_jsx(Dialog, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/_jsx(DialogContent, {
      className: "overflow-hidden p-0 shadow-lg",
      children: /*#__PURE__*/_jsx(Command, {
        className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
        children: children
      })
    })
  }));
};
var CommandInput = /*#__PURE__*/React.forwardRef((_ref3, ref) => {
  var {
      className
    } = _ref3,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_jsxs("div", {
    className: "flex items-center border-b px-3",
    "cmdk-input-wrapper": "",
    children: [/*#__PURE__*/_jsx(Search, {
      className: "mr-2 h-4 w-4 shrink-0 opacity-50"
    }), /*#__PURE__*/_jsx(CommandPrimitive.Input, _objectSpread({
      ref: ref,
      className: cn("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className)
    }, props))]
  });
});
CommandInput.displayName = CommandPrimitive.Input.displayName;
var CommandList = /*#__PURE__*/React.forwardRef((_ref4, ref) => {
  var {
      className
    } = _ref4,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_jsx(CommandPrimitive.List, _objectSpread({
    ref: ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)
  }, props));
});
CommandList.displayName = CommandPrimitive.List.displayName;
var CommandEmpty = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/_jsx(CommandPrimitive.Empty, _objectSpread({
  ref: ref,
  className: "py-6 text-center text-sm"
}, props)));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
var CommandGroup = /*#__PURE__*/React.forwardRef((_ref5, ref) => {
  var {
      className
    } = _ref5,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/_jsx(CommandPrimitive.Group, _objectSpread({
    ref: ref,
    className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className)
  }, props));
});
CommandGroup.displayName = CommandPrimitive.Group.displayName;
var CommandSeparator = /*#__PURE__*/React.forwardRef((_ref6, ref) => {
  var {
      className
    } = _ref6,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/_jsx(CommandPrimitive.Separator, _objectSpread({
    ref: ref,
    className: cn("-mx-1 h-px bg-border", className)
  }, props));
});
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
var CommandItem = /*#__PURE__*/React.forwardRef((_ref7, ref) => {
  var {
      className
    } = _ref7,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/_jsx(CommandPrimitive.Item, _objectSpread({
    ref: ref,
    className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50", className)
  }, props));
});
CommandItem.displayName = CommandPrimitive.Item.displayName;
var CommandShortcut = _ref8 => {
  var {
      className
    } = _ref8,
    props = _objectWithoutProperties(_ref8, _excluded8);
  return /*#__PURE__*/_jsx("span", _objectSpread({
    className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className)
  }, props));
};
CommandShortcut.displayName = "CommandShortcut";
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator };