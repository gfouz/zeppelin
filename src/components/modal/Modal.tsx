import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Button } from '@nextui-org/button';

export default function NextModal({
  title,
  info,
}: {
  title: string;
  info: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className='flex flex-wrap gap-3'>
        <Button
          variant='shadow'
          color='danger'
          onPress={() => onOpen()}
          className='capitalize'
        >
          Actions
        </Button>
      </div>
      <Modal backdrop='blur' isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody>
                <p dangerouslySetInnerHTML={{ __html: info }} />
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
