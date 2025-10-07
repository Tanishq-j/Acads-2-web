"use client";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

function generateStars(count, starColor) {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${starColor}`);
  }
  return shadows.join(", ");
}

function StarLayer({
  count = 1000,
  size = 1,
  transition,
  starColor = "#fff",
  className,
  ...props
}) {
  const [boxShadow, setBoxShadow] = React.useState("");
  React.useEffect(() => {
    setBoxShadow(generateStars(count, starColor));
  }, [count, starColor]);
  return (
    <motion.div
      data-slot="star-layer"
      animate={{ y: [0, -2000] }}
      transition={transition}
      className={cn("absolute top-0 left-0 w-full h-[2000px]", className)}
      {...props}
    >
      <div
        className="absolute bg-transparent rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
      <div
        className="absolute bg-transparent rounded-full top-[2000px]"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: boxShadow,
        }}
      />
    </motion.div>
  );
}

export function StarsBackground({
  children,
  className,
  factor = 0.15,
  speed = 40,
  transition = { stiffness: 80, damping: 14 },
  starColor = "#fff",
  ...props
}) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springX = useSpring(offsetX, transition);
  const springY = useSpring(offsetY, transition);

  const handleMouseMove = React.useCallback(
    (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const newOffsetX = -(e.clientX - centerX) * factor;
      const newOffsetY = -(e.clientY - centerY) * factor;
      offsetX.set(newOffsetX);
      offsetY.set(newOffsetY);
    },
    [offsetX, offsetY, factor]
  );
  return (
    <div
      data-slot="stars-background"
      className={cn(
        "relative w-full h-full overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div style={{ x: springX, y: springY }}>
        <StarLayer
          count={1000}
          size={1}
          transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
          starColor={starColor}
        />
        <StarLayer
          count={400}
          size={2}
          transition={{
            repeat: Infinity,
            duration: speed * 2,
            ease: "linear",
          }}
          starColor={starColor}
        />
        <StarLayer
          count={200}
          size={3}
          transition={{
            repeat: Infinity,
            duration: speed * 3,
            ease: "linear",
          }}
          starColor={starColor}
        />
      </motion.div>
      {children}
    </div>
  );
}

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: Path not found:", location.pathname);
  }, [location.pathname]);

  const goHome = () => navigate("/");

  return (
    <StarsBackground className="min-h-screen w-screen relative overflow-hidden text-white select-none">
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-20">
        <h1 className="text-[7rem] font-extrabold leading-none drop-shadow-[0_0_40px_rgba(255,255,255,0.4)] mb-4 select-text">
          404
        </h1>
        <p className="text-3xl md:text-4xl font-semibold max-w-xl text-center mb-8 drop-shadow-lg select-text">
          Oops! The page{" "}
          <code className="bg-white/10 rounded-md px-2 py-1 select-text">
            {location.pathname}
          </code>{" "}
          does not exist.
        </p>
        <button
          onClick={goHome}
          className="rounded-full bg-pink-600 hover:bg-pink-700 transition-colors px-10 py-4 text-white font-bold shadow-lg shadow-pink-700/70 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 select-none mb-8"
          aria-label="Go back home"
        >
          Take Me Home
        </button>
        <footer className="mb-6 text-center text-white/70 text-sm select-text">
          © {new Date().getFullYear()} ACADS KITCoEK.
        </footer>
      </div>
    </StarsBackground>
  );
};

export default NotFound;
