import React from 'react';
import { motion } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react'
import ReactConfetti from 'react-confetti'
import confettiIcon from '../assets/images/confetti.png'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const navigate = useNavigate();

  const calculateTimeLeft = () => {
    const difference = +new Date("2025-01-10") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const handleConfettiClick = useCallback(() => {
    setShowConfetti(true);
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  }, []);

  const handleHaldiReveal = () => {
    navigate('/haldi');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen overflow-hidden"
    >
      <div className='bg-gradient-to-br from-[#1A1E2A] via-[#2D3142] to-[#1A1E2A] w-full h-full flex flex-col items-center justify-between relative p-4'>
        <div className="bokeh-background"></div>
        {showConfetti && (
          <ReactConfetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={150}
            gravity={0.5}
            initialVelocityY={20}
            origin={{ x: 0.5, y: 1 }}
            colors={['#EF8354', '#4F5D75', '#BFC0C0', '#FFFFFF', '#FFD700']}
          />
        )}
        <div className='flex flex-col items-center justify-center w-full z-10 flex-grow'>
          <div className='bg-black bg-opacity-70 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-3xl backdrop-blur-sm'>
            <div className='text-[#BFC0C0] text-center text-base sm:text-xl mb-2 sm:mb-4 font-semibold'>
              Countdown To Aamir Hussain WEDS Raffat Jahan
            </div>
            <div className='flex justify-between'>
              {Object.keys(timeLeft).map((interval) => (
                <div key={interval} className='flex flex-col items-center'>
                  <div className='text-[#EF8354] text-2xl sm:text-4xl font-bold mb-1'>
                    {timeLeft[interval]}
                  </div>
                  <div className='text-[#BFC0C0] text-xs sm:text-sm capitalize'>
                    {interval}
                  </div>
                </div>
              ))}
            </div>    
          </div>
          <img
            src={confettiIcon}
            alt="Confetti"
            className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-110 transition-transform duration-300 mt-4"
            onClick={handleConfettiClick}
          />
        </div>
        <div className='w-full mt-2 z-10 flex justify-between items-end'>
          <button
            onClick={handleHaldiReveal}
            className="bg-[#EF8354] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-[#D76C3B] transition-colors duration-300 text-sm sm:text-base"
          >
            More Information
          </button>
          <span className='text-[#EF8354] animate-gradient-x text-base sm:text-xl'>
            10th January 2025
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default HomePage