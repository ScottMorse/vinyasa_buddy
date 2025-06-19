import {
  useHideOptions,
  useSetSequenceIndex,
  useWindowWidth,
} from '@/features/store';
import { StickFigure } from '@/features/stickFigure/view/StickFigure';
import { Button, HStack, Icon, IconButton, Stack } from '@chakra-ui/react';
import {
  useCurrentSequenceItem,
  useSequenceNavigationItems,
} from '@/features/sequence';
import { getPosture } from '@/features/posture';
import { HiddenField } from '@/features/hide/view';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const LayoutFigure = () => {
  const sequenceItem = useCurrentSequenceItem();
  const hideOptions = useHideOptions();
  const windowWidth = useWindowWidth();

  const { next, prev } = useSequenceNavigationItems();

  const setSequenceIndex = useSetSequenceIndex();

  return (
    <Stack align="center" justify="center" position="relative" zIndex={0}>
      <HStack justify="space-between" w="100%" position="relative">
        <Button
          color="secondary"
          fontWeight="bold"
          position="absolute"
          py="2.5rem"
          px="1.65rem"
          variant="outline"
          opacity={prev ? 1 : 0}
          left={{ base: '-4rem', sm: '0rem', md: '-2rem' }}
          disabled={!prev}
          onClick={() => prev && setSequenceIndex(prev.index)}
          zIndex={1}
          aria-label="Previous posture"
        >
          <Icon width="1.75rem" height="1.75rem" as={FaArrowLeft} />
        </Button>
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
        {next && (
          <Button
            color="secondary"
            fontWeight="bold"
            variant="outline"
            opacity={next ? 1 : 0}
            disabled={!next}
            py="2.5rem"
            px="1.65rem"
            onClick={() => next && setSequenceIndex(next.index)}
            zIndex={1}
            position="absolute"
            right={{ base: '-4rem', sm: '0rem', md: '-2rem' }}
            aria-label="Next posture"
          >
            <Icon width="1.75rem" height="1.75rem" as={FaArrowRight} />
          </Button>
        )}
      </HStack>
    </Stack>
  );
};
