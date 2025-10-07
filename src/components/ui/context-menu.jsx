var _excluded = ["className", "inset", "children"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className", "inset"],
  _excluded5 = ["className", "children", "checked"],
  _excluded6 = ["className", "children"],
  _excluded7 = ["className", "inset"],
  _excluded8 = ["className"],
  _excluded9 = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ContextMenu = ContextMenuPrimitive.Root;
var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
var ContextMenuGroup = ContextMenuPrimitive.Group;
var ContextMenuPortal = ContextMenuPrimitive.Portal;
var ContextMenuSub = ContextMenuPrimitive.Sub;
var ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
var ContextMenuSubTrigger = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      className,
      inset,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsxs(ContextMenuPrimitive.SubTrigger, _objectSpread(_objectSpread({
    ref: ref,
    className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", inset && "pl-8", className)
  }, props), {}, {
    children: [children, /*#__PURE__*/_jsx(ChevronRight, {
      className: "ml-auto h-4 w-4"
    })]
  }));
});
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var ContextMenuSubContent = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  var {
      className
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_jsx(ContextMenuPrimitive.SubContent, _objectSpread({
    ref: ref,
    className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
  }, props));
});
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
var ContextMenuContent = /*#__PURE__*/React.forwardRef((_ref3, ref) => {
  var {
      className
    } = _ref3,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_jsx(ContextMenuPrimitive.Portal, {
    children: /*#__PURE__*/_jsx(ContextMenuPrimitive.Content, _objectSpread({
      ref: ref,
      className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
    }, props))
  });
});
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
var ContextMenuItem = /*#__PURE__*/React.forwardRef((_ref4, ref) => {
  var {
      className,
      inset
    } = _ref4,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_jsx(ContextMenuPrimitive.Item, _objectSpread({
    ref: ref,
    className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className)
  }, props));
});
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
var ContextMenuCheckboxItem = /*#__PURE__*/React.forwardRef((_ref5, ref) => {
  var {
      className,
      children,
      checked
    } = _ref5,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/_jsxs(ContextMenuPrimitive.CheckboxItem, _objectSpread(_objectSpread({
    ref: ref,
    className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
    checked: checked
  }, props), {}, {
    children: [/*#__PURE__*/_jsx("span", {
      className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
      children: /*#__PURE__*/_jsx(ContextMenuPrimitive.ItemIndicator, {
        children: /*#__PURE__*/_jsx(Check, {
          className: "h-4 w-4"
        })
      })
    }), children]
  }));
});
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
var ContextMenuRadioItem = /*#__PURE__*/React.forwardRef((_ref6, ref) => {
  var {
      className,
      children
    } = _ref6,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/_jsxs(ContextMenuPrimitive.RadioItem, _objectSpread(_objectSpread({
    ref: ref,
    className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
  }, props), {}, {
    children: [/*#__PURE__*/_jsx("span", {
      className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
      children: /*#__PURE__*/_jsx(ContextMenuPrimitive.ItemIndicator, {
        children: /*#__PURE__*/_jsx(Circle, {
          className: "h-2 w-2 fill-current"
        })
      })
    }), children]
  }));
});
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
var ContextMenuLabel = /*#__PURE__*/React.forwardRef((_ref7, ref) => {
  var {
      className,
      inset
    } = _ref7,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/_jsx(ContextMenuPrimitive.Label, _objectSpread({
    ref: ref,
    className: cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)
  }, props));
});
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
var ContextMenuSeparator = /*#__PURE__*/React.forwardRef((_ref8, ref) => {
  var {
      className
    } = _ref8,
    props = _objectWithoutProperties(_ref8, _excluded8);
  return /*#__PURE__*/_jsx(ContextMenuPrimitive.Separator, _objectSpread({
    ref: ref,
    className: cn("-mx-1 my-1 h-px bg-border", className)
  }, props));
});
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
var ContextMenuShortcut = _ref9 => {
  var {
      className
    } = _ref9,
    props = _objectWithoutProperties(_ref9, _excluded9);
  return /*#__PURE__*/_jsx("span", _objectSpread({
    className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className)
  }, props));
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup };