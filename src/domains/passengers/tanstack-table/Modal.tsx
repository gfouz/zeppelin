import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import ModalNavButton from './ModalNavButtons.tsx';
import { usePassengerStore } from '../../../store/passengerStore.ts';
import { Passenger } from '../../../passenger.types.ts';

interface IModal {
  payload: Passenger;
}

export default function NextModal({ payload }: IModal) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = usePassengerStore((state) => state.dispatch);

  const { passenger } = usePassengerStore((state) => state);

  return (
    <>
      <div className='flex justify-center flex-wrap gap-3'>
        <Button
          size='md'
          variant='shadow'
          color='danger'
          onPress={() => {
            dispatch({ type: 'SET_PASSENGER', payload: payload });
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
                Administrar Pasajero
              </ModalHeader>
              <ModalBody>
                <ModalNavButton passenger={passenger} />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
