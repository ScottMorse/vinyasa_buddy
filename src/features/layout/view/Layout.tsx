import { Stack } from '@chakra-ui/react';
import { useWindowWidth } from '../useWindowWidth';
import {
  SequenceControls,
  useSequenceNavigationItems,
} from '@/features/sequence';
import { useSetSequenceIndex } from '@/features/store';
import { lazyNamedImport } from '@/utils/lazy';

const { LayoutDisclaimer } = lazyNamedImport(
  () => import('./LayoutDisclaimer'),
  'LayoutDisclaimer',
);

const { LayoutHeader } = lazyNamedImport(
  () => import('./LayoutHeader'),
  'LayoutHeader',
);

const { LayoutPosture } = lazyNamedImport(
  () => import('./LayoutPosture'),
  'LayoutPosture',
);

const { LayoutFigure } = lazyNamedImport(
  () => import('./LayoutFigure'),
  'LayoutFigure',
);

const { HideControls } = lazyNamedImport(
  () => import('@/features/hide/view'),
  'HideControls',
);

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
      <Stack mt="3rem" mb={{ base: '-3rem', md: '-8rem' }}>
        <LayoutPosture />
      </Stack>
      <LayoutFigure />
      <Stack mt="3rem">
        <HideControls />
      </Stack>
    </Stack>
  );
};
