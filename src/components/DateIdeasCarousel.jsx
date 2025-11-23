import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Film, UtensilsCrossed, Music, IceCream, Gamepad2 } from 'lucide-react';

/**
 * Animated carousel showing different date ideas
 * Auto-rotates every 3 seconds with smooth transitions
 */
export default function DateIdeasCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dateIdeas = [
    { icon: Coffee, title: 'Coffee Date', desc: 'Cozy café vibes & deep talks', color: 'from-blue-400 to-cyan-400' },
    { icon: Film, title: 'Movie Night', desc: 'Popcorn & your favorite films', color: 'from-cyan-400 to-sky-400' },
    { icon: UtensilsCrossed, title: 'Dinner Date', desc: 'Amazing food & great company', color: 'from-sky-400 to-indigo-400' },
    { icon: Music, title: 'Concert', desc: 'Live music & unforgettable moments', color: 'from-indigo-400 to-blue-400' },
    { icon: IceCream, title: 'Ice Cream', desc: 'Sweet treats & sunset walks', color: 'from-blue-400 to-cyan-300' },
    { icon: Gamepad2, title: 'Game Night', desc: 'Fun games & lots of laughs', color: 'from-cyan-400 to-blue-500' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dateIdeas.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = dateIdeas[currentIndex].icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mb-10"
    >
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
        We could do something like... 🎉
      </h3>
      
      <div className="relative h-48 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className={`absolute w-full max-w-md bg-gradient-to-br ${dateIdeas[currentIndex].color} rounded-2xl p-8 shadow-2xl`}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-white"
            >
              <CurrentIcon size={64} className="mb-4" />
              <h4 className="text-3xl font-bold mb-2">{dateIdeas[currentIndex].title}</h4>
              <p className="text-lg text-white/90">{dateIdeas[currentIndex].desc}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel dots */}
      <div className="flex justify-center gap-2 mt-6">
        {dateIdeas.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-gray-300'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </motion.div>
  );
}