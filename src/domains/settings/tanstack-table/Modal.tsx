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
import { Setting } from '../../../settings.types.ts';
import { useSettingStore } from '../../../store/settingStore.ts';

interface IModal {
  payload: Setting;
}

export default function NextModal({ payload }: IModal) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useSettingStore((state) => state.dispatch);
  const { setting } = useSettingStore((state) => state);

  /*const handleClick = (data: any) => {
    //console.log(data);
    navigate('/tickets', { state: data });
  };*/

  return (
    <>
      <div className='flex justify-center flex-wrap gap-3'>
        <Button
          variant='shadow'
          color='danger'
          size='sm'
          onPress={() => {
            dispatch({ type: 'SET_SETTING', payload: payload });
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
                <ModalNavButton setting_id={setting.id} />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
