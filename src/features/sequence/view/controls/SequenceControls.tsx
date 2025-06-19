import { Stack, HStack } from '@chakra-ui/react';
import { SequenceControlGroup } from './SequenceControlGroup';
import { SequenceControlStep } from './SequenceControlStep';

export const SequenceControls = () => {
  return (
    <HStack
      w="fit-content"
      justifyContent="center"
      align="flex-start"
      gap="0.5rem"
      px="1rem"
    >
      <SequenceControlGroup />
      <SequenceControlStep />
    </HStack>
  );
};
