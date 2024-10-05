import { useState, useCallback, useEffect } from 'react'
import ReactConfetti from 'react-confetti'
import confettiIcon from '../assets/images/confetti.png'

const HomePage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

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

  return (
    <div className='bg-gradient-to-br from-[#1A1E2A] via-[#2D3142] to-[#1A1E2A] w-full h-screen flex flex-col items-center justify-between relative overflow-hidden p-4'>
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
      <div className='flex flex-col items-center justify-center space-y-6 w-full z-10 flex-grow'>
        <div className='bg-black bg-opacity-70 p-6 sm:p-10 rounded-lg shadow-lg w-full max-w-4xl backdrop-blur-sm'>
          <div className='text-[#BFC0C0] text-center text-lg sm:text-2xl mb-4 sm:mb-6 font-semibold'>
            Countdown To Aamir Hussain WEDS Raffat Jahan
          </div>
          <div className='flex justify-between'>
            {Object.keys(timeLeft).map((interval) => (
              <div key={interval} className='flex flex-col items-center'>
                <div className='text-[#EF8354] text-3xl sm:text-5xl font-bold mb-1 sm:mb-2'>
                  {timeLeft[interval]}
                </div>
                <div className='text-[#BFC0C0] text-sm sm:text-xl capitalize'>
                  {interval}
                </div>
              </div>
            ))}
          </div>    
        </div>
        <img
          src={confettiIcon}
          alt="Confetti"
          className="w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:scale-110 transition-transform duration-300 mt-4"
          onClick={handleConfettiClick}
        />
      </div>
      <div className='w-full mt-4 z-10'>
        <span className='text-[#EF8354] animate-gradient-x text-1xl  sm:text-2xl  float-right'>
          10th January 2025
        </span>
      </div>
    </div>
  )
}

export default HomePage