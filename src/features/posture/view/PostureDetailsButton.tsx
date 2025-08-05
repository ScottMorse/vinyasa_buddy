import { Button, Icon, Stack, Text } from '@chakra-ui/react';
import { postureDetails } from '@/features/store';
import { FaCubes } from 'react-icons/fa';

export const PostureDetailsButton = () => {
  const setIsOpen = postureDetails.useSetIsModalOpen();

  return (
    <Button
      onClick={() => setIsOpen(true)}
      w="fit-content"
      bg="rgba(0, 0, 0, 0.06)"
      px="1rem"
      pt="2.5rem"
      pb="2.75rem"
      borderColor="backgroundSecondary"
    >
      <Stack align="center">
        <Icon as={FaCubes} color="textSecondary" w="2.5rem" h="2.5rem" />
        <Text fontSize="1rem" color="textSecondary" fontWeight="normal">
          Cues & Assists
        </Text>
      </Stack>
    </Button>
  );
};
