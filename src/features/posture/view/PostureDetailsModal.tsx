import { Dialog } from '@/features/chakra/uiSnippets/dialog';
import { postureDetails } from '@/features/store';
import { PostureDetails } from './PostureDetails';
import { useCurrentSequenceItem } from '@/features/sequence';
import { useEffect } from 'react';

export const PostureDetailsModal = () => {
  const isOpen = postureDetails.useIsModalOpen();
  const setIsOpen = postureDetails.useSetIsModalOpen();

  const currentSequenceItem = useCurrentSequenceItem();

  useEffect(() => {
    if (!currentSequenceItem) setIsOpen(false);
  }, [currentSequenceItem, setIsOpen]);

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={({ open }) => setIsOpen(open)}
      placement="top"
    >
      <Dialog.Content
        portalled={false}
        minW="min(90vw, 90rem)"
        maxW="min(90vw, 90rem)"
        minH="min(90dvh, 90rem)"
        maxH="min(90dvh, 90rem)"
        pt="5.5rem"
      >
        <Dialog.CloseTrigger />
        <PostureDetails />
      </Dialog.Content>
    </Dialog.Root>
  );
};
