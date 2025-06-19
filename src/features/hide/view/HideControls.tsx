import { useHideOptions, useUpdateHideOptions } from '@/features/store';
import { Button, HStack } from '@chakra-ui/react';

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
        {hideOptions.postureName ? '✔' : ''} Hide Posture Name
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
        {hideOptions.postureSanskritName ? '✔' : ''} Hide Sanskrit
      </Button>
      <Button
        variant="outline"
        color={hideOptions.seriesName ? 'primary' : 'secondary'}
        size="sm"
        px="0.75rem"
        py="1.75rem"
        onClick={() => setHideOptions({ seriesName: !hideOptions.seriesName })}
      >
        {hideOptions.seriesName ? '✔' : ''} Hide Series Name
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
        {hideOptions.seriesDescription ? '✔' : ''} Hide Series Info
      </Button>
      <Button
        variant="outline"
        color={hideOptions.breath ? 'primary' : 'secondary'}
        size="sm"
        px="0.75rem"
        py="1.75rem"
        onClick={() => setHideOptions({ breath: !hideOptions.breath })}
      >
        {hideOptions.breath ? '✔' : ''} Hide Breath
      </Button>
      <Button
        variant="outline"
        color={hideOptions.duration ? 'primary' : 'secondary'}
        size="sm"
        px="0.75rem"
        py="1.75rem"
        onClick={() => setHideOptions({ duration: !hideOptions.duration })}
      >
        {hideOptions.duration ? '✔' : ''} Hide Duration
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
        {hideOptions.vinyasaBuddy ? '✔' : ''} Hide Vinyasa Buddy
      </Button>
    </HStack>
  );
};
