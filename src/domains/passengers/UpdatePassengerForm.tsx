import { Button } from '@nextui-org/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@nextui-org/input';
import { useUserStore } from '../../store/userstore.ts';
import { usePassengerStore } from '../../store/passengerStore.ts';
import {
  PassengerSchema,
  PassengerFormData,
} from '../../schemas/passenger.schema.ts';
import { useGenericMutation } from '../../hooks/useGenericMutation.tsx';
import { mutationFunction } from '../../services/mutationFunction.ts';
import MutationResultMessage from '../shared/MutationResultMessage.tsx';

const url = 'http://127.0.0.1:8000/api/passenger/update-passenger';

const UpdatePassengerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PassengerFormData>({
    resolver: zodResolver(PassengerSchema),
  });
  const user = useUserStore((state) => state.user);
  const passenger = usePassengerStore((state) => state.passenger);

  const { mutation } = useGenericMutation(
    mutationFunction,
    url,
    'PUT',
    ['get-flights'],
    ['update-flight'],
    user?.token,
  );

  const onSubmit: SubmitHandler<PassengerFormData> = async (
    data: PassengerFormData,
  ) => {
    await mutation.mutateAsync(data);
  };
  return (
    <div className='flex items-center py-20 justify-center'>
      <div className='p-8  rounded-3xl shadow-lg w-full max-w-md dark:border'>
        <h2 className='text-2xl font-extrabold tracking-tight mb-15 text-center'>
          Actualizar Cliente
        </h2>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Nombre'
                variant='underlined'
                {...register('first_name')}
                defaultValue={passenger?.first_name}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.first_name?.message ? true : false}
                errorMessage={`${errors?.first_name?.message}`}
              />
            </div>
          </div>

          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Apellidos'
                variant='underlined'
                {...register('last_name')}
                defaultValue={passenger?.last_name}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.last_name?.message ? true : false}
                errorMessage={`${errors?.last_name?.message}`}
              />
            </div>
          </div>
          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Pasaporte'
                variant='underlined'
                {...register('passport')}
                defaultValue={passenger?.passport}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.passport?.message ? true : false}
                errorMessage={`${errors.passport?.message}`}
              />
            </div>
          </div>
          <div className='w-full flex py-10'>
            <Button color='primary' type='submit' className='px-10'>
              {mutation.isPending ? 'Loading...' : 'Submit'}
            </Button>
            <Button color='default' className='px-10 ml-6'>
              Cancel
            </Button>
          </div>
        </form>
        <section>
          <MutationResultMessage mutation={mutation} link='/passengers' />
        </section>
      </div>
    </div>
  );
};

export default UpdatePassengerForm;