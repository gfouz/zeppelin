import React from 'react';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { deleteRequest } from '../../../services/deleteRequest';
import { useDeleteMutation } from '../../../hooks/useDeleteMutation.tsx';
import { useUserStore } from '../../../store/userstore.ts';

export default function ModalNavButton({ flight_id }: { flight_id?: string }) {
  const [warning, setWarning] = React.useState(false);
  const url = `http://127.0.0.1:8000/api/flights/delete-flight/${flight_id}`;

  const user = useUserStore((state) => state.user);

  const { mutation } = useDeleteMutation(
    deleteRequest,
    url,
    ['get-users'],
    ['delete-user'],
    user?.token,
  );

  return warning == false ? (
    <>
      <div className='flex justify-evenly items-center'>
        <Button showAnchorIcon href='users/create' as={Link} size='sm'>
          Añadir
        </Button>
        <Button showAnchorIcon href='users/update' as={Link} size='sm'>
          Editar
        </Button>
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
  );
}
