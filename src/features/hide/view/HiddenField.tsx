import { useInterval } from '@/utils/hooks';
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
  const hiderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      animate('.hidden-field', {
        opacity: isHidden ? 1 : 0,
        duration: 500,
      });
    });
  }, [isHidden]);

  useInterval({
    duration: 100,
    callback: () => {
      if (hiderRef.current && wrapperRef.current) {
        hiderRef.current.style.width = `${wrapperRef.current.scrollWidth}px`;
        hiderRef.current.style.height = `${wrapperRef.current.scrollHeight}px`;
      }
    },
    enabled: true,
  });

  return (
    <Stack
      width="fit-content"
      height="fit-content"
      position="relative"
      align="center"
      justify="center"
      ref={root}
    >
      <Stack
        className="hidden-field"
        position="absolute"
        pointerEvents="none"
        top="-0.5rem"
        width="100%"
        height="100%"
        bg="backgroundSecondary"
        borderRadius="xl"
        p="0.5rem"
        boxSizing="content-box"
        align="center"
        justify="center"
        ref={hiderRef}
        opacity={initialIsHidden ? 1 : 0}
      >
        <Text
          textStyle="sm"
          color="textPrimary"
          opacity={0.65}
          whiteSpace="nowrap"
          m="0.5rem"
        >
          {fieldName} Hidden
        </Text>
      </Stack>
      <Box width="fit-content" height="fit-content" ref={wrapperRef}>
        {children}
      </Box>
    </Stack>
  );
};
