import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';
import Image from 'next/image';
import { useEffect } from 'react';

function Loader({
  loading,
  loadingMessage,
}: {
  loading: boolean;
  loadingMessage: string;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <div>
      {loading && (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {() => (
              <>
                <ModalBody className="p-10 flex justify-center items-center">
                  <Image
                    src="/magic.gif"
                    alt="Loader image"
                    height={300}
                    width={300}
                    className="w-[200px] h-[200px]"
                  />
                  <h2 className="font-bold text-2xl">
                    {loadingMessage}
                    kids story is generating.....
                  </h2>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

export default Loader;
