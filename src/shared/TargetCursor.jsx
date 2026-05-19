"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

const defaultTargetSelector = "a, button, [role='button'], .cursor-target";

export default function TargetCursor({
  targetSelector = defaultTargetSelector,
  spinDuration = 2,
  hideDefaultCursor = true,
  hoverDuration = 0.2,
  parallaxOn = true,
}) {
  const cursorRef = useRef(null);
  const cornersRef = useRef(null);
  const spinTl = useRef(null);
  const dotRef = useRef(null);
  const tickerFnRef = useRef(null);
  const targetCornerPositionsRef = useRef(null);
  const activeTargetRef = useRef(null);
  const activeStrengthRef = useRef({ current: 0 });
  const leaveHandlerRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [canHover, setCanHover] = useState(false);

  const constants = useMemo(
    () => ({
      borderWidth: 3,
      cornerSize: 12,
    }),
    []
  );

  const moveCursor = useCallback((x, y) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.12,
      ease: "power3.out",
      overwrite: "auto",
    });
  }, []);

  useEffect(() => {
    setMounted(true);

    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const touchQuery = window.matchMedia("(pointer: coarse)");

    const updatePointerMode = () => {
      const hoverMatches = hoverQuery.matches;
      setCanHover(hoverMatches);
      if (hoverMatches && hideDefaultCursor) {
        document.body.classList.add("custom-cursor-active");
      } else {
        document.body.classList.remove("custom-cursor-active");
      }
    };

    updatePointerMode();
    hoverQuery.addEventListener("change", updatePointerMode);
    touchQuery.addEventListener("change", updatePointerMode);
    window.addEventListener("resize", updatePointerMode);

    return () => {
      hoverQuery.removeEventListener("change", updatePointerMode);
      touchQuery.removeEventListener("change", updatePointerMode);
      window.removeEventListener("resize", updatePointerMode);
    };
  }, []);

  useEffect(() => {
    if (!mounted || !cursorRef.current || !canHover) return;

    const originalCursor = document.body.style.cursor;
    const hadCursorClass = document.body.classList.contains("custom-cursor-active");
    if (hideDefaultCursor) {
      document.body.style.cursor = "none";
      document.body.classList.add("custom-cursor-active");
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll(".target-cursor-corner");

    let activeTarget = null;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    spinTl.current = gsap
      .timeline({ repeat: -1 })
      .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });

    const updateCorners = () => {
      if (!cursorRef.current || !cornersRef.current || !targetCornerPositionsRef.current) return;

      const cursorX = gsap.getProperty(cursorRef.current, "x");
      const cursorY = gsap.getProperty(cursorRef.current, "y");
      const strength = activeStrengthRef.current.current;

      Array.from(cornersRef.current).forEach((corner, index) => {
        const currentX = gsap.getProperty(corner, "x");
        const currentY = gsap.getProperty(corner, "y");
        const targetX = targetCornerPositionsRef.current[index].x - cursorX;
        const targetY = targetCornerPositionsRef.current[index].y - cursorY;

        gsap.to(corner, {
          x: currentX + (targetX - currentX) * strength,
          y: currentY + (targetY - currentY) * strength,
          duration: strength >= 0.99 ? (parallaxOn ? 0.2 : 0) : 0.05,
          ease: strength >= 0.99 ? "power1.out" : "none",
          overwrite: "auto",
        });
      });
    };

    tickerFnRef.current = updateCorners;

    const moveHandler = (event) => moveCursor(event.clientX, event.clientY);
    const mouseDownHandler = () => {
      if (!dotRef.current || !cursorRef.current) return;
      gsap.to(dotRef.current, { scale: 0.7, duration: 0.2, overwrite: "auto" });
      gsap.to(cursorRef.current, { scale: 0.9, duration: 0.2, overwrite: "auto" });
    };
    const mouseUpHandler = () => {
      if (!dotRef.current || !cursorRef.current) return;
      gsap.to(dotRef.current, { scale: 1, duration: 0.2, overwrite: "auto" });
      gsap.to(cursorRef.current, { scale: 1, duration: 0.2, overwrite: "auto" });
    };

    const cleanupActiveTarget = () => {
      if (leaveHandlerRef.current && activeTarget) {
        activeTarget.removeEventListener("mouseleave", leaveHandlerRef.current);
      }
      leaveHandlerRef.current = null;
      activeTarget = null;
    };

    const restoreSpin = () => {
      if (!cursorRef.current || !spinTl.current) return;
      const currentRotation = gsap.getProperty(cursorRef.current, "rotation");
      const normalizedRotation = currentRotation % 360;
      spinTl.current.kill();
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursorRef.current, { rotation: "+=360", duration: spinDuration, ease: "none" });
      gsap.to(cursorRef.current, {
        rotation: normalizedRotation + 360,
        duration: spinDuration * (1 - normalizedRotation / 360),
        ease: "none",
        onComplete: () => spinTl.current?.restart(),
      });
    };

    const enterHandler = (event) => {
      if (!canHover) return;
      const target = event.target?.closest?.(targetSelector);
      if (!target || !cursorRef.current || !cornersRef.current) return;
      if (activeTarget === target) return;

      cleanupActiveTarget();
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }

      activeTarget = target;
      activeTargetRef.current = target;

      Array.from(cornersRef.current).forEach((corner) => gsap.killTweensOf(corner));
      gsap.killTweensOf(cursorRef.current, "rotation");
      spinTl.current?.pause();
      gsap.set(cursorRef.current, { rotation: 0 });

      const rect = target.getBoundingClientRect();
      const { borderWidth, cornerSize } = constants;
      const cursorX = gsap.getProperty(cursorRef.current, "x");
      const cursorY = gsap.getProperty(cursorRef.current, "y");

      targetCornerPositionsRef.current = [
        { x: rect.left - borderWidth, y: rect.top - borderWidth },
        { x: rect.right + borderWidth - cornerSize, y: rect.top - borderWidth },
        { x: rect.right + borderWidth - cornerSize, y: rect.bottom + borderWidth - cornerSize },
        { x: rect.left - borderWidth, y: rect.bottom + borderWidth - cornerSize },
      ];

      activeStrengthRef.current.current = 1;
      gsap.ticker.add(tickerFnRef.current);

      Array.from(cornersRef.current).forEach((corner, index) => {
        gsap.to(corner, {
          x: targetCornerPositionsRef.current[index].x - cursorX,
          y: targetCornerPositionsRef.current[index].y - cursorY,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      });

      const leaveHandler = () => {
        gsap.ticker.remove(tickerFnRef.current);
        activeStrengthRef.current.current = 0;
        targetCornerPositionsRef.current = null;
        activeTargetRef.current = null;

        if (cornersRef.current) {
          const corners = Array.from(cornersRef.current);
          gsap.killTweensOf(corners);
          const { cornerSize } = constants;
          const positions = [
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
          ];
          const tl = gsap.timeline();
          corners.forEach((corner, index) => {
            tl.to(corner, { x: positions[index].x, y: positions[index].y, duration: 0.3, ease: "power3.out" }, 0);
          });
        }

        resumeTimeoutRef.current = setTimeout(() => {
          if (!activeTargetRef.current) {
            restoreSpin();
          }
          resumeTimeoutRef.current = null;
        }, 50);

        cleanupActiveTarget();
      };

      leaveHandlerRef.current = leaveHandler;
      target.addEventListener("mouseleave", leaveHandler);
    };

    window.addEventListener("pointermove", moveHandler);
    window.addEventListener("pointerover", enterHandler, { passive: true });
    window.addEventListener("pointerdown", mouseDownHandler);
    window.addEventListener("pointerup", mouseUpHandler);

    return () => {
      if (tickerFnRef.current) {
        gsap.ticker.remove(tickerFnRef.current);
      }
      window.removeEventListener("pointermove", moveHandler);
      window.removeEventListener("pointerover", enterHandler);
      window.removeEventListener("pointerdown", mouseDownHandler);
      window.removeEventListener("pointerup", mouseUpHandler);
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
      cleanupActiveTarget();
      spinTl.current?.kill();
      document.body.style.cursor = originalCursor;
      if (hideDefaultCursor && !hadCursorClass) {
        document.body.classList.remove("custom-cursor-active");
      }
      targetCornerPositionsRef.current = null;
      activeStrengthRef.current.current = 0;
    };
  }, [canHover, constants, hideDefaultCursor, hoverDuration, mounted, moveCursor, parallaxOn, spinDuration, targetSelector]);

  if (!mounted || !canHover) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999] ${canHover ? "" : "opacity-90 scale-75"}`}
      style={{ willChange: "transform" }}
    >
      <div
        ref={dotRef}
        className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2 bg-[#FF2F8E] shadow-[0_0_18px_rgba(255,47,142,0.8)]"
        style={{ willChange: "transform" }}
      />
      <div className="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[3px] border-[#f2a8c5] -translate-x-[150%] -translate-y-[150%] border-r-0 border-b-0 shadow-[0_0_12px_rgba(242,168,197,0.35)]" />
      <div className="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[3px] border-[#f2a8c5] translate-x-1/2 -translate-y-[150%] border-l-0 border-b-0 shadow-[0_0_12px_rgba(242,168,197,0.35)]" />
      <div className="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[3px] border-[#f2a8c5] translate-x-1/2 translate-y-1/2 border-l-0 border-t-0 shadow-[0_0_12px_rgba(242,168,197,0.35)]" />
      <div className="target-cursor-corner absolute top-1/2 left-1/2 w-3 h-3 border-[3px] border-[#f2a8c5] -translate-x-[150%] translate-y-1/2 border-r-0 border-t-0 shadow-[0_0_12px_rgba(242,168,197,0.35)]" />
    </div>
  );
}