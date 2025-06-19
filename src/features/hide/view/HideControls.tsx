import { useHideOptions, useUpdateHideOptions } from '@/features/store';
import { Button, HStack, Icon } from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const HideIcon = ({ isHidden }: { isHidden: boolean }) => (
  <Icon
    aria-label={isHidden ? 'Show' : 'Hide'}
    width="1.5rem"
    height="1.5rem"
    as={isHidden ? FaEyeSlash : FaEye}
  />
);

export const HideControls = () => {
  const hideOptions = useHideOptions();
  const setHideOptions = useUpdateHideOptions();

  return (
    <HStack gap="1rem" flexWrap="wrap" maxW="60rem" justify="center">
      <Button
        variant="outline"
        color={hideOptions.postureName ? 'primary' : 'secondary'}
        size="sm"
        px="0.75rem"
        py="1.75rem"
        onClick={() =>
          setHideOptions({ postureName: !hideOptions.postureName })
        }
      >
        <HideIcon isHidden={hideOptions.postureName} /> Posture Name
      </Button>

      <Button
        variant="outline"
        color={hideOptions.postureSanskritName ? 'primary' : 'secondary'}
        size="sm"
        px="0.75rem"
        py="1.75rem"
        onClick={() =>
          setHideOptions({
            postureSanskritName: !hideOptions.postureSanskritName,
          })
        }
      >
        <HideIcon isHidden={hideOptions.postureSanskritName} /> Sanskrit
      </Button>
      <Button
        variant="outline"
        color={hideOptions.seriesName ? 'primary' : 'secondary'}
        size="sm"
        px="0.75rem"
        py="1.75rem"
        onClick={() => setHideOptions({ seriesName: !hideOptions.seriesName })}
      >
        <HideIcon isHidden={hideOptions.seriesName} /> Series Name
      </Button>
      <Button
        variant="outline"
        color={hideOptions.seriesDescription ? 'primary' : 'secondary'}
        size="sm"
        px="0.75rem"
        py="1.75rem"
        onClick={() =>
          setHideOptions({ seriesDescription: !hideOptions.seriesDescription })
        }
      >
        <HideIcon isHidden={hideOptions.seriesDescription} /> Series Info
      </Button>
      <Button
        variant="outline"
        color={hideOptions.breath ? 'primary' : 'secondary'}
        size="sm"
        px="0.75rem"
        py="1.75rem"
        onClick={() => setHideOptions({ breath: !hideOptions.breath })}
      >
        <HideIcon isHidden={hideOptions.breath} /> Breath
      </Button>
      <Button
        variant="outline"
        color={hideOptions.duration ? 'primary' : 'secondary'}
        size="sm"
        px="0.75rem"
        py="1.75rem"
        onClick={() => setHideOptions({ duration: !hideOptions.duration })}
      >
        <HideIcon isHidden={hideOptions.duration} /> Duration
      </Button>
      <Button
        variant="outline"
        color={hideOptions.vinyasaBuddy ? 'primary' : 'secondary'}
        size="sm"
        px="0.75rem"
        py="1.75rem"
        onClick={() =>
          setHideOptions({ vinyasaBuddy: !hideOptions.vinyasaBuddy })
        }
      >
        <HideIcon isHidden={hideOptions.vinyasaBuddy} /> Vinyasa Buddy
      </Button>
    </HStack>
  );
};
