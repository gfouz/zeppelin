import React, { SetStateAction } from 'react';

interface Props {
  isOpen: boolean;
  toggleNavbar: React.Dispatch<SetStateAction<boolean>>;
}

const HamburgerButton = ({ isOpen, toggleNavbar }: Props) => {
  return (
    <button
      onClick={() => toggleNavbar((st) => !st)}
      type='button'
      className='text-gray-300 hover:bg-gray-700 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
      aria-controls='mobile-menu'
      aria-expanded='false'
    >
      <span className='sr-only'>Open main menu</span>
      {!isOpen ? (
        <svg
          className='block h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      ) : (
        <svg
          className='block h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      )}
    </button>
  );
};
export default HamburgerButton;

/*Type 'Dispatch<SetStateAction<boolean>>' is not assignable to type 'MouseEventHandler<HTMLButtonElement>'.
  Types of parameters 'value' and 'event' are incompatible.
    Type 'MouseEvent<HTMLButtonElement, MouseEvent>' is not assignable to type 'SetStateAction<boolean>'
*/
