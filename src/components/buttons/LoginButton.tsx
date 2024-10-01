import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate('/login');
      }}
      className='flex items-center my-4 py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-slate-900 font-extrabold border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5'
    >
      Go to login
    </button>
  );
};

export default LoginButton;
