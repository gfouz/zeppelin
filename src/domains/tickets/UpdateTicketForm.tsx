import { Button } from '@nextui-org/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@nextui-org/input';
import { useUserStore } from '../../store/userstore.ts';
import { useTicketStore } from '../../store/ticketstore.ts';
import { TicketFormData, TicketSchema } from '../../schemas/ticket.schema';
import { useGenericMutation } from '../../hooks/useGenericMutation.tsx';
import { mutationFunction } from '../../services/mutationFunction.ts';
import MutationResultMessage from '../shared/MutationResultMessage.tsx';

const UpdateTicketForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketFormData>({
    resolver: zodResolver(TicketSchema),
  });
  //Global store hooks
  const { user } = useUserStore((state) => state);
  const { ticket } = useTicketStore((state) => state);
  //--------------------------------------------------
  const url = `http://127.0.0.1:8000/api/tickets/update-ticket/${ticket?.id}`;
  const { mutation } = useGenericMutation(
    mutationFunction,
    url,
    'PUT',
    ['none'],
    ['update-ticket'],
    user?.token,
  );
  const onSubmit: SubmitHandler<TicketFormData> = async (
    data: TicketFormData,
  ) => {
    //console.log(data);
    const _data = {
      ...data,
      ticket_issuer_id: user?.id,
      flight_id: ticket?.flight?.id,
      infant_price: ticket?.flight?.infant_price,
      child_price: ticket?.flight?.child_price,
      adult_price: ticket?.flight?.adult_price,
    };
    await mutation.mutateAsync(_data);
  };
  return (
    <div className='flex items-center py-20 justify-center'>
      <div className='p-8  rounded-3xl shadow-lg w-full max-w-md dark:border'>
        <h2 className='text-3xl font-extrabold tracking-tight mb-15 text-center'>
          Modificar Pasaje
        </h2>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Nombre Completo'
                variant='underlined'
                {...register('first_name')}
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
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.passport?.message ? true : false}
                errorMessage={`${errors.passport?.message}`}
              />
            </div>
          </div>
          <div className='py-4'>
            <div className='w-full'>
              <Input
                label='Número de Boleto'
                variant='underlined'
                labelPlacement='outside'
                {...register('booking_code')}
                defaultValue={ticket?.booking_code}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.booking_code?.message ? true : false}
                errorMessage={`${errors.booking_code?.message}`}
              />
            </div>
          </div>
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
          <MutationResultMessage mutation={mutation} link='/tickets' />
        </section>
      </div>
    </div>
  );
};

export default UpdateTicketForm;
