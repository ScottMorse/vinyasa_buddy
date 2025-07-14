import { Dialog } from '@/features/chakra/uiSnippets/dialog';
import { postureDetails } from '@/features/store';
import { PostureDetails } from './PostureDetails';

export const PostureDetailsModal = () => {
  const isOpen = postureDetails.useIsModalOpen();
  const setIsOpen = postureDetails.useSetIsModalOpen();

  return (
    <Dialog.Root
      open={isOpen}
      // onOpenChange={({ open }) => setIsOpen(open)}
      placement="center"
    >
      <Dialog.Content minW="min(90vw, 60rem)" maxW="min(90vw, 60rem)">
        <PostureDetails />
      </Dialog.Content>
    </Dialog.Root>
  );
};
