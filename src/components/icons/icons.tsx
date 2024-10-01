const BlogIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20 4v16H4V4h16m2-2H2v20h20V2z' />
    <circle cx='7' cy='7' r='1' />
    <circle cx='17' cy='7' r='1' />
    <circle cx='7' cy='17' r='1' />
    <circle cx='17' cy='17' r='1' />
  </svg>
);

const ColorfulBlogIcon = ({ color = '#f1f1f1' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20 4v16H4V4h16m2-2H2v20h20V2z' />
    <circle cx='7' cy='7' r='1' fill={color} />
    <circle cx='17' cy='7' r='1' fill={color} />
    <circle cx='7' cy='17' r='1' fill={color} />
    <circle cx='17' cy='17' r='1' fill={color} />
  </svg>
);

const AboutIcon = ({ color = '#f1f1f1', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='10' />
    <line x1='12' y1='16' x2='12' y2='12' />
    <line x1='12' y1='8' x2='12' y2='8' />
  </svg>
);

const EditIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 20h9' />
    <path d='M9 16l2 2 4-4' />
    <circle cx='18' cy='5' r='3' />
    <circle cx='6' cy='19' r='2' />
  </svg>
);
const LoginIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20 12H4M4 12l6-6m0 12l-6-6' />
    <path d='M13 18v-5H8v-2h5V6l6 6-6 6z' />
  </svg>
);

const RegisterIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='4' width='18' height='16' rx='2' ry='2' />
    <path d='M16 11h4m-2-2h2m-2 4h2' />
  </svg>
);

const CreateIcon = ({ color = '#f1f1f1', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
  >
    <path d='M12 20h9' />
    <path d='M15 17.5l4.5-4.5-4.5-4.5' />
    <path d='M4 4h8v8H4z' />
  </svg>
);
const DeleteIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M3 6h18M8.6 10l-1.3 10h8l-1.3-10M12 18v-8' />
  </svg>
);
const PostIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
    <line x1='12' y1='8' x2='12' y2='16' />
    <line x1='8' y1='12' x2='16' y2='12' />
  </svg>
);
const ContactIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M22 2v20H2V2h20zm-2 2H4v16h16V4z' />
    <path d='M16 7h4M16 11h4M16 15h4M8 7h4m0 4h4m0 4h4' />
  </svg>
);
const UpdateIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M22 12h-4l3-3m-2 5h-9a7 7 0 1 1 0-14h11' />
  </svg>
);
const DashboardIcon = ({ color = '#000', size = 24 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke={color}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='4' width='18' height='16' rx='2' ry='2' />
    <line x1='12' y1='4' x2='12' y2='20' />
    <line x1='3' y1='12' x2='21' y2='12' />
  </svg>
);

export {
  DashboardIcon,
  UpdateIcon,
  ContactIcon,
  PostIcon,
  DeleteIcon,
  CreateIcon,
  RegisterIcon,
  LoginIcon,
  EditIcon,
  AboutIcon,
  BlogIcon,
  ColorfulBlogIcon,
};
