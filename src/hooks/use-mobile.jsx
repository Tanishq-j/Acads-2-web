import * as React from "react";
var MOBILE_BREAKPOINT = 768;
export function useIsMobile() {
  var [isMobile, setIsMobile] = React.useState(undefined);
  React.useEffect(() => {
    var mql = window.matchMedia("(max-width: ".concat(MOBILE_BREAKPOINT - 1, "px)"));
    var onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}