import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/button';

interface NavButtonProps {
  name: string;
  link: string;
}

export default function NavButton({
  name = 'Homepage',
  link = '/',
}: NavButtonProps) {
  const navigate = useNavigate();
  return (
    <Button
      color='primary'
      className='px-10'
      onClick={() => {
        navigate(`${link}`);
      }}
    >
      {name}
    </Button>
  );
}
