import React from 'react';
import { motion } from 'framer-motion';

/**
 * Celebration area: confetti burst + animated message.
 * For production you could replace with a canvas fireworks library.
 */
export default function YesConfetti() {
  return (
    <div className="text-center py-16">
      <motion.div initial={{opacity:0, scale:0.8}} animate={{scale:1, opacity:1}} transition={{duration:0.8}}>
        <h2 className="text-4xl font-bold mb-4">She said YES! 🎉</h2>
        <p className="mb-6">Let's plan something — add to calendar, pick a date, and celebrate.</p>
      </motion.div>

      {/* simple confetti dots */}
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}>
        <div className="mt-8 relative h-40">
          {Array.from({length:40}).map((_,i)=>(
            <motion.span key={i} initial={{y:-20, opacity:0}} animate={{y: 120 + Math.random()*80, opacity:1}} transition={{delay: i*0.02, duration:1.2}}
              className="inline-block px-4 py-2 rounded bg-gradient-to-r from-sky-400 to-cyan-300 text-navy-900 font-semibold"
              style={{
                position:'absolute',
                left: `${(i*7)%100}%`,
                top:0,
                fontSize: 10 + (i%5)
              }}
            >✨</motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
          {/* Success heart animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 0.6,
              repeat: 3
            }}
            className="text-8xl mb-6"
          >
            💙
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent mb-6">
            OMG YES! 🎉
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-800 mb-4 font-semibold">
            You just made me the happiest person! 
          </p>
          
          <p className="text-xl text-gray-600 mb-8">
            I can't wait to spend time with you! I'll text you the details soon 💕
          </p>

          {/* Celebration emojis */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex justify-center gap-4 text-5xl"
          >
            <span>🥰</span>
            <span>✨</span>
            <span>🎊</span>
          </motion.div>

          {/* Extra sparkle effects */}
          <div className="mt-8 flex justify-center gap-3">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
              />
            ))}
          </div>

          {/* Calendar suggestion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-10 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6"
          >
            <p className="text-gray-700 text-lg font-medium mb-3">
              📅 Let's make it official!
            </p>
            <p className="text-gray-600">
              I'll reach out soon to pick the perfect day. Get ready for an amazing time! 🚀
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}