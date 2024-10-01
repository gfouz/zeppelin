import React from 'react';
import EyeButton from '../buttons/EyeButton';
import Errors from '../errors/Errors.tsx';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

interface InputProps {
  type?: string;
  label: Path<{ [key: string]: string }>;
  register: UseFormRegister<{ [key: string]: string }>;
  errors: FieldErrors<{ [key: string]: string }>;
  children: React.ReactNode;
}

const MaterialDesignInput = (props: InputProps) => {
  const [_type, setType] = React.useState('password');

  const { errors, register, children, type, label } = props;

  return (
    <>
      <div className='relative z-0 w-full my-10 group'>
        <input
          id={label}
          type={!type ? _type : type}
          placeholder=''
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          {...register(label)}
        />
        <label
          htmlFor={label}
          className='peer-focus:font-medium absolute text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          {children}
        </label>
        {!type ? <EyeButton type={_type} setType={setType} /> : null}
      </div>
      <div>
        {errors[label]?.message ? (
          <Errors error={`${errors[label]?.message}`} />
        ) : null}
      </div>
    </>
  );
};

export default MaterialDesignInput;

/*Use these form elements inspired by material design from Google 
to adjust the label tag as the visual placeholder for the 
input elements using the peer-placeholder-shown and 
peer-focus utility classes. 
These components require Tailwind CSS v3.x and above.*/
