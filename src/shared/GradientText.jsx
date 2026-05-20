"use client";

import { useState, useCallback } from "react";

export default function GradientText({
  children,
  className = "",
  colors = ["#FF2F8E", "#FF5A4F", "#C88CFF"],
  animationSpeed = 8,
  direction = "horizontal",
  pauseOnHover = true,
  showBorder = false,
}) {
  const [paused, setPaused] = useState(false);

  const gradientAngle = direction === "vertical" ? "to bottom" : "to right";
  const gradientColors = [...colors, colors[0]].join(", ");

  const backgroundSize = direction === "horizontal" ? "300% 100%" : "100% 300%";

  const style = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize,
    backgroundRepeat: "repeat",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    animation: `gradient-slide ${animationSpeed}s linear infinite`,
    animationPlayState: paused ? "paused" : "running",
  };

  const onEnter = useCallback(() => {
    if (pauseOnHover) setPaused(true);
  }, [pauseOnHover]);
  const onLeave = useCallback(() => {
    if (pauseOnHover) setPaused(false);
  }, [pauseOnHover]);

  return (
    <span
      className={`inline-block ${className} ${showBorder ? "px-2 py-1 rounded-md" : ""}`.trim()}
      style={style}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
    </span>
  );
}
