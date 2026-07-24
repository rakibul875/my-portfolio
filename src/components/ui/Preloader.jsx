"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Duration in ms
    const duration = 2000;
    const intervalTime = 20; // update every 20ms
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= totalSteps) {
        clearInterval(interval);
      }
    }, intervalTime);

    // Hide the loader slightly after reaching 100%
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration + 300);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-surface-dim text-on-surface"
        >
          {/* Logo or Text Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            {/* Spinning Loader Ring */}
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 border-4 border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
                className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full"
              />
            </div>
            
            {/* Loading Text & Percentage */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="text-3xl font-space-grotesk font-bold text-primary">
                {progress}%
              </div>
              <div className="text-sm font-space-grotesk tracking-widest text-on-surface/70 uppercase">
                Loading...
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
