import { Button } from '@nextui-org/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserStore, initialState } from '../../../store/userstore';

export default function LogoutButton() {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  const user = useUserStore((state) => state.user);
  const dispatch = useUserStore((state) => state.dispatch);

  const onPressEvent = () => {
    dispatch({ type: 'LOG_OUT', payload: initialState });
    navigate('/');
  };
  return pathname == '/signin' ? null : (
    <Button
      color='danger'
      onPress={() => {
        onPressEvent();
      }}
      className='h-[25px] font-extrabold tracking-widest'
    >
      {user?.id === undefined ? 'Go Back' : 'Cerrar Sesión'}
    </Button>
  );
}
