import { useChakraSystem } from '@/features/store';
import { ChakraProvider } from '@chakra-ui/react';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={useChakraSystem()}>{children}</ChakraProvider>
);
