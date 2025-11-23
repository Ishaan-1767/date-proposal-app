import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Smart "No" button that gets harder to click
 * - Shrinks after multiple clicks
 * - Moves away on hover
 * - Eventually disappears
 */
export default function NoButtonLogic({ noCount, onNoClick, onTriggerCountdown, onForceYes }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Button text changes based on click count
  const getButtonText = () => {
    if (noCount === 0) return "No";
    if (noCount === 1) return "Are you sure?";
    if (noCount === 2) return "Really? 🥺";
    if (noCount === 3) return "Think again...";
    if (noCount === 4) return "Please?";
    if (noCount === 5) return "Pretty please?";
    if (noCount === 6) return "Last chance!";
    if (noCount === 7) return "Fine...";
    return "No";
  };

  // Button size decreases with each click
  const getButtonSize = () => {
    const baseSize = 100;
    const decrease = noCount * 12;
    return Math.max(baseSize - decrease, 40); // Minimum 40%
  };

  // Move button away on hover (after 4 clicks)
  useEffect(() => {
    if (isHovering && noCount >= 4 && noCount < 7) {
      const randomX = (Math.random() - 0.5) * 200;
      const randomY = (Math.random() - 0.5) * 200;
      setPosition({ x: randomX, y: randomY });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  }, [isHovering, noCount]);

  // Trigger countdown at click 7
  useEffect(() => {
    if (noCount === 7) {
      onTriggerCountdown();
    }
  }, [noCount, onTriggerCountdown]);

  // Hide button completely at click 9
  if (noCount >= 9) {
    return null;
  }

  // Show countdown message instead of button at click 7-8
  if (noCount >= 7 && noCount < 9) {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-center"
      >
        <p className="text-gray-600 text-sm">
          {noCount === 7 ? "Countdown starting..." : "Time's almost up! 😅"}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onNoClick}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      animate={{ 
        x: position.x, 
        y: position.y,
        scale: getButtonSize() / 100
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      whileTap={{ scale: (getButtonSize() / 100) * 0.9 }}
      className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3 px-8 rounded-full shadow-lg transition-colors"
      style={{
        fontSize: `${Math.max(16 - noCount * 1, 12)}px`
      }}
    >
      {getButtonText()}
    </motion.button>
  );
}