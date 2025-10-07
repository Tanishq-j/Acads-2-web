function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import * as React from "react";
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1000000;
var actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST"
};
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
var toastTimeouts = new Map();
var addToRemoveQueue = toastId => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  var timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
export var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return _objectSpread(_objectSpread({}, state), {}, {
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      });
    case "UPDATE_TOAST":
      return _objectSpread(_objectSpread({}, state), {}, {
        toasts: state.toasts.map(t => t.id === action.toast.id ? _objectSpread(_objectSpread({}, t), action.toast) : t)
      });
    case "DISMISS_TOAST":
      {
        var {
          toastId
        } = action;

        // ! Side effects ! - This could be extracted into a dismissToast() action,
        // but I'll keep it here for simplicity
        if (toastId) {
          addToRemoveQueue(toastId);
        } else {
          state.toasts.forEach(toast => {
            addToRemoveQueue(toast.id);
          });
        }
        return _objectSpread(_objectSpread({}, state), {}, {
          toasts: state.toasts.map(t => t.id === toastId || toastId === undefined ? _objectSpread(_objectSpread({}, t), {}, {
            open: false
          }) : t)
        });
      }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return _objectSpread(_objectSpread({}, state), {}, {
          toasts: []
        });
      }
      return _objectSpread(_objectSpread({}, state), {}, {
        toasts: state.toasts.filter(t => t.id !== action.toastId)
      });
  }
};
var listeners = [];
var memoryState = {
  toasts: []
};
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach(listener => {
    listener(memoryState);
  });
}
function toast(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  var id = genId();
  var update = props => dispatch({
    type: "UPDATE_TOAST",
    toast: _objectSpread(_objectSpread({}, props), {}, {
      id
    })
  });
  var dismiss = () => dispatch({
    type: "DISMISS_TOAST",
    toastId: id
  });
  dispatch({
    type: "ADD_TOAST",
    toast: _objectSpread(_objectSpread({}, props), {}, {
      id,
      open: true,
      onOpenChange: open => {
        if (!open) dismiss();
      }
    })
  });
  return {
    id: id,
    dismiss,
    update
  };
}
function useToast() {
  var [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      var index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return _objectSpread(_objectSpread({}, state), {}, {
    toast,
    dismiss: toastId => dispatch({
      type: "DISMISS_TOAST",
      toastId
    })
  });
}
export { useToast, toast };