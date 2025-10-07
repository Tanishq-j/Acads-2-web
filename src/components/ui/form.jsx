var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className", "children"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { jsx as _jsx } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = /*#__PURE__*/React.createContext({});
var FormField = _ref => {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_jsx(FormFieldContext.Provider, {
    value: {
      name: props.name
    },
    children: /*#__PURE__*/_jsx(Controller, _objectSpread({}, props))
  });
};
var useFormField = () => {
  var fieldContext = React.useContext(FormFieldContext);
  var itemContext = React.useContext(FormItemContext);
  var {
    getFieldState,
    formState
  } = useFormContext();
  var fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  var {
    id
  } = itemContext;
  return _objectSpread({
    id,
    name: fieldContext.name,
    formItemId: "".concat(id, "-form-item"),
    formDescriptionId: "".concat(id, "-form-item-description"),
    formMessageId: "".concat(id, "-form-item-message")
  }, fieldState);
};
var FormItemContext = /*#__PURE__*/React.createContext({});
var FormItem = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  var {
      className
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded);
  var id = React.useId();
  return /*#__PURE__*/_jsx(FormItemContext.Provider, {
    value: {
      id
    },
    children: /*#__PURE__*/_jsx("div", _objectSpread({
      ref: ref,
      className: cn("space-y-2", className)
    }, props))
  });
});
FormItem.displayName = "FormItem";
var FormLabel = /*#__PURE__*/React.forwardRef((_ref3, ref) => {
  var {
      className
    } = _ref3,
    props = _objectWithoutProperties(_ref3, _excluded2);
  var {
    error,
    formItemId
  } = useFormField();
  return /*#__PURE__*/_jsx(Label, _objectSpread({
    ref: ref,
    className: cn(error && "text-destructive", className),
    htmlFor: formItemId
  }, props));
});
FormLabel.displayName = "FormLabel";
var FormControl = /*#__PURE__*/React.forwardRef((_ref4, ref) => {
  var props = _extends({}, (_objectDestructuringEmpty(_ref4), _ref4));
  var {
    error,
    formItemId,
    formDescriptionId,
    formMessageId
  } = useFormField();
  return /*#__PURE__*/_jsx(Slot, _objectSpread({
    ref: ref,
    id: formItemId,
    "aria-describedby": !error ? "".concat(formDescriptionId) : "".concat(formDescriptionId, " ").concat(formMessageId),
    "aria-invalid": !!error
  }, props));
});
FormControl.displayName = "FormControl";
var FormDescription = /*#__PURE__*/React.forwardRef((_ref5, ref) => {
  var {
      className
    } = _ref5,
    props = _objectWithoutProperties(_ref5, _excluded3);
  var {
    formDescriptionId
  } = useFormField();
  return /*#__PURE__*/_jsx("p", _objectSpread({
    ref: ref,
    id: formDescriptionId,
    className: cn("text-sm text-muted-foreground", className)
  }, props));
});
FormDescription.displayName = "FormDescription";
var FormMessage = /*#__PURE__*/React.forwardRef((_ref6, ref) => {
  var {
      className,
      children
    } = _ref6,
    props = _objectWithoutProperties(_ref6, _excluded4);
  var {
    error,
    formMessageId
  } = useFormField();
  var body = error ? String(error === null || error === void 0 ? void 0 : error.message) : children;
  if (!body) {
    return null;
  }
  return /*#__PURE__*/_jsx("p", _objectSpread(_objectSpread({
    ref: ref,
    id: formMessageId,
    className: cn("text-sm font-medium text-destructive", className)
  }, props), {}, {
    children: body
  }));
});
FormMessage.displayName = "FormMessage";
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };