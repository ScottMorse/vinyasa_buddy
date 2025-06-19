import { Box } from '@chakra-ui/react';
import { LayoutTitle } from './LayoutTitle';

export const LayoutHeader = () => {
  return (
    <Box as="header" bg="backgroundDark" w="100vw" textAlign="center" mb="1rem">
      <LayoutTitle fontSize={{ base: '3.5rem', sm: '4.5rem', md: '6rem' }} />
    </Box>
  );
};
