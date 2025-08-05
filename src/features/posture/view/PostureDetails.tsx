import { postureDetails } from '@/features/store';
import { Stack, Text } from '@chakra-ui/react';
import { ALL_POSTURES, getPosture } from '../data/postures';
import { useMemo } from 'react';

export const PostureDetails = () => {
  const selectedPosture = getPosture(postureDetails.useSelectedPosture());
  const setSelectedPosture = postureDetails.useSetSelectedPosture();

  const postureIndex = useMemo(
    () => ALL_POSTURES.findIndex((p) => p.id === selectedPosture?.id),
    [selectedPosture],
  );

  const previousPosture =
    ALL_POSTURES[
      (postureIndex - 1 + ALL_POSTURES.length) % ALL_POSTURES.length
    ];

  const nextPosture =
    ALL_POSTURES[
      (postureIndex + 1 + ALL_POSTURES.length) % ALL_POSTURES.length
    ];

  return (
    <Stack>
      <Stack>
        <Text>{selectedPosture?.name}</Text>
        <Text>{selectedPosture?.sanskritName}</Text>
      </Stack>
    </Stack>
  );
};
