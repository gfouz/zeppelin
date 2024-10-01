import React from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import HamburgerButton from '../buttons/HamburgerButton';

interface NavbarProps {
  links: string[];
  color?: string;
  background?: string;
}

const Navbar = (props: NavbarProps) => {
  const { links, color, background = 'bg-gray-700' } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`${background}`}>
      <div className='max-w-7xl mx-auto px-6 py-3'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <a
              href='https://github.com/gfouz'
              className={`flex ${color} ${background} text-lg font-bold`}
            >
              <img
                className='w-[25px] h-auto'
                src='/images/www.png'
                alt='my logo'
              />
              <span className={`mx-1 ${color} ${background}`}>fouz.dev</span>
            </a>
          </div>
          <DesktopMenu links={links} color={color} background={background} />
          <div className='md:hidden'>
            <HamburgerButton toggleNavbar={toggleNavbar} isOpen={isOpen} />
          </div>
        </div>
      </div>

      {isOpen && <MobileMenu links={links} color={color} />}
    </nav>
  );
};

export default Navbar;
