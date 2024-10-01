import { useUserStore } from '../../store/userstore.ts';

const LogoutButton = () => {
  const user = useUserStore((state) => state.user);
  const dispatch = useUserStore((state) => state.dispatch);
  return (
    <button
      type='submit'
      disabled={user?.id === undefined ? true : false}
      onClick={() => {
        dispatch({
          type: 'LOG_OUT',
          payload: { id: undefined, token: undefined },
        });
      }}
      className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
    >
      Logout
    </button>
  );
};

export default LogoutButton;
