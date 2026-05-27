"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [hoverType, setHoverType] = useState(null); // 'button' | 'link' | 'card' | 'icon' | 'custom'
  const [hoverText, setHoverText] = useState("");
  const cursorRef = useRef(null);

  // High performance motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics configuration for cinematic trailing lag
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 1. Device detection (mobile/tablet & touch bypass)
    const checkDevice = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
      const isSmallScreen = window.innerWidth < 1024;
      const mobileOrTouch = isTouch || isSmallScreen;

      setIsMobile(mobileOrTouch);
      setIsVisible(!mobileOrTouch);

      if (!mobileOrTouch) {
        document.documentElement.classList.add("custom-cursor-active");
      } else {
        document.documentElement.classList.remove("custom-cursor-active");
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    // 2. Track mouse position
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Make cursor visible on first movement (if desktop)
      if (!isMobile && !isVisible) {
        setIsVisible(true);
      }
    };

    // Make sure cursor hides when mouse leaves viewport
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => {
      if (!isMobile) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // 3. Centralized hover detection system using Event Delegation
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Scan closest element hierarchy for interactive classes or selectors
      const isButton = target.closest("button") || target.closest("[role='button']") || target.closest(".btn");
      const isLink = target.closest("a");
      const isCard = target.closest(".glass-card") || target.closest("[data-hover-card]");
      const isIcon = target.closest("svg") || target.closest(".icon-hover") || target.closest(".group-hover\\:scale-110");
      const cursorText = target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");

      if (cursorText) {
        setHoverType("custom");
        setHoverText(cursorText);
      } else if (isButton) {
        setHoverType("button");
      } else if (isLink) {
        setHoverType("link");
      } else if (isCard) {
        setHoverType("card");
      } else if (isIcon) {
        setHoverType("icon");
      }
    };

    const handleMouseOut = () => {
      setHoverType(null);
      setHoverText("");
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [mouseX, mouseY, isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  // Custom states mapping based on hover target type
  const getCursorStyles = () => {
    switch (hoverType) {
      case "button":
        return {
          dot: { scale: 0.1, opacity: 0 },
          ring: {
            width: 56,
            height: 56,
            borderColor: "rgba(220, 184, 255, 0.9)", // Glowing primary purple
            backgroundColor: "rgba(138, 43, 226, 0.08)",
            boxShadow: "0 0 25px rgba(138, 43, 226, 0.4)",
          },
        };
      case "link":
        return {
          dot: { scale: 1.5, backgroundColor: "#47d6ff" }, // Glowing cyan
          ring: {
            width: 48,
            height: 48,
            borderColor: "rgba(71, 214, 255, 0.6)",
            backgroundColor: "rgba(71, 214, 255, 0.05)",
            boxShadow: "0 0 20px rgba(71, 214, 255, 0.3)",
          },
        };
      case "card":
        return {
          dot: { scale: 1 },
          ring: {
            width: 72,
            height: 72,
            borderColor: "rgba(220, 184, 255, 0.4)",
            borderStyle: "dashed",
            backgroundColor: "transparent",
            boxShadow: "0 0 15px rgba(220, 184, 255, 0.15)",
          },
        };
      case "icon":
        return {
          dot: { scale: 1.2, backgroundColor: "#ffb873" }, // Glowing tertiary orange
          ring: {
            width: 40,
            height: 40,
            borderColor: "rgba(255, 184, 115, 0.8)",
            backgroundColor: "rgba(255, 184, 115, 0.08)",
            boxShadow: "0 0 18px rgba(255, 184, 115, 0.3)",
          },
        };
      case "custom":
        return {
          dot: { scale: 0, opacity: 0 },
          ring: {
            width: 80,
            height: 80,
            borderColor: "rgba(220, 184, 255, 0.8)",
            backgroundColor: "rgba(138, 43, 226, 0.1)",
            boxShadow: "0 0 30px rgba(138, 43, 226, 0.4)",
          },
        };
      default:
        return {
          dot: { scale: 1, backgroundColor: "#dcb8ff" },
          ring: {
            width: 32,
            height: 32,
            borderColor: "rgba(220, 184, 255, 0.3)",
            borderStyle: "solid",
            backgroundColor: "transparent",
            boxShadow: "0 0 10px rgba(138, 43, 226, 0.05)",
          },
        };
    }
  };

  const cursorStyles = getCursorStyles();

  return (
    <>
      {/* Global CSS Inject to hide standard cursor on desktop only */}
      <style jsx="true" global="true">{`
        @media (min-width: 1024px) {
          .custom-cursor-active,
          .custom-cursor-active * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Main Cursor Wrap (coordinates shifted by half size so it perfectly centers) */}
      <div
        ref={cursorRef}
        className="fixed inset-0 pointer-events-none z-[99999]"
      >
        {/* Trailing Custom Ring */}
        <motion.div
          style={{
            x: trailX,
            y: trailY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            width: cursorStyles.ring.width,
            height: cursorStyles.ring.height,
            borderColor: cursorStyles.ring.borderColor,
            backgroundColor: cursorStyles.ring.backgroundColor,
            boxShadow: cursorStyles.ring.boxShadow,
            borderStyle: cursorStyles.ring.borderStyle || "solid",
          }}
          transition={{
            type: "tween",
            ease: "backOut",
            duration: 0.3,
          }}
          className="absolute rounded-full border flex items-center justify-center mix-blend-screen overflow-hidden backdrop-blur-[1px]"
        >
          {/* Custom scan rotation effect for card-hovers (dashed) */}
          {hoverType === "card" && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-0 border border-dashed border-primary/30 rounded-full scale-110"
            />
          )}

          {/* Pulse aura for icons */}
          {hoverType === "icon" && (
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-tertiary/20 rounded-full"
            />
          )}

          {/* Custom text renderer inside the ring */}
          {hoverType === "custom" && hoverText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-code-label text-[10px] font-bold text-white tracking-[0.2em] uppercase drop-shadow-[0_0_8px_rgba(220,184,255,0.8)]"
            >
              {hoverText}
            </motion.span>
          )}
        </motion.div>

        {/* Precise Focus Cursor Dot */}
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: cursorStyles.dot.scale,
            opacity: cursorStyles.dot.opacity !== undefined ? cursorStyles.dot.opacity : 1,
            backgroundColor: cursorStyles.dot.backgroundColor || "#dcb8ff",
          }}
          transition={{
            type: "tween",
            duration: 0.15,
          }}
          className="absolute w-2 h-2 rounded-full mix-blend-screen shadow-[0_0_10px_rgba(220,184,255,0.8)]"
        />
      </div>
    </>
  );
}
