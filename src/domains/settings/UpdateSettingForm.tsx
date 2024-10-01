import { Button } from '@nextui-org/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@nextui-org/input';
import { Tooltip } from '@nextui-org/tooltip';

import { useUserStore } from '../../store/userstore.ts';
import { useSettingStore } from '../../store/settingStore.ts';
import { SettingFormData, settingSchema } from '../../schemas/settings.schema';
import { useGenericMutation } from '../../hooks/useGenericMutation.tsx';
import { mutationFunction } from '../../services/mutationFunction.ts';
import MutationResultMessage from '../shared/MutationResultMessage.tsx';

const UpdateSettingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingFormData>({
    resolver: zodResolver(settingSchema),
  });
  //Global store hooks
  const user = useUserStore((state) => state.user);
  const { setting } = useSettingStore((state) => state);
  //--------------------------------------------------
  const url = `http://127.0.0.1:8000/api/settings/update-setting/${setting?.id}`;

  const { mutation } = useGenericMutation(
    mutationFunction,
    url,
    'PUT',
    ['get-settings'],
    ['create-setting'],
    user?.token,
  );
  const onSubmit: SubmitHandler<SettingFormData> = async (
    data: SettingFormData,
  ) => {
    await mutation.mutateAsync(data);
    //console.log(mutation.failureReason);
  };

  return (
    <div className='flex items-center py-20 justify-center'>
      <div className='p-8  rounded-3xl shadow-lg w-full max-w-md dark:border'>
        <h2 className='text-xl font-medium mb-15 text-center'>
          Modificar Ajustes
        </h2>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <div className='my-8'>
            <div className='w-full mb-5'>
              <Input
                label='Número de WhatsApp'
                variant='underlined'
                labelPlacement='outside'
                {...register('whatsapp')}
                defaultValue={setting?.whatsapp}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.whatsapp?.message ? true : false}
                errorMessage={`${errors.whatsapp?.message}`}
              />
            </div>
          </div>
          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Correo Electrónico'
                variant='underlined'
                labelPlacement='outside'
                {...register('email')}
                defaultValue={setting?.email}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.email?.message ? true : false}
                errorMessage={`${errors.email?.message}`}
              />
            </div>
          </div>
         <Tooltip
            color='warning'
            content='Estos días anteceden a los días no disponibles'
          >
            <div className='py-4'>
              <div className='w-full'>
                <Input
                  type='number'
                  label='Días disponibles para Reservar'
                  variant='underlined'
                  {...register('available_days')}
                  defaultValue={setting?.available_days}
                  classNames={{ label: '!text-gray-800' }}
                  isInvalid={errors.available_days?.message ? true : false}
                  errorMessage={`${errors?.available_days?.message}`}
                />
              </div>
            </div>
          </Tooltip>
          <Tooltip
            color='warning'
            content='días no disponibles antes de la fecha de vuelo'
          >
            <div className='py-4'>
              <div className='w-full'>
                <Input
                  type='number'
                  label='Días no disponibles'
                  variant='underlined'
                  {...register('unavailable_days')}
                  defaultValue={setting?.unavailable_days}
                  classNames={{ label: '!text-gray-800' }}
                  isInvalid={errors.unavailable_days?.message ? true : false}
                  errorMessage={`${errors?.unavailable_days?.message}`}
                />
              </div>
            </div>
          </Tooltip>

          <div className='w-full flex py-10'>
            <Button color='primary' type='submit' className='px-10'>
              Submit
            </Button>
            <Button color='default' className='px-10 ml-6'>
              Cancel
            </Button>
          </div>
        </form>
        <section>
          <MutationResultMessage mutation={mutation} link='/settings' />
        </section>
      </div>
    </div>
  );
};

export default UpdateSettingForm;

/*

{
  "hour": 2,
  "minute": 0,
  "second": 0,
  "millisecond": 0
}

*/
