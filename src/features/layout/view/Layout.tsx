import { LayoutDisclaimer } from './LayoutDisclaimer';
import { LayoutFigure } from './LayoutFigure';
import { LayoutHeader } from './LayoutHeader';
import { Stack } from '@chakra-ui/react';
import { useWindowWidth } from '../useWindowWidth';
import {
  SequenceControls,
  useSequenceNavigationItems,
} from '@/features/sequence';
import { LayoutPosture } from './LayoutPosture';
import { HideControls } from '@/features/hide/view';
import { useSetSequenceIndex } from '@/features/store';

export const Layout = () => {
  useWindowWidth();

  const { next, prev } = useSequenceNavigationItems();
  const setSequenceIndex = useSetSequenceIndex();

  return (
    <Stack
      minH="100dvh"
      w="100vw"
      align="center"
      tabIndex={-1}
      onKeyDown={({ key }) => {
        if (key === 'ArrowRight' && next) {
          setSequenceIndex(next.index);
        } else if (key === 'ArrowLeft' && prev) {
          setSequenceIndex(prev.index);
        }
      }}
    >
      <LayoutDisclaimer />
      <LayoutHeader />
      <SequenceControls />
      <Stack mt="3rem" mb={{ base: '-2rem', md: '-7rem' }}>
        <LayoutPosture />
      </Stack>
      <LayoutFigure />
      <Stack mt="3rem">
        <HideControls />
      </Stack>
    </Stack>
  );
};
