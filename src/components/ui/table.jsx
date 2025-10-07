var _excluded = ["className"],
  _excluded2 = ["className"],
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
import { cn } from "@/lib/utils";
import { jsx as _jsx } from "react/jsx-runtime";
var Table = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      className
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx("div", {
    className: "relative w-full overflow-auto",
    children: /*#__PURE__*/_jsx("table", _objectSpread({
      ref: ref,
      className: cn("w-full caption-bottom text-sm", className)
    }, props))
  });
});
Table.displayName = "Table";
var TableHeader = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  var {
      className
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_jsx("thead", _objectSpread({
    ref: ref,
    className: cn("[&_tr]:border-b", className)
  }, props));
});
TableHeader.displayName = "TableHeader";
var TableBody = /*#__PURE__*/React.forwardRef((_ref3, ref) => {
  var {
      className
    } = _ref3,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_jsx("tbody", _objectSpread({
    ref: ref,
    className: cn("[&_tr:last-child]:border-0", className)
  }, props));
});
TableBody.displayName = "TableBody";
var TableFooter = /*#__PURE__*/React.forwardRef((_ref4, ref) => {
  var {
      className
    } = _ref4,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_jsx("tfoot", _objectSpread({
    ref: ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)
  }, props));
});
TableFooter.displayName = "TableFooter";
var TableRow = /*#__PURE__*/React.forwardRef((_ref5, ref) => {
  var {
      className
    } = _ref5,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/_jsx("tr", _objectSpread({
    ref: ref,
    className: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)
  }, props));
});
TableRow.displayName = "TableRow";
var TableHead = /*#__PURE__*/React.forwardRef((_ref6, ref) => {
  var {
      className
    } = _ref6,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/_jsx("th", _objectSpread({
    ref: ref,
    className: cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className)
  }, props));
});
TableHead.displayName = "TableHead";
var TableCell = /*#__PURE__*/React.forwardRef((_ref7, ref) => {
  var {
      className
    } = _ref7,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/_jsx("td", _objectSpread({
    ref: ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)
  }, props));
});
TableCell.displayName = "TableCell";
var TableCaption = /*#__PURE__*/React.forwardRef((_ref8, ref) => {
  var {
      className
    } = _ref8,
    props = _objectWithoutProperties(_ref8, _excluded8);
  return /*#__PURE__*/_jsx("caption", _objectSpread({
    ref: ref,
    className: cn("mt-4 text-sm text-muted-foreground", className)
  }, props));
});
TableCaption.displayName = "TableCaption";
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };