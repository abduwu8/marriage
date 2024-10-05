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
      className="haldi-page bg-gradient-to-br from-[#FFC107] via-[#FFD54F] to-[#FFC107] min-h-screen flex flex-col items-start justify-between p-4 sm:p-6"
    >
      <div className="text-left mb-4 sm:mb-6 w-full">
        <h1 className="text-2xl sm:text-12xl font-bold text-[#2D3142] mb-2 sm:mb-3">Welcome to Nikkah Ceremony</h1>
        <p className="text-lg sm:text-18xl text-[#2D3142]">Ask All Your Questions regarding Nikkah!</p>
      </div>
      <div className="w-full flex-grow flex items-center justify-center">
        <Chatbot />
      </div>
      <button
        onClick={() => navigate('/')}
        className="mt-4 sm:mt-6 bg-[#2D3142] text-white px-4 py-2 rounded-lg hover:bg-[#4F5D75] transition-colors duration-300 text-base sm:text-lg"
      >
        Back to Home
      </button>
    </motion.div>
  );
};

export default HaldiPage;
