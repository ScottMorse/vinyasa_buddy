import {
  useHideOptions,
  useSetSequenceIndex,
  useWindowWidth,
} from '@/features/store';
import { StickFigure } from '@/features/stickFigure/view/StickFigure';
import { Button, HStack, Icon, IconButton, Stack } from '@chakra-ui/react';
import {
  useCurrentSequenceItem,
  useSequenceNavigation,
} from '@/features/sequence';
import { getPosture } from '@/features/posture';
import { HiddenField } from '@/features/hide/view';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { SequenceNavigationButton } from '@/features/sequence/view/controls/SequenceNavigationButton';

export const LayoutFigure = () => {
  const sequenceItem = useCurrentSequenceItem();
  const hideOptions = useHideOptions();
  const windowWidth = useWindowWidth();

  return (
    <Stack align="center" justify="center" position="relative" zIndex={0}>
      <HStack justify="space-between" w="100%" position="relative">
        <SequenceNavigationButton
          direction="prev"
          position="absolute"
          left={{ base: '-3rem', sm: '0rem', md: '-2rem' }}
          py={{ base: '2.25rem', md: '2.5rem' }}
          px={{ base: '1.5rem', md: '1.65rem' }}
          zIndex={1}
        />
        <HiddenField
          isHidden={hideOptions.vinyasaBuddy}
          fieldName="Vinyasa Buddy"
        >
          <StickFigure
            position={
              getPosture(sequenceItem?.posture)?.stickFigurePosition ?? null
            }
            config={{
              headRadius:
                windowWidth < 500
                  ? 12
                  : windowWidth < 768
                    ? 20
                    : windowWidth < 2000
                      ? 24
                      : 30,
              lineWidth: windowWidth < 500 ? 8 : windowWidth < 768 ? 12 : 16,
            }}
          />
        </HiddenField>
        <SequenceNavigationButton
          direction="next"
          position="absolute"
          right={{ base: '-3rem', sm: '0rem', md: '-2rem' }}
          py={{ base: '2.25rem', md: '2.5rem' }}
          px={{ base: '1.5rem', md: '1.65rem' }}
          zIndex={1}
        />
      </HStack>
    </Stack>
  );
};
