import { Box } from '@chakra-ui/react';
import { LayoutTitle } from './LayoutTitle';

export const LayoutHeader = () => {
  return (
    <Box as="header">
      <LayoutTitle fontSize={{ base: '3.5rem', sm: '4.5rem', md: '8rem' }} />
    </Box>
  );
};
