import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Chatbot from './Chatbot';

const HaldiPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="haldi-page bg-gradient-to-br from-[#FFC107] via-[#FFD54F] to-[#FFC107] min-h-screen flex flex-col items-center justify-between p-2 sm:p-4"
    >
      <div className="text-center mb-2 sm:mb-4">
        <h1 className="text-xl sm:text-4xl font-bold text-[#2D3142] mb-1 sm:mb-2">Welcome to Nikkah Ceremony</h1>
        <p className="text-sm sm:text-xl text-[#2D3142]">Ask All Your Questions regarding Nikkah!</p>
      </div>
      <div className="w-full flex-grow flex items-center justify-center">
        <Chatbot />
      </div>
      <button
        onClick={() => navigate('/')}
        className="mt-2 sm:mt-4 bg-[#2D3142] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-[#4F5D75] transition-colors duration-300 text-xs sm:text-base"
      >
        Back to Home
      </button>
    </motion.div>
  );
};

export default HaldiPage;
