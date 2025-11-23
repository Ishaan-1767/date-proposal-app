import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

/**
 * Minimal floating background elements with blue theme
 * Only 6 elements total for a clean look
 */
export default function FloatingElements() {
  const elements = [
    { Icon: Heart, color: 'text-blue-400', size: 24, duration: 15, delay: 0 },
    { Icon: Sparkles, color: 'text-cyan-300', size: 20, duration: 18, delay: 2 },
    { Icon: Star, color: 'text-sky-400', size: 22, duration: 20, delay: 4 },
    { Icon: Heart, color: 'text-indigo-400', size: 26, duration: 16, delay: 1 },
    { Icon: Sparkles, color: 'text-blue-300', size: 18, duration: 19, delay: 3 },
    { Icon: Star, color: 'text-cyan-400', size: 20, duration: 17, delay: 5 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((item, i) => {
        const { Icon, color, size, duration, delay } = item;
        const startX = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className={`absolute ${color} opacity-20`}
            style={{
              left: `${startX}%`,
            }}
            initial={{ 
              y: '100vh',
              rotate: 0,
            }}
            animate={{
              y: '-100px',
              rotate: 360,
              x: [0, 30, -30, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear",
            }}
          >
            <Icon size={size} />
          </motion.div>
        );
      })}
    </div>
  );
}