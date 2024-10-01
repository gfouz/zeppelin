import React from 'react';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { useNavigate } from 'react-router-dom';

import { deleteRequest } from '../../../services/deleteRequest';
import { useDeleteMutation } from '../../../hooks/useDeleteMutation.tsx';
import { useUserStore } from '../../../store/userstore.ts';
import { useTicketStore } from '../../../store/ticketstore.ts';
import MutationResultMessage from '../../shared/MutationResultMessage.tsx';

export default function ModalNavButton({ ticket_id }: { ticket_id?: string }) {
  const [warning, setWarning] = React.useState(false);

  const url = `http://127.0.0.1:8000/api/tickets/delete-ticket/${ticket_id}`;

  const user = useUserStore((state) => state.user);

  const { mutation } = useDeleteMutation(
    deleteRequest,
    url,
    ['get-tickets'],
    ['delete'],
    user?.token,
  );
  const { ticket } = useTicketStore((state) => state);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ticket-details', { state: ticket });
  };
  return warning == false ? (
    <>
      <div className='flex justify-evenly items-center'>
        <Button
          className='font-extrabold tracking-widest'
          showAnchorIcon
          href='tickets/update'
          as={Link}
          size='sm'
        >
          Editar
        </Button>
        <Button
          showAnchorIcon
          as={Link}
          size='sm'
          onPress={() => {
            handleClick();
          }}
          className='font-extrabold tracking-widest'
        >
          Ver detalles
        </Button>
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
      >
        <span className='font-extrabold'>
          Advertencia! Eliminará un registro!
        </span>
      </Button>
      <MutationResultMessage mutation={mutation} link='/tickets' />
    </>
  );
}
