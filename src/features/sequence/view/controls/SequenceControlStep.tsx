import { createListCollection, Select } from '@chakra-ui/react';
import {
  useCurrentSequenceItem,
  useFlatSequence,
  useSequenceGroups,
} from '../../hookUtils';
import { getPosture } from '@/features/posture';
import { useSequenceIndex, useSetSequenceIndex } from '@/features/store';

export const SequenceControlStep = () => {
  const sequence = useFlatSequence();
  const sequenceGroups = useSequenceGroups();

  const collection = createListCollection({
    items: sequence.map((item, index) => ({
      id: index.toString(),
      label: getPosture(item.posture)?.name,
      value: index.toString(),
      category: item.group.id,
    })),
  });

  const categories = collection.items.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = {
          groupId: item.category,
          items: [item],
          name:
            sequenceGroups.find((group) => group.id === item.category)?.name ??
            '',
        };
      } else {
        acc[item.category].items.push(item);
      }
      return acc;
    },
    {} as Record<
      string,
      {
        groupId: string;
        items: {
          id: string;
          label: string | undefined;
          value: string;
        }[];
        name: string;
      }
    >,
  );

  const sequenceIndex = useSequenceIndex();
  const setSequenceIndex = useSetSequenceIndex();

  const fontSize = { base: '1.4rem', sm: '1.6rem', md: '2rem' };

  return (
    <Select.Root
      collection={collection}
      onValueChange={(value) =>
        setSequenceIndex(Number.parseInt(value.value[0]))
      }
      width="fit-content"
      value={sequenceIndex !== null ? [sequenceIndex.toString()] : undefined}
    >
      <Select.HiddenSelect />

      <Select.Control w="fit-content">
        <Select.Trigger
          borderColor="backgroundSecondary"
          borderWidth={2}
          borderRadius="xl"
          cursor="pointer"
          bg="backgroundSecondary"
        >
          <Select.ValueText
            fontSize={fontSize}
            p="0.5rem"
            py="1rem"
            pr="3.5rem"
            placeholder="Jump to Step"
            whiteSpace="nowrap"
            color="textSecondary"
          >
            Jump to Step
          </Select.ValueText>
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>

      <Select.Positioner>
        <Select.Content
          bg="backgroundSecondary"
          border="2px solid"
          borderColor="backgroundSecondary"
          p={0}
          borderRadius="xl"
          color="textPrimary"
          minW="30rem"
          minH="min(80vh, (100dvh - 20rem))"
          transform="translateX(-12rem)"
          _scrollbar={{
            bg: 'background',
            color: 'textPrimary',
            scrollbarColor: 'textPrimary',
            w: '0.75rem',
          }}
          _scrollbarThumb={{
            bg: 'textPrimary',
            borderRadius: 'xl',
          }}
        >
          {Object.values(categories).map(({ groupId, name, items }) => (
            <Select.ItemGroup
              key={`sequence-control-step-group-${groupId}`}
              borderBottom="2px solid"
              borderColor="textSecondary"
            >
              <Select.ItemGroupLabel
                fontSize={fontSize}
                fontWeight="normal"
                color="secondary"
                borderBottom="2px solid"
                borderColor="textSecondary"
              >
                {name}
              </Select.ItemGroupLabel>
              {items.map((item, i) => (
                <Select.Item
                  item={item}
                  key={`sequence-control-step-item-${item.value}`}
                  cursor="pointer"
                  borderBottom={i === items.length - 1 ? 'none' : '1px solid'}
                  borderColor="textSecondary"
                  py="1rem"
                  px="1rem"
                  ml="-0.5rem"
                  fontSize={fontSize}
                  _hover={{
                    bg: 'secondary',
                    _selected: {
                      bg: 'primary',
                    },
                    color: 'background',
                  }}
                  _selected={{
                    bg: 'primary',
                    color: 'background',
                  }}
                >
                  {item.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.ItemGroup>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};
