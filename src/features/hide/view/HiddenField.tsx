import { Box, Stack, Text } from '@chakra-ui/react';
import { type Scope, animate, createScope } from 'animejs';
import { useEffect, useRef, type ReactNode } from 'react';

export interface HiddenFieldProps {
  children: ReactNode;
  isHidden: boolean;
  fieldName: string;
}

export const HiddenField = ({
  children,
  isHidden,
  fieldName,
}: HiddenFieldProps) => {
  const { current: initialIsHidden } = useRef(isHidden);

  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      animate('.hidden-field', {
        opacity: isHidden ? 1 : 0,
        duration: 500,
      });
    });
  }, [isHidden]);

  return (
    <Box
      width="fit-content"
      height="fit-content"
      position="relative"
      ref={root}
    >
      <Stack
        className="hidden-field"
        position="absolute"
        pointerEvents="none"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="backgroundSecondary"
        borderRadius="xl"
        p="0.125rem"
        boxSizing="content-box"
        align="center"
        justify="center"
        opacity={initialIsHidden ? 1 : 0}
      >
        <Text
          textStyle="sm"
          color="textPrimary"
          opacity={0.65}
          whiteSpace="nowrap"
        >
          {fieldName} Hidden
        </Text>
      </Stack>
      {children}
    </Box>
  );
};
