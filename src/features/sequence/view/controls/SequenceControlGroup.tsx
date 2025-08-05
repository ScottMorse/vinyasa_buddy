import { createListCollection, Select, Stack, Text } from '@chakra-ui/react';
import {
  useCurrentSequenceItem,
  useSequenceGroups,
  useSetSequenceFromGroupId,
} from '../../hookUtils';
import type { SequenceGroupId } from '../../data/sequence';
import { useHideOptions } from '@/features/store';
import { HiddenField } from '@/features/hide/view';

export const SequenceControlGroup = () => {
  const sequenceGroups = useSequenceGroups();

  const collection = createListCollection({
    items: sequenceGroups.map((group) => ({
      id: group.id,
      label: group.name,
      value: group.id,
    })),
  });

  const currentSequenceItem = useCurrentSequenceItem();
  const setSequenceFromGroupId = useSetSequenceFromGroupId();

  const hideOptions = useHideOptions();

  const fontSize = { base: '1.4rem', sm: '1.6rem', md: '2rem' };
  const descriptionFontSize = { base: '1.2rem', sm: '1.4rem', md: '1.6rem' };

  return (
    <Stack gap="0.5rem">
      <Select.Root
        collection={collection}
        onValueChange={(value) =>
          setSequenceFromGroupId(value.value[0] as SequenceGroupId)
        }
        value={
          currentSequenceItem?.group?.id
            ? [currentSequenceItem.group?.id]
            : undefined
        }
        width="fit-content"
      >
        <Select.HiddenSelect />

        <Select.Control w="fit-content" cursor="pointer">
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
              placeholder="Jump to Series"
              whiteSpace="nowrap"
              color="textSecondary"
            >
              Jump to Series
            </Select.ValueText>
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>

        <Select.Positioner>
          <Select.Content
            bg="backgroundSecondary"
            color="textPrimary"
            minW="30rem"
            minH="min(55rem, (100dvh - 20rem))"
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
            {collection.items.map((item, i) => (
              <Select.Item
                key={item?.id}
                item={item}
                borderBottom="1px solid"
                borderColor="textSecondary"
                ml="-0.5rem"
                px="1rem"
                py="1rem"
                cursor="pointer"
                fontSize={fontSize}
                onClick={() => {
                  if (item.id === currentSequenceItem?.group?.id) {
                    setSequenceFromGroupId(item.id as SequenceGroupId);
                  }
                }}
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
          </Select.Content>
        </Select.Positioner>
      </Select.Root>

      <HiddenField isHidden={hideOptions.seriesName} fieldName="Series Name">
        <Text
          textStyle="sm"
          mt="0.25rem"
          color="secondary"
          maxWidth="10rem"
          whiteSpace="nowrap"
          fontWeight="semibold"
          fontSize={fontSize}
        >
          {currentSequenceItem?.group?.name}
        </Text>
      </HiddenField>
      {currentSequenceItem?.group?.description ? (
        <HiddenField
          isHidden={hideOptions.seriesDescription}
          fieldName="Series Info"
        >
          <Text
            textStyle="sm"
            maxWidth="16rem"
            maxLines={2}
            minHeight="1.5rem"
            maxHeight="1.5rem"
            display="block"
            overflowY="visible"
            color="textSecondary"
            fontSize={descriptionFontSize}
          >
            {currentSequenceItem?.group.description}
          </Text>
        </HiddenField>
      ) : (
        <Text textStyle="sm" minHeight="2rem" opacity={0}>
          N/A
        </Text>
      )}
    </Stack>
  );
};
