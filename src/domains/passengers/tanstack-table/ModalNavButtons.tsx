import React from 'react';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { useNavigate } from 'react-router-dom';

import { Passenger } from '../../../passenger.types.ts';
import { deleteRequest } from '../../../services/deleteRequest';
import { useDeleteMutation } from '../../../hooks/useDeleteMutation.tsx';
import { useUserStore } from '../../../store/userstore.ts';
import MutationResultMessage from '../../shared/MutationResultMessage.tsx';

type ModalNavButtonProps = {
  passenger: Passenger;
};

export default function ModalNavButton({ passenger }: ModalNavButtonProps) {
  const navigate = useNavigate();

  const [warning, setWarning] = React.useState(false);
  const url = `http://127.0.0.1:8000/api/passenger/delete-passenger/${passenger?.id}`;

  const user = useUserStore((state) => state.user);

  const { mutation } = useDeleteMutation(
    deleteRequest,
    url,
    ['get-flights'],
    ['delete-flight'],
    user?.token,
  );

  const handleClick = () => {
    navigate('/passenger-details', { state: passenger });
  };

  return warning == false ? (
    <>
      <div className='w-full flex justify-center items-center gap-2'>
        <Button showAnchorIcon href='passengers/update' as={Link} size='sm'>
          Editar
        </Button>

        <Button
          showAnchorIcon
          as={Link}
          size='sm'
          color='default'
          onPress={() => {
            handleClick();
          }}
        >
          Ver Detalles
        </Button>
      </div>
      <div className='flex justify-center items-center gap-2'>
        <Button
          onPress={() => {
            setWarning(true);
          }}
          size='sm'
          color='danger'
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
      >
        <span className='font-extrabold'>
          Advertencia! Eliminará un registro!
        </span>
      </Button>
      <MutationResultMessage mutation={mutation} link='/passengers' />
    </>
  );
}
