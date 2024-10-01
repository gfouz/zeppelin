import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quotes } from './constants.ts';

const QuoteSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000); // Change quote every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <blockquote className='relative '>
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='absolute w-full text-gray-500 text-lg'
        >
          {quotes[index].quote}
        </motion.div>
      </AnimatePresence>
    </blockquote>
  );
};

export default QuoteSlider;
