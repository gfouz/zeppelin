import React from 'react';
import { Button } from '@nextui-org/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@nextui-org/input';
import { Tooltip } from '@nextui-org/tooltip';
import { SignInSchema, SignInFormInput } from '../../schemas/user.schema';
import { useGenericMutation } from '../../hooks/useGenericMutation';
import { mutationFunction } from '../../services/mutationFunction';
import EyeButton from '../../components/buttons/EyeButton';
import { useUserStore } from '../../store/userstore.ts';
import CancelButton from '../../components/buttons/CancelButton.tsx';
import SuccessButton from '../../components/buttons/SuccessButton.tsx';
import MutationResultMessage from '../shared/MutationResultMessage.tsx';

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInput>({
    resolver: zodResolver(SignInSchema),
  });
  const [type, setType] = React.useState('password');

  const dispatch = useUserStore((state) => state.dispatch);

  const url = 'http://127.0.0.1:8000/api/users/login';
  const queryKey = ['sign-in'];
  const mutationKey = ['none'];

  const { mutation } = useGenericMutation(
    mutationFunction,
    url,
    'POST',
    queryKey,
    mutationKey,
  );
  const onSubmit: SubmitHandler<SignInFormInput> = async (
    data: SignInFormInput,
  ) => {
    const res = await mutation.mutateAsync(data);
    dispatch({ type: 'SET_USER', payload: res });
  };
  return (
    <div className='flex items-center py-20 justify-center'>
      <div className='p-8  rounded-3xl shadow-lg w-full max-w-md dark:border'>
        <h2 className='text-3xl font-extrabold tracking-tight mb-15 text-center'>
          Iniciar Sesión
        </h2>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <Tooltip
            color='warning'
            content='Usuario podria ser sus iniciales + año de nacimiento'
          >
            <div className='my-8'>
              <div className='w-full mb-5'>
                <Input
                  label='Usuario'
                  variant='underlined'
                  labelPlacement='outside'
                  {...register('username')}
                  classNames={{
                    label: 'dark:!text-white',
                    input: 'text-white tracking-wider',
                  }}
                  isInvalid={errors.username?.message ? true : false}
                  errorMessage={`${errors.username?.message}`}
                />
              </div>
            </div>
          </Tooltip>

          <div className='py-4'>
            <div className='w-full'>
              <Input
                type={type}
                label='Contraseña'
                variant='underlined'
                labelPlacement='outside'
                {...register('password')}
                classNames={{
                  label: 'dark:!text-white',
                  input: 'text-white tracking-wider',
                }}
                isInvalid={errors?.password?.message ? true : false}
                errorMessage={`${errors?.password?.message}`}
                endContent={
                  <EyeButton color='primary' type={type} setType={setType} />
                }
              />
            </div>
          </div>
          <div className='w-full flex py-10'>
            {mutation?.status === 'success' ? (
              <SuccessButton />
            ) : (
              <div className='w-full flex justify-evenly p-4 my-8'>
                <Button color='primary' type='submit' className='px-10'>
                  Sign In
                </Button>
                <CancelButton />
              </div>
            )}
          </div>
        </form>
        <section>
          <MutationResultMessage
            mutation={mutation}
            link='/flights'
          />
        </section>
      </div>
    </div>
  );
};

export default SignInForm;
