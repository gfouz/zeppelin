import React from 'react';
import { Button } from '@nextui-org/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Tooltip } from '@nextui-org/tooltip';
import { Input } from '@nextui-org/input';
import { UserSchema, UserFormInput } from '../../schemas/user.schema';
import { useGenericMutation } from '../../hooks/useGenericMutation';
import { mutationFunction } from '../../services/mutationFunction';
import EyeButton from '../../components/buttons/EyeButton';
import { useUserStore } from '../../store/userstore.ts';
import CancelButton from '../../components/buttons/CancelButton.tsx';
import SuccessButton from '../../components/buttons/SuccessButton.tsx';
import MutationResultMessage from '../shared/MutationResultMessage.tsx';

const CreateUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInput>({
    resolver: zodResolver(UserSchema),
  });
  const [type, setType] = React.useState('password');
  const [typeTwo, setTypeTwo] = React.useState('password');

  const user = useUserStore((state) => state.user);

  const url = 'http://127.0.0.1:8000/api/users/register';
  const queryKey = ['get-users'];
  const mutationKey = ['create-user'];

  const { mutation } = useGenericMutation(
    mutationFunction,
    url,
    'POST',
    queryKey,
    mutationKey,
    user?.token,
  );
  const onSubmit: SubmitHandler<UserFormInput> = async (
    data: UserFormInput,
  ) => {
    await mutation.mutateAsync(data);
    //console.log(data);
  };
  return (
    <div className='flex items-center py-20 justify-center'>
      <div className='p-8  rounded-3xl shadow-lg w-full max-w-md dark:border'>
        <h2 className='text-3xl font-extrabold tracking-tight mb-15 text-center'>
          Registrar Usuario
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
          <div className='my-8'>
            <div className='w-full mb-5'>
              <Input
                label='Nombre'
                variant='underlined'
                labelPlacement='outside'
                {...register('first_name')}
                classNames={{
                  label: 'dark:!text-white',
                  input: 'text-white tracking-wider',
                }}
                isInvalid={errors.first_name?.message ? true : false}
                errorMessage={`${errors.first_name?.message}`}
              />
            </div>
          </div>

          <div className='my-8'>
            <div className='w-full mb-5'>
              <Input
                label='Apellido'
                variant='underlined'
                labelPlacement='outside'
                {...register('last_name')}
                classNames={{
                  label: 'dark:!text-white',
                  input: 'text-white tracking-wider',
                }}
                isInvalid={errors.last_name?.message ? true : false}
                errorMessage={`${errors.last_name?.message}`}
              />
            </div>
          </div>

          <div className='py-4'>
            <div className='w-full mb-5'>
              <Input
                type='email'
                label='Email'
                variant='underlined'
                {...register('email')}
                classNames={{
                  label: 'dark:!text-white',
                  input: 'text-white tracking-wider',
                }}
                isInvalid={errors.email?.message ? true : false}
                errorMessage={`${errors.email?.message}`}
              />
            </div>
          </div>

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
          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Confirmar Contraseña'
                type={typeTwo}
                variant='underlined'
                labelPlacement='outside'
                {...register('confirmPassword')}
                classNames={{ label: 'dark:!text-white', input: 'text-white' }}
                isInvalid={errors?.confirmPassword?.message ? true : false}
                errorMessage={`${errors?.confirmPassword?.message}`}
                endContent={
                  <EyeButton
                    color='primary'
                    type={typeTwo}
                    setType={setTypeTwo}
                  />
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
                  Sign Up
                </Button>
                <CancelButton />
              </div>
            )}
          </div>
        </form>
        <section>
          <MutationResultMessage
            mutation={mutation}
            link='/signin'
          />
        </section>
      </div>
    </div>
  );
};

export default CreateUserForm;

/*

{
  "hour": 2,
  "minute": 0,
  "second": 0,
  "millisecond": 0
}

*/
