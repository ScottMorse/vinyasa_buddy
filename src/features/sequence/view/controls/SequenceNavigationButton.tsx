import { Button, Icon } from '@chakra-ui/react';
import type { ButtonProps } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSetSequenceIndex, useChakraSystem } from '@/features/store';
import { useSequenceNavigation } from '@/features/sequence';

export interface SequenceNavigationButtonProps extends ButtonProps {
  direction: 'next' | 'prev';
  iconSize?: ButtonProps['w'];
}

export const SequenceNavigationButton = ({
  direction,
  iconSize = '1.75rem',
  ...buttonProps
}: SequenceNavigationButtonProps) => {
  const { next, prev } = useSequenceNavigation();
  const setSequenceIndex = useSetSequenceIndex();

  const navigationItem = direction === 'next' ? next : prev;
  const icon = direction === 'next' ? FaArrowRight : FaArrowLeft;
  const ariaLabel = direction === 'next' ? 'Next posture' : 'Previous posture';

  return (
    <Button
      color="secondary"
      fontWeight="bold"
      variant="outline"
      disabled={!navigationItem}
      onClick={() => navigationItem && setSequenceIndex(navigationItem.index)}
      aria-label={ariaLabel}
      opacity={navigationItem ? 1 : 0}
      {...buttonProps}
    >
      <Icon width={iconSize} height={iconSize} as={icon} />
    </Button>
  );
};
