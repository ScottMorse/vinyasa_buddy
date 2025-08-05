import {
  Dialog as ChakraDialog,
  Portal,
  type PortalProps,
} from '@chakra-ui/react';
import { CloseButton } from './close-button';
import * as React from 'react';

interface DialogContentProps extends ChakraDialog.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  backdrop?: boolean;
  positionerProps?: ChakraDialog.PositionerProps;
  closeTriggerProps?: ChakraDialog.CloseTriggerProps;
  backdropProps?: ChakraDialog.BackdropProps;
  portalProps?: PortalProps;
}

const DialogRoot = (props: ChakraDialog.RootProps) => {
  return <ChakraDialog.Root placement="center" {...props} />;
};

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  function DialogContent(props, ref) {
    const {
      children,
      portalled = true,
      portalRef,
      backdrop = true,
      positionerProps,
      closeTriggerProps,
      backdropProps,
      portalProps,
      ...rest
    } = props;

    return (
      <Portal disabled={!portalled} container={portalRef} {...portalProps}>
        {backdrop && <ChakraDialog.Backdrop {...backdropProps} />}
        <ChakraDialog.Positioner {...positionerProps}>
          <ChakraDialog.Content ref={ref} {...rest} asChild={false}>
            {children}
          </ChakraDialog.Content>
        </ChakraDialog.Positioner>
      </Portal>
    );
  },
);

const DialogCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  ChakraDialog.CloseTriggerProps
>(function DialogCloseTrigger(props, ref) {
  return (
    <ChakraDialog.CloseTrigger
      position="absolute"
      top="2"
      insetEnd="2"
      border="1px solid"
      borderColor="textSecondary"
      color="textSecondary"
      minW="3rem"
      minH="3rem"
      {...props}
      asChild
    >
      <CloseButton size="sm" ref={ref}>
        {props.children}
      </CloseButton>
    </ChakraDialog.CloseTrigger>
  );
});
export const Dialog = {
  Root: DialogRoot,
  Positioner: ChakraDialog.Positioner,
  Content: DialogContent,
  CloseTrigger: DialogCloseTrigger,
  Footer: ChakraDialog.Footer,
  Header: ChakraDialog.Header,
  Body: ChakraDialog.Body,
  Backdrop: ChakraDialog.Backdrop,
  Title: ChakraDialog.Title,
  Description: ChakraDialog.Description,
  Trigger: ChakraDialog.Trigger,
  ActionTrigger: ChakraDialog.ActionTrigger,
};
