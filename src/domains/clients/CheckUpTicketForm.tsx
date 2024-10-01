import React from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { queryFunction } from '../../services/queryFunction.ts';
import TicketDetails from './TicketDetailsComponent.tsx';

import {
  CheckUpFormData,
  CheckUpSchema,
} from '../../schemas/checkup.schema.ts';
import { useQuery } from '@tanstack/react-query';

const CheckUpTicketForm = () => {
  const [lastName, setLastName] = React.useState<string | undefined>(undefined);
  const [bookingCode, setBookingCode] = React.useState<string | undefined>(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckUpFormData>({
    resolver: zodResolver(CheckUpSchema),
  });

  const url = `http://127.0.0.1:8000/api/tickets/ticket-by-passenger/${lastName}/${bookingCode}`;

  const {
    isLoading,
    data: ticket,
    isSuccess,
    refetch,
    isError,
    status,
    failureReason
  } = useQuery({
    queryKey: ['passenger-ticket'],
    queryFn: () => queryFunction(url),
    enabled: false,
  });
  const onSubmit: SubmitHandler<CheckUpFormData> = async (data) => {
    setLastName(data.last_name)
    setBookingCode(data.booking_code)
    lastName !== undefined && bookingCode !== null && refetch();
  };
  return isSuccess ? (
    <TicketDetails ticket={ticket} />
  ) : (
    <div className='flex items-center py-20 justify-center'>
      <div className='p-8  rounded-3xl shadow-lg shadow-blue-900 w-full max-w-md dark:border'>
        <h2 className='text-3xl font-extrabold tracking-tight my-8 text-center'>
          Busque su Reserva
        </h2>
        <form className='py-4' onSubmit={handleSubmit(onSubmit)}>
          <div className='py-4'>
            <div className='w-full'>
              <Input
                className='!text-black'
                label='Apellidos'
                value={lastName}
                onValueChange={setLastName}
                variant='underlined'
                {...register('last_name')}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.last_name?.message ? true : false}
                errorMessage={`${errors.last_name?.message}`}
              />
            </div>
          </div>
          <div className='py-4'>
            <div className='w-full'>
              <Input
                className='!text-black'
                label='Código de Reservación'
                value={bookingCode}
                onValueChange={setBookingCode}
                variant='underlined'
                {...register('booking_code')}
                classNames={{ label: '!text-gray-800' }}
                isInvalid={errors.booking_code?.message ? true : false}
                errorMessage={`${errors.booking_code?.message}`}
              />
            </div>
          </div>
          <div className='w-full flex py-10'>
            <Button color='primary' type='submit' className='px-10'>
              {isLoading ? 'Requesting...' : 'Enviar'}
            </Button>
            <Button color='default' className='px-10 ml-6'>
              Cancel
            </Button>
          </div>
        </form>
        {isLoading && <p className='font-extrabold'>Requesting...</p>}
        {isError && <p className='font-extrabold'>{status}</p>}
        {isError && <p className='font-extrabold'>{` ${failureReason?.message} `}</p>}
      </div>
    </div>
  );
};

export default CheckUpTicketForm;

//Fouz Jiménez CR3456
