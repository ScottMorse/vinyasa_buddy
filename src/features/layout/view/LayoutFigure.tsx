import {
  useHideOptions,
  useSetSequenceIndex,
  useWindowWidth,
} from '@/features/store';
import { StickFigure } from '@/features/stickFigure/view/StickFigure';
import { Button, HStack, Stack } from '@chakra-ui/react';
import {
  useCurrentSequenceItem,
  useSequenceNavigationItems,
} from '@/features/sequence';
import { getPosture } from '@/features/posture';
import { HiddenField } from '@/features/hide/view';

export const LayoutFigure = () => {
  const sequenceItem = useCurrentSequenceItem();
  const hideOptions = useHideOptions();
  const windowWidth = useWindowWidth();

  const { next, prev } = useSequenceNavigationItems();

  const setSequenceIndex = useSetSequenceIndex();

  return (
    <Stack align="center" justify="center" position="relative" zIndex={0}>
      <HStack justify="space-between" w="100%">
        <Button
          color="secondary"
          fontWeight="bold"
          variant="outline"
          mr={{ base: '-8rem', sm: '-6rem' }}
          opacity={prev ? 1 : 0}
          disabled={!prev}
          onClick={() => prev && setSequenceIndex(prev.index)}
          zIndex={1}
        >
          ⇦
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
              headRadius: windowWidth < 500 ? 15 : windowWidth < 768 ? 20 : 30,
              lineWidth: windowWidth < 500 ? 10 : windowWidth < 768 ? 12 : 16,
            }}
          />
        </HiddenField>
        {next && (
          <Button
            color="secondary"
            fontWeight="bold"
            variant="outline"
            ml={{ base: '-8rem', md: '-6rem' }}
            opacity={next ? 1 : 0}
            disabled={!next}
            onClick={() => next && setSequenceIndex(next.index)}
            zIndex={1}
          >
            ⇨
          </Button>
        )}
      </HStack>
    </Stack>
  );
};
