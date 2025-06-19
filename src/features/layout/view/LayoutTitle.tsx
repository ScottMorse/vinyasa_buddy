import { Box, type BoxProps } from '@chakra-ui/react';

export interface LayoutTitleProps {
  fontSize: BoxProps['fontSize'];
}

export const LayoutTitle = ({ fontSize }: LayoutTitleProps) => (
  <Box as="h1" fontSize={fontSize} wordSpacing="1rem">
    <Box as="span" color="primary" mr="0.25em">
      Vinyasa
    </Box>
    <Box as="span" color="secondary">
      Buddy
    </Box>
  </Box>
);
