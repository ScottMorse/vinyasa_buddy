import { HiddenField } from '@/features/hide/view';
import { getPosture } from '@/features/posture';
import { useCurrentSequenceItem } from '@/features/sequence';
import { useHideOptions, useSetSequenceIndex } from '@/features/store';
import { Button, HStack, Stack, Text } from '@chakra-ui/react';
import capitalize from 'lodash/capitalize';

export const LayoutPosture = () => {
  const sequenceItem = useCurrentSequenceItem();
  const hideOptions = useHideOptions();

  const posture = getPosture(sequenceItem?.posture);

  const setSequenceIndex = useSetSequenceIndex();

  const fontSize = { base: '2.5rem', md: '3.5rem' };
  const smallFontSize = { base: '1.6rem', md: '2rem' };

  return (
    <Stack
      align="center"
      position="relative"
      gap="0"
      lineHeight={1}
      zIndex={1}
      bg={posture?.sanskritName || posture?.name ? 'background' : undefined}
      borderRadius="xl"
      p="1rem"
      textAlign="center"
    >
      {!posture && (
        <Button
          position="absolute"
          top="2rem"
          color="success"
          zIndex={1}
          onClick={() => setSequenceIndex(0)}
        >
          Begin
        </Button>
      )}
      {posture?.name ? (
        <HiddenField
          isHidden={hideOptions.postureName}
          fieldName="Posture Name"
        >
          <Text textStyle="xl" minW="30rem" fontSize={fontSize}>
            {posture.name || 'N/A'}
            {sequenceItem?.side && ` - ${capitalize(sequenceItem.side)} Side`}
          </Text>
        </HiddenField>
      ) : (
        <Text textStyle="xl" opacity={0}>
          N/A
        </Text>
      )}
      {posture?.sanskritName ? (
        <HiddenField
          isHidden={hideOptions.postureSanskritName}
          fieldName="Sanskrit Name"
        >
          <Text
            textStyle="xl"
            minW="30rem"
            color="primary"
            mt="0.5rem"
            fontSize={fontSize}
          >
            {posture.sanskritName}
          </Text>
        </HiddenField>
      ) : (
        <Text textStyle="xl" opacity={0} fontSize={fontSize}>
          N/A
        </Text>
      )}
      {sequenceItem?.breath ? (
        <Stack mt="1rem">
          <HiddenField isHidden={hideOptions.breath} fieldName="Breath">
            <Text
              color="secondary"
              fontWeight="bold"
              minW="20rem"
              fontSize={smallFontSize}
            >
              {sequenceItem.breath}
            </Text>
          </HiddenField>
        </Stack>
      ) : (
        <Text textStyle="xl" mt="0.25rem" opacity={0} fontSize={smallFontSize}>
          N/A
        </Text>
      )}
      {sequenceItem?.duration ? (
        <Stack mt="0.5rem">
          <HiddenField isHidden={hideOptions.duration} fieldName="Duration">
            <Text color="secondary" minW="20rem" fontSize={smallFontSize}>
              {sequenceItem.duration}
            </Text>
          </HiddenField>
        </Stack>
      ) : (
        <Text textStyle="xl" mt="1rem" opacity={0} fontSize={smallFontSize}>
          N/A
        </Text>
      )}
    </Stack>
  );
};
