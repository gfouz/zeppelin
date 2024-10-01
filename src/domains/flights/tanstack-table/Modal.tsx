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
import { Flight } from '../../../flights.types.ts';
import { useFlightStore } from '../../../store/flightstore.ts';

interface IModal {
  payload: Flight;
}

export default function NextModal({ payload }: IModal) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useFlightStore((state) => state.dispatch);

  const { flight } = useFlightStore((state) => state);

  return (
    <>
      <div className='flex justify-center flex-wrap gap-3'>
        <Button
          size='md'
          variant='shadow'
          color={payload?.isMain ? 'primary' : 'default'}
          onPress={() => {
            //console.log(payload)
            dispatch({ type: 'SET_FLIGHT', payload: payload });
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
                Administrar Vuelos
              </ModalHeader>
              <ModalBody>
                <ModalNavButton flight={flight} />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
