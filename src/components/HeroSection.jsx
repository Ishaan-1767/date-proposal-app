import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

/**
 * Main hero section with animated title and proposal text
 * Blue gradient theme with typewriter effect
 */
export default function HeroSection() {
  const text = "Will you go out on a date with me?";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 relative"
    >
      {/* Decorative sparkles */}
      <motion.div
        className="absolute -top-8 left-1/4"
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="text-cyan-400" size={32} />
      </motion.div>
      
      <motion.div
        className="absolute -top-8 right-1/4"
        animate={{ 
          rotate: -360,
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="text-blue-400" size={28} />
      </motion.div>

      {/* Animated heart */}
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="inline-block mb-6"
      >
        <Heart className="text-blue-500 fill-blue-500" size={72} />
      </motion.div>

      {/* Main heading with gradient */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent"
      >
        Hey Beautiful! 💙
      </motion.h1>

      {/* Typewriter effect for main question */}
      <div className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 h-20 flex items-center justify-center">
        <div>
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: 0.6 + (index * 0.05),
                duration: 0.1 
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="text-xl text-gray-600 max-w-2xl mx-auto"
      >
        I promise it'll be the best decision you make today! ✨
      </motion.p>
    </motion.div>
  );
}