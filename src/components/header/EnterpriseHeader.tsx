import { useState } from 'react';

const EnterpriseHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-gray-900 text-white shadow-lg'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>fouzJs</h1>
        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'
          >
            {isOpen ? (
              <svg
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
        {/* Desktop Menu */}
        <nav className='hidden md:flex space-x-4'>
          <a href='#' className='hover:text-gray-300'>
            Home
          </a>
          <a href='#' className='hover:text-gray-300'>
            Blog
          </a>
          <a href='#' className='hover:text-gray-300'>
            About
          </a>
          <a href='#' className='hover:text-gray-300'>
            Contact
          </a>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-gray-800 py-4'>
          <a href='#' className='block text-white px-4 py-2 hover:bg-gray-700'>
            Home
          </a>
          <a href='#' className='block text-white px-4 py-2 hover:bg-gray-700'>
            Blog
          </a>
          <a href='#' className='block text-white px-4 py-2 hover:bg-gray-700'>
            About
          </a>
          <a href='#' className='block text-white px-4 py-2 hover:bg-gray-700'>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default EnterpriseHeader;
