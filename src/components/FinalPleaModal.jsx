import React from 'react';
import { motion } from 'framer-motion';
import { Heart, X } from 'lucide-react';

/**
 * Dramatic final modal that blocks the screen
 * Forces user to click "Yes" by removing "No" option
 */
export default function FinalPleaModal({ isOpen, onYes, onDismiss }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onDismiss}
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0.5, rotate: 10 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-500 rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full relative"
      >
        {/* Close button (clicking it counts as another "no") */}
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Animated heart */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
          }}
          className="flex justify-center mb-6"
        >
          <Heart className="text-white fill-white" size={80} />
        </motion.div>

        {/* Plea text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-white mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Okay, okay! 🥺
          </h2>
          <p className="text-xl md:text-2xl mb-4">
            You've made your point...
          </p>
          <p className="text-lg opacity-90">
            But seriously, I really would love to take you out. Just give me one chance? I promise you won't regret it! 💙
          </p>
        </motion.div>

        {/* Only "Yes" button available */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onYes}
          className="w-full bg-white text-blue-600 font-bold text-2xl py-4 rounded-full shadow-xl hover:shadow-2xl transition-all"
        >
          Fine, YES! 💕
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-white/70 text-sm mt-4"
        >
          (The "No" button has left the chat 😅)
        </motion.p>
      </motion.div>
    </motion.div>
  );
}