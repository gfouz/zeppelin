import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
//import { useNavigate } from 'react-router-dom';

import ModalNavButton from './ModalNavButtons.tsx';
import { Ticket } from '../../../tickets.types.ts';
import { useTicketStore } from '../../../store/ticketstore.ts';

interface IModal {
  payload: Ticket;
}

export default function NextModal({ payload }: IModal) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //const dispatch = useTicketStore((state) => state.dispatch);
  const { ticket } = useTicketStore((state) => state);
  const { dispatch } = useTicketStore((state) => state);

  //const navigate = useNavigate();
  /*const handleClick = (data: any) => {
    console.log(data);
    //navigate("/ticket-details", { state: data });
  };*/

  return (
    <>
      <div className='flex justify-center flex-wrap gap-3'>
        <Button
          variant='shadow'
          color='danger'
          size='sm'
          onPress={() => {
            dispatch({ type: 'SET_TICKET', payload: payload });
            //handleClick(payload);
            onOpen();
          }}
          className='capitalize h-[20px]'
        >
          Actions
        </Button>
      </div>
      <Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Administrar Pasajes
              </ModalHeader>
              <ModalBody>
                <ModalNavButton ticket_id={ticket.id} />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
