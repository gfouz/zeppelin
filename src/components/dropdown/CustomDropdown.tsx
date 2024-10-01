import { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative w-[100px] rounded-t-md text-left bg-rose-500 '>
      <div>
        <button
          onClick={toggleDropdown}
          type='button'
          className='flex justify-center w-full  rounded-md px-2 py-2 text-sm font-medium text-gray-700 hover:bg-rose-300 focus:outline-none '
          id='options-menu'
        >
          Options
          <svg
            className='-mr-1 ml-2 h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M10 3a1 1 0 01.832.445l4 6a1 1 0 01-.832 1.555H6a1 1 0 01-.832-1.555l4-6A1 1 0 0110 3z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className='absolute w-[100px] bg-rose-500 left-0 top-[35px] p-2 rounded-b-md  text-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <div className='py-1' role='none'>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              role='menuitem'
            >
              Account
            </a>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              role='menuitem'
            >
              Support
            </a>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              role='menuitem'
            >
              License
            </a>
            <form method='POST' action='#'>
              <button
                type='submit'
                className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                role='menuitem'
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
