var _excluded = ["id", "className", "children", "config"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
var THEMES = {
  light: "",
  dark: ".dark"
};
var ChartContext = /*#__PURE__*/React.createContext(null);
function useChart() {
  var context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
var ChartContainer = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
      id,
      className,
      children,
      config
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  var uniqueId = React.useId();
  var chartId = "chart-".concat(id || uniqueId.replace(/:/g, ""));
  return /*#__PURE__*/_jsx(ChartContext.Provider, {
    value: {
      config
    },
    children: /*#__PURE__*/_jsxs("div", _objectSpread(_objectSpread({
      "data-chart": chartId,
      ref: ref,
      className: cn("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className)
    }, props), {}, {
      children: [/*#__PURE__*/_jsx(ChartStyle, {
        id: chartId,
        config: config
      }), /*#__PURE__*/_jsx(RechartsPrimitive.ResponsiveContainer, {
        children: children
      })]
    }))
  });
});
ChartContainer.displayName = "Chart";
var ChartStyle = _ref2 => {
  var {
    id,
    config
  } = _ref2;
  var colorConfig = Object.entries(config).filter(_ref3 => {
    var [_, config] = _ref3;
    return config.theme || config.color;
  });
  if (!colorConfig.length) {
    return null;
  }
  return /*#__PURE__*/_jsx("style", {
    dangerouslySetInnerHTML: {
      __html: Object.entries(THEMES).map(_ref4 => {
        var [theme, prefix] = _ref4;
        return "\n".concat(prefix, " [data-chart=").concat(id, "] {\n").concat(colorConfig.map(_ref5 => {
          var _itemConfig$theme;
          var [key, itemConfig] = _ref5;
          var color = ((_itemConfig$theme = itemConfig.theme) === null || _itemConfig$theme === void 0 ? void 0 : _itemConfig$theme[theme]) || itemConfig.color;
          return color ? "  --color-".concat(key, ": ").concat(color, ";") : null;
        }).join("\n"), "\n}\n");
      }).join("\n")
    }
  });
};
var ChartTooltip = RechartsPrimitive.Tooltip;
var ChartTooltipContent = /*#__PURE__*/React.forwardRef((_ref6, ref) => {
  var {
    active,
    payload,
    className,
    indicator = "dot",
    hideLabel = false,
    hideIndicator = false,
    label,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey
  } = _ref6;
  var {
    config
  } = useChart();
  var tooltipLabel = React.useMemo(() => {
    var _config;
    if (hideLabel || !(payload !== null && payload !== void 0 && payload.length)) {
      return null;
    }
    var [item] = payload;
    var key = "".concat(labelKey || item.dataKey || item.name || "value");
    var itemConfig = getPayloadConfigFromPayload(config, item, key);
    var value = !labelKey && typeof label === "string" ? ((_config = config[label]) === null || _config === void 0 ? void 0 : _config.label) || label : itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label;
    if (labelFormatter) {
      return /*#__PURE__*/_jsx("div", {
        className: cn("font-medium", labelClassName),
        children: labelFormatter(value, payload)
      });
    }
    if (!value) {
      return null;
    }
    return /*#__PURE__*/_jsx("div", {
      className: cn("font-medium", labelClassName),
      children: value
    });
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);
  if (!active || !(payload !== null && payload !== void 0 && payload.length)) {
    return null;
  }
  var nestLabel = payload.length === 1 && indicator !== "dot";
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    className: cn("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className),
    children: [!nestLabel ? tooltipLabel : null, /*#__PURE__*/_jsx("div", {
      className: "grid gap-1.5",
      children: payload.map((item, index) => {
        var key = "".concat(nameKey || item.name || item.dataKey || "value");
        var itemConfig = getPayloadConfigFromPayload(config, item, key);
        var indicatorColor = color || item.payload.fill || item.color;
        return /*#__PURE__*/_jsx("div", {
          className: cn("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center"),
          children: formatter && (item === null || item === void 0 ? void 0 : item.value) !== undefined && item.name ? formatter(item.value, item.name, item, index, item.payload) : /*#__PURE__*/_jsxs(_Fragment, {
            children: [itemConfig !== null && itemConfig !== void 0 && itemConfig.icon ? /*#__PURE__*/_jsx(itemConfig.icon, {}) : !hideIndicator && /*#__PURE__*/_jsx("div", {
              className: cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                "h-2.5 w-2.5": indicator === "dot",
                "w-1": indicator === "line",
                "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                "my-0.5": nestLabel && indicator === "dashed"
              }),
              style: {
                "--color-bg": indicatorColor,
                "--color-border": indicatorColor
              }
            }), /*#__PURE__*/_jsxs("div", {
              className: cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"),
              children: [/*#__PURE__*/_jsxs("div", {
                className: "grid gap-1.5",
                children: [nestLabel ? tooltipLabel : null, /*#__PURE__*/_jsx("span", {
                  className: "text-muted-foreground",
                  children: (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label) || item.name
                })]
              }), item.value && /*#__PURE__*/_jsx("span", {
                className: "font-mono font-medium tabular-nums text-foreground",
                children: item.value.toLocaleString()
              })]
            })]
          })
        }, item.dataKey);
      })
    })]
  });
});
ChartTooltipContent.displayName = "ChartTooltip";
var ChartLegend = RechartsPrimitive.Legend;
var ChartLegendContent = /*#__PURE__*/React.forwardRef((_ref7, ref) => {
  var {
    className,
    hideIcon = false,
    payload,
    verticalAlign = "bottom",
    nameKey
  } = _ref7;
  var {
    config
  } = useChart();
  if (!(payload !== null && payload !== void 0 && payload.length)) {
    return null;
  }
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    className: cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className),
    children: payload.map(item => {
      var key = "".concat(nameKey || item.dataKey || "value");
      var itemConfig = getPayloadConfigFromPayload(config, item, key);
      return /*#__PURE__*/_jsxs("div", {
        className: cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"),
        children: [itemConfig !== null && itemConfig !== void 0 && itemConfig.icon && !hideIcon ? /*#__PURE__*/_jsx(itemConfig.icon, {}) : /*#__PURE__*/_jsx("div", {
          className: "h-2 w-2 shrink-0 rounded-[2px]",
          style: {
            backgroundColor: item.color
          }
        }), itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label]
      }, item.value);
    })
  });
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }
  var payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : undefined;
  var configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };