import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

/**
 * Countdown timer that appears after multiple "No" clicks
 * Creates urgency and leads to final modal
 */
export default function CountdownTimer({ isActive, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (!isActive) {
      setTimeLeft(10);
      return;
    }

    if (timeLeft === 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft, onComplete]);

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
        }}
        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4"
      >
        <Timer size={32} />
        <div>
          <p className="text-sm font-semibold">Time to decide!</p>
          <motion.p 
            key={timeLeft}
            initial={{ scale: 1.5, color: '#ffffff' }}
            animate={{ scale: 1, color: timeLeft <= 3 ? '#fca5a5' : '#ffffff' }}
            className="text-3xl font-bold"
          >
            {timeLeft}s
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}