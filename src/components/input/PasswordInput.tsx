import React from 'react';
import { Input } from '@nextui-org/input';
import EyeButton from '../buttons/EyeButton';
import { InputProps } from '../../schemas/auth.schema.ts';

const PasswordInput = (props: InputProps) => {
  const { color, errors, register } = props;
  const [type, setType] = React.useState('password');

  return (
    <Input
      type={type}
      color={color}
      label='Password'
      variant='underlined'
      labelPlacement='outside'
      {...register('password')}
      placeholder='Enter your Password'
      classNames={{
        label: 'dark:!text-white',
        input: 'text-white tracking-wider',
      }}
      isInvalid={errors?.password?.message ? true : false}
      errorMessage={`${errors?.password?.message}`}
      endContent={<EyeButton color={color} type={type} setType={setType} />}
    />
  );
};

export default PasswordInput;
