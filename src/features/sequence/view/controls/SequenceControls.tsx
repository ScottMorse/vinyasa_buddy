import { Stack, HStack } from '@chakra-ui/react';
import { SequenceControlGroup } from './SequenceControlGroup';
import { SequenceControlStep } from './SequenceControlStep';
import { PostureDetailsButton } from '@/features/posture/view/PostureDetailsButton';
import { useCurrentSequenceItem } from '@/features/sequence';

export const SequenceControls = () => {
  const currentSequenceItem = useCurrentSequenceItem();

  return (
    <HStack
      w="fit-content"
      justifyContent="center"
      align="flex-start"
      gap="1rem"
      px="1rem"
    >
      <SequenceControlGroup />
      <Stack align="flex-end" gap="0.75rem">
        <SequenceControlStep />
        {currentSequenceItem && <PostureDetailsButton />}
      </Stack>
    </HStack>
  );
};
