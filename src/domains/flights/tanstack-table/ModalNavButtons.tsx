import React from 'react';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { useNavigate } from 'react-router-dom';

import { Flight } from '../../../flights.types.ts';
import { deleteRequest } from '../../../services/deleteRequest';
import { useDeleteMutation } from '../../../hooks/useDeleteMutation.tsx';
import { useUserStore } from '../../../store/userstore.ts';
import MutationResultMessage from '../../shared/MutationResultMessage.tsx';

type ModalNavButtonProps = {
  flight: Flight;
};

export default function ModalNavButton({ flight }: ModalNavButtonProps) {
  const navigate = useNavigate();

  const [warning, setWarning] = React.useState(false);
  const url = `http://127.0.0.1:8000/api/flights/delete-flight/${flight?.id}`;

  const user = useUserStore((state) => state.user);

  const { mutation } = useDeleteMutation(
    deleteRequest,
    url,
    ['get-flights'],
    ['delete-flight'],
    user?.token,
  );

  const handleClick = () => {
    navigate('/flight-tickets', { state: flight });
  };

  return warning == false ? (
    <>
      <div className=' gap-1'>
        <div className='w-full flex flex-wrap justify-center items-center gap-2'>
          <Button
            className='font-extrabold tracking-widest'
            showAnchorIcon
            href='flights/create'
            as={Link}
            size='sm'
          >
            Añadir Vuelo
          </Button>
          <Button
            className='font-extrabold tracking-widest'
            showAnchorIcon
            href='flights/update'
            as={Link}
            size='sm'
          >
            Editar
          </Button>
          <Button
            className='font-extrabold tracking-widest'
            showAnchorIcon
            href='flights/duplicate'
            as={Link}
            size='sm'
          >
            Duplicar
          </Button>
          <Button
            className='font-extrabold tracking-widest'
            showAnchorIcon
            href='flights/details/'
            as={Link}
            size='sm'
          >
            Acerca del Vuelo
          </Button>
        </div>
      </div>

      <div className='flex justify-center items-center gap-2'>
        {flight?.isMain ? (
          <div className='flex flex-wrap gap-2 justify-center'>
            <Button
              className='font-extrabold tracking-widest'
              showAnchorIcon
              href='flights/create-connection'
              as={Link}
              size='sm'
            >
              Conectar Vuelo
            </Button>
            <Button
              showAnchorIcon
              href='tickets/create/'
              as={Link}
              size='sm'
              className='font-extrabold tracking-widest'
            >
              Crear Pasaje
            </Button>
            <Button
              showAnchorIcon
              as={Link}
              size='sm'
              color='default'
              onPress={() => {
                handleClick();
              }}
              className='font-extrabold tracking-widest'
            >
              Pasajes x Vuelos
            </Button>
          </div>
        ) : null}
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Button
          onPress={() => {
            setWarning(true);
          }}
          size='sm'
          color='danger'
          className='font-extrabold tracking-widest'
        >
          Eliminar
        </Button>
      </div>
    </>
  ) : (
    <>
      <Button
        size='sm'
        color='danger'
        onPress={async () => {
          await mutation.mutateAsync();
        }}
        className='font-extrabold tracking-widest'
      >
        <span className='font-extrabold'>
          Advertencia! Eliminará un registro!
        </span>
      </Button>
      <MutationResultMessage mutation={mutation} link='/flights' />
    </>
  );
}
