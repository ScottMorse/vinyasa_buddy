import { DialogRoot } from '@/features/chakra/uiSnippets';
import { getPosture } from '@/features/posture';
import { StickFigure } from '@/features/stickFigure';
import {
  useAcceptedDisclaimer,
  useDisclaimerIgnored,
  useSetAcceptedDisclaimer,
  useSetDisclaimerIgnored,
  useWindowWidth,
} from '@/features/store';
import {
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/features/chakra/uiSnippets';
import {
  Box,
  Button,
  Checkbox,
  DialogPositioner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { LayoutTitle } from './LayoutTitle';
import { useState } from 'react';

export const LayoutDisclaimer = () => {
  const acceptedDisclaimer = useAcceptedDisclaimer();
  const disclaimerIgnored = useDisclaimerIgnored();
  const setAcceptedDisclaimer = useSetAcceptedDisclaimer();
  const setDisclaimerIgnored = useSetDisclaimerIgnored();

  const [isIgnoreSelected, setIsIgnoreSelected] = useState(false);

  const windowWidth = useWindowWidth();

  return (
    <DialogRoot
      open={!acceptedDisclaimer && !disclaimerIgnored}
      placement="center"
      size={{ base: 'lg', md: 'xl' }}
    >
      <DialogPositioner>
        <DialogContent
          border="0.5rem solid"
          borderColor="primary"
          borderRadius="3xl"
          w="fit-content"
          maxW="calc(100vw - 3rem)"
        >
          <DialogHeader>
            <DialogTitle textAlign="center" w="100%">
              <LayoutTitle fontSize={{ base: '2.5rem', md: '4rem' }} />
            </DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Stack align="center">
              <StickFigure
                position={getPosture('downwardDog')?.stickFigurePosition ?? {}}
                config={{
                  headRadius:
                    windowWidth < 450 ? 12 : windowWidth < 768 ? 14 : 20,
                  lineWidth:
                    windowWidth < 450 ? 8 : windowWidth < 768 ? 10 : 12,
                  cropToPosture: true,
                }}
              />
            </Stack>
            <Text
              textStyle="body"
              textAlign="center"
              fontSize={{ base: '1.4rem', sm: '1.6rem', md: '2rem' }}
              maxW="50rem"
            >
              <Box mb="1rem">
                Hi! I'm{' '}
                <Box as="span" color="primary">
                  Vinyasa
                </Box>{' '}
                <Box as="span" color="secondary">
                  Buddy
                </Box>
                .
              </Box>
              <Box as="span" color="textSecondary">
                Please remember:
              </Box>{' '}
              I'm not a human and am just here to help you remember each
              posture.
              <Box mt="1rem">Don't attempt to do them just like me!</Box>
            </Text>
          </DialogBody>
          <DialogFooter justifyContent="center" mt="0.5rem">
            <Stack gap="1.5rem" align="center">
              <Checkbox.Root
                checked={isIgnoreSelected}
                onChange={() => setIsIgnoreSelected(!isIgnoreSelected)}
                cursor="pointer"
                size="lg"
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control>
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Label
                  fontSize={{ base: '1.6rem', md: '2rem' }}
                  color="textPrimary"
                >
                  Don't show this again
                </Checkbox.Label>
              </Checkbox.Root>
              <Button
                color="primary"
                onClick={() => {
                  setAcceptedDisclaimer(true);
                  if (isIgnoreSelected) {
                    setDisclaimerIgnored(true);
                  }
                }}
                width="fit-content"
              >
                Got it!
              </Button>
            </Stack>
          </DialogFooter>
        </DialogContent>
      </DialogPositioner>
    </DialogRoot>
  );
};
