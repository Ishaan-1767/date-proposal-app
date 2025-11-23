import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Smile, Star, Zap, Coffee, Sparkles } from 'lucide-react';

/**
 * Animated list of reasons why she should say yes
 * Each reason fades in one by one with icons
 */
export default function ReasonsList() {
  const reasons = [
    { icon: Heart, text: "I'll make you smile every day", color: "text-blue-500" },
    { icon: Smile, text: "We'll have amazing conversations", color: "text-cyan-500" },
    { icon: Star, text: "You deserve to be treated special", color: "text-indigo-500" },
    { icon: Zap, text: "We'll create unforgettable memories", color: "text-sky-500" },
    { icon: Coffee, text: "I know the best spots in town", color: "text-blue-600" },
    { icon: Sparkles, text: "Life's better with great company", color: "text-cyan-600" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="mb-10"
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-2xl font-bold text-center text-gray-800 mb-6"
      >
        Why you should say yes... 💭
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: 1 + (index * 0.2),
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <Icon className={reason.color} size={32} />
                </motion.div>
                <p className="text-gray-700 font-medium flex-1">
                  {reason.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}