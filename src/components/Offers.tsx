import  { useEffect, useState } from 'react';
import { FaGift, FaArrowRight, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Offers = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 300 && !hasScrolled) {
        setIsVisible(true);
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="fixed bottom-4 left-4 z-50" // Changed to left-4
        >
          <motion.div
            layout
            className={`bg-gradient-to-r from-[#6a4cb5] via-[#4f46e5] to-[#1e3a8a] rounded-lg shadow-xl ${
              isMinimized ? 'w-12 h-12' : 'w-64'
            }`}
          >
            {isMinimized ? (
              <motion.button
                onClick={toggleMinimize}
                className="w-full h-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <FaGift className="text-yellow-300 text-xl animate-bounce" />
              </motion.button>
            ) : (
              <div className="p-6 border-2 border-indigo-200/30 min-h-[300px] rounded-xl bg-gradient-to-br from-[#6a4cb5]/90 via-[#4f46e5]/90 to-[#1e3a8a]/90 backdrop-blur-sm">
      <button
        onClick={toggleMinimize}
        className="text-white relative float-right  hover:text-gray-200 transition-colors p-1"
      >
        <FaTimes className="text-xl" />
      </button>
  <div className="h-full flex flex-col justify-between">
    {/* Header with gift icon and close button */}
        <FaGift className="text-yellow-300 text-4xl animate-bounce" />
    <div className="flex justify-between items-start">
      <div className="flex items-center space-x-3">
        <span className="text-white font-bold text-lg leading-tight">
          <span className="text-yellow-300">Experience Our Services Free for 2 Months</span>
          <br />
          <span className="text-white/90">Join the Trial Now!</span>
        </span>
      </div>
    </div>

    {/* Content area with centered CTA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex-1 flex flex-col items-center justify-center space-y-6 py-8"
    >
     
      
      <Link 
        to="/trial" 
        className="w-full max-w-xs"
        onClick={toggleMinimize}
      >
        <button className="w-full flex items-center justify-center bg-white text-indigo-700 hover:bg-indigo-50 transition-all px-6  rounded-full text-base font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Start Free Trial <FaArrowRight className="ml-3 text-lg" />
        </button>
      </Link>
    </motion.div>

    {/* Optional footer */}
    <div className="text-center text-xs text-white/60">
      Offer ends soon! Limited time only.
    </div>
  </div>
</div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Offers;