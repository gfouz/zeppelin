import { Link, useLocation } from 'react-router-dom';
interface DesktopMenuProps {
  links: string[];
  color?: string;
  background?: string;
}

let regex = /\//g;

const DesktopMenu = (props: DesktopMenuProps) => {
  const { links, color, background } = props;
  let { pathname } = useLocation();
  return (
    <div className='hidden md:flex items-center space-x-4'>
      {links?.map((link) => (
        <div key={link} className={pathname !== link ? 'block' : 'hidden'}>
          <Link
            to={link}
            className={`${color} ${background} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold`}
          >
            <span>{pathname !== link ? link.replace(regex, ' ') : null} </span>
            <span>{link === '/' && pathname !== link ? 'home' : null}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default DesktopMenu;
