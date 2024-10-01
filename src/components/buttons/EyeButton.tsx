import React from 'react';
import {
  EyeIcon,
  EyeSlashIcon,
} from '../../components/icons/PasswordEyeIcons.tsx';

interface EyeButtonI {
  type: string;
  color?: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const EyeButton = ({ color, type, setType }: EyeButtonI) => {
  function handleClick() {
    setType((st: string) => (st = st == 'text' ? 'password' : 'text'));
  }

  return (
    <span
      onClick={handleClick}
      className='absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center'
    >
      {type === 'password' ? (
        <EyeSlashIcon color={color} />
      ) : (
        <EyeIcon color={color} />
      )}
    </span>
  );
};
export default EyeButton;
