import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MotionDropdown from '../dropdown/MotionDropdown.tsx';
import Dropdown from '../dropdown/Dropdown.tsx';

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar';

let regex = /\//g;
const defaultLinks = ['/', '/about', '/blog', '/contact'];

export default function Navbar({ links = defaultLinks }: { links: string[] }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  let { pathname } = useLocation();

  return (
    <NextUINavbar
      className='bg-white opacity-90'
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          className='text-white'
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent
        className='sm:hidden text-white bg-rose-500 p-3'
        justify='center'
      >
        <NavbarBrand>
          <Dropdown />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4 ' justify='center'>
        <NavbarBrand className='bg-rose-500 h-full relative'>
          <MotionDropdown />
        </NavbarBrand>

        {links?.map((link, index) => (
          <NavbarItem key={index}>
            <Link
              className={
                pathname !== link
                  ? 'capitalize text-gray-900'
                  : 'capitalize font-black text-sky-900'
              }
              to={link}
            >
              <span>{link ? link.replace(regex, ' ') : null} </span>
              <span>{link === '/' ? 'home' : null}</span>
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className='pt-16'>
        <div className='flex pb-4 border-b border-gray-700'>
          <img
            className='w-[25px] h-auto'
            src='/images/www.png'
            alt='my logo'
          />
          <span className='ml-2 font-black'>Travels Dashboard</span>
        </div>

        {links.map((link, index) => (
          <NavbarMenuItem
            key={index}
            className={pathname !== link ? 'block' : 'hidden'}
          >
            <Link
              className='text-slate-900 capitalize font-medium hover:tracking-wider hover:font-extrabold hover:text-slate-600'
              to={link}
            >
              <span className=''>
                {pathname !== link ? link.replace(regex, ' ') : null}{' '}
              </span>
              <span>{link === '/' && pathname !== link ? 'home' : null}</span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
