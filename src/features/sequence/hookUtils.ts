import { useCallback, useMemo } from 'react';
import {
  SEQUENCE_GROUP_MAP,
  type SequenceGroup,
  type SequenceGroupId,
  type SequenceItem,
} from './data/sequence';
import { useSequenceIndex, useSetSequenceIndex } from '../store/store';

type FlatSequenceItem = SequenceItem & {
  group: {
    id: string;
    name: string;
    description: string;
  };
};

export const useSequenceGroups = () =>
  useMemo(() => Object.values(SEQUENCE_GROUP_MAP) as SequenceGroup[], []);

export const useFlatSequence = () =>
  useMemo(
    () =>
      Object.values(SEQUENCE_GROUP_MAP).flatMap<FlatSequenceItem>((group) =>
        group.items.map((item) => ({
          ...item,
          group: {
            id: group.id,
            name: group.name,
            description: group.description,
          },
        })),
      ),
    [],
  );

export const useSetSequenceFromGroupId = () => {
  const flatSequence = useFlatSequence();
  const setSequenceIndex = useSetSequenceIndex();
  return useCallback(
    (groupId: SequenceGroupId) => {
      const groupIndex = flatSequence.findIndex(
        (item) => item.group.id === groupId,
      );
      setSequenceIndex(groupIndex);
    },
    [flatSequence, setSequenceIndex],
  );
};

export const useCurrentSequenceItem = () => {
  const flatSequence = useFlatSequence();
  const sequenceIndex = useSequenceIndex();
  return sequenceIndex !== null
    ? { ...flatSequence[sequenceIndex], index: sequenceIndex }
    : null;
};

export const useNextSequenceItem = () => {
  const flatSequence = useFlatSequence();
  const sequenceIndex = useSequenceIndex();
  return sequenceIndex !== null && sequenceIndex < flatSequence.length - 1
    ? flatSequence[sequenceIndex + 1]
    : null;
};

export const useSequenceNavigation = () => {
  const flatSequence = useFlatSequence();
  const sequenceIndex = useSequenceIndex();

  return useMemo(
    () => ({
      next:
        sequenceIndex !== null
          ? sequenceIndex < flatSequence.length
            ? {
                index:
                  sequenceIndex === flatSequence.length - 1
                    ? null
                    : sequenceIndex + 1,
              }
            : null
          : null,
      prev:
        sequenceIndex !== null
          ? sequenceIndex > 0 && sequenceIndex < flatSequence.length
            ? { index: sequenceIndex - 1 }
            : null
          : null,
    }),
    [flatSequence, sequenceIndex],
  );
};

export const useJumpSequenceGroup = () => {
  const flatSequence = useFlatSequence();
  const setSequenceIndex = useSetSequenceIndex();

  return useCallback(
    (groupId: SequenceGroupId) => {
      const groupIndex = flatSequence.findIndex(
        (item) => item.group.id === groupId,
      );
      setSequenceIndex(groupIndex);
    },
    [flatSequence, setSequenceIndex],
  );
};
