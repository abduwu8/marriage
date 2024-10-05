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
      className="haldi-page bg-gradient-to-br from-[#FFC107] via-[#FFD54F] to-[#FFC107] min-h-screen flex flex-col items-center justify-center p-4"
    >
      <h1 className="text-4xl font-bold text-[#2D3142] mb-4">Welcome to Nikkah Ceremony</h1>
      <p className="text-xl text-[#2D3142] mb-8">Ask All Your Questions regarding Nikkah!</p>
      <Chatbot />
      <button
        onClick={() => navigate('/')}
        className="mt-8 bg-[#2D3142] text-white px-4 py-2 rounded-lg hover:bg-[#4F5D75] transition-colors duration-300"
      >
        Back to Home
      </button>
    </motion.div>
  );
};

export default HaldiPage;
