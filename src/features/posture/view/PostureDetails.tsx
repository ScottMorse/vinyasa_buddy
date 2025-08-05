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

const ItemList = ({
  items,
  title,
  icon,
  iconColor,
}: {
  items: string[];
  title: string;
  icon: React.ElementType;
  iconColor?: BoxProps['color'];
}) => {
  return (
    <Stack>
      <Text textAlign="center" fontWeight="bold" fontSize="1.8rem">
        <Icon
          as={icon}
          width="2.5rem"
          height="2.5rem"
          ml="-1.75rem"
          mr="0.25rem"
          color={iconColor}
        />{' '}
        {title}
      </Text>
      {items.length ? (
        items.map((item) => (
          <Text key={item} fontSize="1.8rem">
            • {item}
          </Text>
        ))
      ) : (
        <Text color="textDisabled" textAlign="center">
          None
        </Text>
      )}
    </Stack>
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
        pb="2rem"
        top="0"
        bgColor="background"
        zIndex="1"
      >
        <SequenceNavigationButton direction="prev" />
        <Stack textAlign="center">
          <Text color="secondary" fontWeight="bold" fontSize="2rem">
            {currentPosture?.name}
          </Text>
          <Text color="primary" fontSize="2rem">
            {currentPosture?.sanskritName}
          </Text>
        </Stack>
        <SequenceNavigationButton direction="next" />
      </HStack>
      <Stack justify="space-between" w="100%" flex={1}>
        <Stack gap="2rem" w="100%" align="center" pb="2rem">
          <ItemList
            items={currentPosture?.transitionalCues ?? []}
            title="Transitional cues:"
            icon={FaPersonWalkingArrowRight}
            iconColor="stickRightLowerLeg"
          />
          <ItemList
            items={currentPosture?.cues ?? []}
            title="Cues:"
            icon={FaPersonHarassing}
            iconColor="secondary"
          />
          <ItemList
            items={currentPosture?.assists ?? []}
            title="Assists:"
            icon={FaPeoplePulling}
            iconColor="stickChest"
          />

          <ItemList
            items={currentPosture?.modifications ?? []}
            title="Modifications:"
            icon={FaCubes}
            iconColor="stickLeftUpperLeg"
          />
        </Stack>
        {nextPosture && (
          <Stack
            w="100%"
            align="center"
            gap="2rem"
            position="sticky"
            bottom="0"
            bgColor="background"
            zIndex="1"
          >
            <Separator
              justifySelf="flex-end"
              borderColor="textDisabled"
              w="90%"
            />
            <Stack gap="1.5rem">
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
                iconColor="stickRightLowerLeg"
              />
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
