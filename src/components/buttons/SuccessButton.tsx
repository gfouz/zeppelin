import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/button';

export default function HomepageButton() {
  const navigate = useNavigate();
  return (
    <Button
      color='success'
      className='px-10'
      onClick={() => {
        navigate('/dashboard');
      }}
    >
      Dashboard
    </Button>
  );
}
