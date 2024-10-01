import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/button';

export default function SignInButton() {
  const navigate = useNavigate();
  return (
    <Button
      color='success'
      className='px-10'
      onPress={() => {
        navigate('/login');
      }}
    >
      Sign in
    </Button>
  );
}
