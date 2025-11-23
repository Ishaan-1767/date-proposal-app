import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingElements from './components/FloatingElements';
import HeroSection from './components/HeroSection';
import DateIdeasCarousel from './components/DateIdeasCarousel';
import ReasonsList from './components/ReasonsList';
import NoButtonLogic from './components/NoButtonLogic';
import CountdownTimer from './components/CountdownTimer';
import FinalPleaModal from './components/FinalPleaModal';
import YesConfetti from './components/YesConfetti';

/**
 * Main App Component
 * Manages the entire flow from proposal to celebration
 */
export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [showCountdown, setShowCountdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [saidYes, setSaidYes] = useState(false);

  // Handle "No" button clicks
  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
  };

  // Trigger countdown timer (after 7th "no")
  const triggerCountdown = () => {
    setShowCountdown(true);
  };

  // When countdown completes, show modal
  const handleCountdownComplete = () => {
    // Only show modal if she hasn't said yes yet
    if (!saidYes) {
      setShowCountdown(false);
      setShowModal(true);
      setNoCount(8); // Advance count
    }
  };

  // Modal dismiss counts as another "no"
  const handleModalDismiss = () => {
    setShowModal(false);
    setNoCount(prev => prev + 1); // Count 9 - removes No button
  };

  // Handle "Yes" button click
  const handleYesClick = () => {
    setSaidYes(true);
    // Immediately hide countdown and modal if they're showing
    setShowCountdown(false);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 relative overflow-hidden">
      {/* Floating background elements */}
      <FloatingElements />

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {!saidYes ? (
            <motion.div
              key="proposal"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-5xl"
            >
              {/* Main card */}
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-12">
                {/* Hero Section */}
                <HeroSection />

                {/* Date Ideas Carousel */}
                <DateIdeasCarousel />

                {/* Reasons List */}
                <ReasonsList />

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.8, duration: 0.6 }}
                  className="flex flex-wrap gap-6 justify-center items-center mt-12"
                >
                  {/* YES Button - Always visible, gets bigger */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleYesClick}
                    animate={{ 
                      scale: noCount > 5 ? 1.2 : 1,
                    }}
                    className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 text-white font-bold py-4 px-16 rounded-full text-2xl shadow-2xl hover:shadow-3xl transition-all"
                  >
                    Yes! 💙
                  </motion.button>

                  {/* NO Button - Smart logic */}
                  <NoButtonLogic
                    noCount={noCount}
                    onNoClick={handleNoClick}
                    onTriggerCountdown={triggerCountdown}
                    onForceYes={handleYesClick}
                  />
                </motion.div>

                {/* Encouragement text based on no count */}
                {noCount > 0 && noCount < 7 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mt-6 text-gray-600 text-lg"
                  >
                    {noCount <= 2 && "Come on, it'll be fun! 😊"}
                    {noCount === 3 && "I promise to make it worth your time! 💫"}
                    {noCount === 4 && "Just one chance? Pretty please? 🥺"}
                    {noCount === 5 && "The Yes button is looking lonely... 💙"}
                    {noCount === 6 && "Okay, okay... last try! 🎯"}
                  </motion.p>
                )}

                {/* Show hint when No button disappears */}
                {noCount >= 9 && !saidYes && (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center mt-6 text-blue-600 text-xl font-semibold"
                  >
                    Looks like there's only one option left... 😏✨
                  </motion.p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="w-full"
            >
              <YesConfetti />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Countdown Timer Overlay - Only show if not said yes */}
      {!saidYes && (
        <CountdownTimer
          isActive={showCountdown}
          onComplete={handleCountdownComplete}
        />
      )}

      {/* Final Plea Modal - Only show if not said yes */}
      <AnimatePresence>
        {showModal && !saidYes && (
          <FinalPleaModal
            isOpen={showModal}
            onYes={handleYesClick}
            onDismiss={handleModalDismiss}
          />
        )}
      </AnimatePresence>
    </div>
  );
}