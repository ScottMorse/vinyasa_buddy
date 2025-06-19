import { useInterval } from '@/utils/hooks';
import { useIsFirstRender } from '@/utils/hooks/rendering';
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

  const isInitializing = useRef(true);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      if (isInitializing.current) {
        isInitializing.current = false;
        return;
      }
      animate('.hidden-field', {
        opacity: isHidden ? 1 : 0,
        duration: 500,
      });
      animate('.hidden-field-wrapper', {
        opacity: {
          from: isHidden ? 1 : 0,
          to: isHidden ? 0 : 1,
        },
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
        minWidth="100%"
        minHeight="100%"
        bg="backgroundSecondary"
        borderRadius="xl"
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
        >
          {fieldName} Hidden
        </Text>
      </Stack>
      <Box
        width="fit-content"
        height="fit-content"
        m="0.25rem"
        className="hidden-field-wrapper"
        ref={wrapperRef}
        opacity={initialIsHidden ? 0 : 1}
      >
        {children}
      </Box>
    </Box>
  );
};
