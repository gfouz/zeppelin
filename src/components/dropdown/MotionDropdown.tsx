import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/button';
import { variants, variants2 } from './constants.ts';

const Dropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <section className='relative  w-[130px] bg-sky-500 pointer'>
      <div
        role='hover-button'
        className='flex flex-col items-center '
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='h-[64px] flex justify-center items-center'>
          <Button
            variant='flat'
            className='flex w-[100px] justify-center items-center border border-gray-800 rounded-lg bg-sky-500 text-white  capitalize'
          >
            <img
              className='w-[25px] h-auto '
              src='/images/www.png'
              alt='www.png'
            />
            <span className='font-bold text-white'>Travels</span>
          </Button>
        </div>

        <motion.nav
          role='menu'
          className={` ${isOpen ? 'open' : 'closed'} bg-sky-500 w-full absolute top-[60px] left-0 rounded-b-xl`}
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
        >
          <div
            className={` ${isOpen ? 'open' : 'closed'}  capitalize h-[160px] flex flex-col justify-evenly text-center text-white text-sm`}
          >
            <motion.a
              className={` ${isOpen ? 'open' : 'closed'} justify-center items-center border-y border-sky-800  hover:bg-sky-400`}
              href='https://github.com/gfouz'
              animate={isOpen ? 'open' : 'closed'}
              variants={variants2}
            >
              github
            </motion.a>

            <motion.a
              className={` ${isOpen ? 'open' : 'closed'} justify-center items-center border-b border-sky-800 hover:bg-sky-400`}
              href='https://www.linkedin.com/in/giovani-fouz-373210258/'
              animate={isOpen ? 'open' : 'closed'}
              variants={variants2}
            >
              linkedIn
            </motion.a>

            <motion.a
              className={` ${isOpen ? 'open' : 'closed'} justify-center items-center   hover:bg-sky-400`}
              href='https://dev.to/gfouz'
              animate={isOpen ? 'open' : 'closed'}
              variants={variants2}
            >
              Community
            </motion.a>
          </div>
        </motion.nav>
      </div>
    </section>
  );
};
export default Dropdown;
