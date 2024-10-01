import React from 'react';
import { Input } from '@nextui-org/input';
import EyeButton from '../buttons/EyeButton';
import { InputProps } from '../../schemas/auth.schema.ts';

const PasswordInput = ({ color, errors, register }: InputProps) => {
  const [type, setType] = React.useState('password');

  return (
    <Input
      label='Confirm Password'
      type={type}
      color={color}
      variant='underlined'
      labelPlacement='outside'
      placeholder='Repeat your Password'
      {...register('confirmPassword')}
      classNames={{ label: 'dark:!text-white', input: 'text-white' }}
      isInvalid={errors?.confirmPassword?.message ? true : false}
      errorMessage={`${errors?.confirmPassword?.message}`}
      endContent={<EyeButton color={color} type={type} setType={setType} />}
    />
  );
};

export default PasswordInput;
