import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/button';

export default function CancelButton() {
  const navigate = useNavigate();
  return (
    <Button
      className='px-10'
      onPress={() => {
        navigate('/');
      }}
    >
      Cancel
    </Button>
  );
}
