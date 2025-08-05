import {
  Box,
  type BoxProps,
  HStack,
  Icon,
  Separator,
  Stack,
  Text,
} from '@chakra-ui/react';
import { getPosture } from '../data/postures';
import {
  useCurrentSequenceItem,
  useNextSequenceItem,
} from '@/features/sequence';
import { SequenceNavigationButton } from '@/features/sequence/view/controls/SequenceNavigationButton';
import { FaCubes, FaHandPointRight } from 'react-icons/fa';
import {
  FaPeoplePulling,
  FaPersonHarassing,
  FaPersonWalkingArrowRight,
} from 'react-icons/fa6';
import { Accordion } from '@/features/chakra/uiSnippets';
import { useId } from 'react';

const ItemList = ({
  items,
  title,
  icon,
  iconColor,
  withBottomBorder,
}: {
  items: string[];
  title: string;
  icon: React.ElementType;
  iconColor?: BoxProps['color'];
  withBottomBorder?: boolean;
}) => {
  const id = useId();
  const renderedTitle = (
    <Text textAlign="center" fontWeight="bold" fontSize="1.8rem">
      <Icon
        as={icon}
        width="2.5rem"
        height="2.5rem"
        mr="0.25rem"
        mb="0.25rem"
        color={iconColor}
      />{' '}
      {title}
    </Text>
  );
  return (
    <Accordion.Root collapsible defaultValue={[id + title]}>
      <Accordion.Item
        value={id + title}
        borderColor={withBottomBorder ? iconColor : 'transparent'}
      >
        {items.length ? (
          <>
            {' '}
            <Accordion.ItemTrigger color={iconColor}>
              {renderedTitle}
            </Accordion.ItemTrigger>
            <Accordion.ItemContent
              display="flex"
              flexDirection="column"
              gap="0.5rem"
            >
              {items.length ? (
                items.map((item) => (
                  <Text key={id + item} fontSize="1.8rem">
                    <Box as="span" color={iconColor}>
                      •{' '}
                    </Box>
                    {item}
                  </Text>
                ))
              ) : (
                <Text color="textDisabled" textAlign="center">
                  None
                </Text>
              )}
            </Accordion.ItemContent>{' '}
          </>
        ) : (
          <HStack gap="1rem" align="center" pb="0.5rem">
            {renderedTitle}
            <Text color="textDisabled" textAlign="center">
              None
            </Text>
          </HStack>
        )}
      </Accordion.Item>
    </Accordion.Root>
  );
};

export const PostureDetails = () => {
  const currentPosture = getPosture(useCurrentSequenceItem()?.posture);
  const nextPosture = getPosture(useNextSequenceItem()?.posture);

  return (
    <Stack
      align="center"
      w="100%"
      h="100%"
      id="posture-details"
      pb="1rem"
      mx="-2rem"
      px="2rem"
      boxSizing="content-box"
      flex={1}
      maxH="100%"
      overflowY="auto"
    >
      <HStack
        gap="2rem"
        w="100%"
        justify="space-between"
        align="flex-start"
        position="sticky"
        pb="1rem"
        top="0"
        bgColor="background"
        zIndex="1"
      >
        <SequenceNavigationButton
          direction="prev"
          py={{ base: '2.25rem', md: '2.5rem' }}
          px={{ base: '1.5rem', md: '1.65rem' }}
        />
        <Stack textAlign="center">
          <Text
            color="secondary"
            fontWeight="bold"
            fontSize={{ base: '1.6rem', md: '2rem' }}
          >
            {currentPosture?.name}
          </Text>
          <Text color="primary" fontSize={{ base: '1.6rem', md: '2rem' }}>
            {currentPosture?.sanskritName}
          </Text>
        </Stack>
        <SequenceNavigationButton
          direction="next"
          py={{ base: '2.25rem', md: '2.5rem' }}
          px={{ base: '1.5rem', md: '1.65rem' }}
        />
      </HStack>
      <Stack justify="space-between" align="center" w="100%" flex={1}>
        <Stack
          gap="2rem"
          w="100%"
          align="center"
          pb="2rem"
          maxW="min(95%, 45rem)"
        >
          <ItemList
            items={currentPosture?.transitionalCues ?? []}
            title="Transitional cues:"
            icon={FaPersonWalkingArrowRight}
            iconColor="stickRightLowerLeg"
            withBottomBorder
          />
          <ItemList
            items={currentPosture?.cues ?? []}
            title="Cues:"
            icon={FaPersonHarassing}
            iconColor="secondary"
            withBottomBorder
          />
          <ItemList
            items={currentPosture?.assists ?? []}
            title="Assists:"
            icon={FaPeoplePulling}
            iconColor="stickChest"
            withBottomBorder
          />
          <ItemList
            items={currentPosture?.modifications ?? []}
            title="Modifications:"
            icon={FaCubes}
            iconColor="stickLeftUpperLeg"
            withBottomBorder
          />
        </Stack>
        {nextPosture && (
          <Stack
            w="100%"
            align="center"
            gap="2rem"
            bgColor="background"
            zIndex="1"
            maxW="min(95%, 45rem)"
          >
            <Stack w="100%" position="absolute" maxW="100%" overflow="hidden">
              <Separator borderColor="textDisabled" w="200%" />
            </Stack>
            <Stack gap="1.5rem" w="100%" pt="2rem">
              <Text textAlign="center" color="secondary">
                <Text as="span" fontStyle="italic">
                  Next:
                </Text>{' '}
                <Text as="span" fontWeight="bold" color="textSecondary">
                  {nextPosture?.name}
                </Text>
              </Text>
              <ItemList
                items={nextPosture?.transitionalCues ?? []}
                title="Transitional cues:"
                icon={FaPersonWalkingArrowRight}
                iconColor="primary"
              />
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
