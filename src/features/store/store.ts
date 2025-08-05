import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { SystemContext } from '@chakra-ui/react';
import { DEFAULT_CHAKRA_SYSTEM } from '@/features/chakra/theme/defaultSystem';
import type { PostureId } from '../posture';

export interface HideOptions {
  postureName: boolean;
  postureSanskritName: boolean;
  vinyasaBuddy: boolean;
  seriesName: boolean;
  seriesDescription: boolean;
  breath: boolean;
  duration: boolean;
}

interface LocalStoreState {
  theme: {
    chakraSystem: SystemContext;
    setChakraSystem: (system: SystemContext) => void;
  };
  disclaimer: {
    acceptedDisclaimer: boolean;
    setAcceptedDisclaimer: (accepted: boolean) => void;
    disclaimerIgnored: boolean;
    setDisclaimerIgnored: (ignored: boolean) => void;
  };
  layout: {
    windowWidth: number;
    setWindowWidth: (width: number) => void;
  };
  hide: {
    options: HideOptions;
    updateOptions: (options: Partial<HideOptions>) => void;
  };
  details: {
    selectedPosture: PostureId;
    setSelectedPosture: (posture: PostureId) => void;
    isDetailsModalOpen: boolean;
    setIsDetailsModalOpen: (isOpen: boolean) => void;
  };
}

export interface SessionStoreState {
  sequenceIndex: number | null;
  setSequenceIndex: (index: number | null) => void;
}

const useLocalStore = create<LocalStoreState>()(
  persist(
    (set) => ({
      theme: {
        chakraSystem: DEFAULT_CHAKRA_SYSTEM,
        setChakraSystem: (system) =>
          set((state) => ({
            theme: { ...state.theme, chakraSystem: system },
          })),
      },
      disclaimer: {
        acceptedDisclaimer: false,
        setAcceptedDisclaimer: (accepted) =>
          set((state) => ({
            disclaimer: { ...state.disclaimer, acceptedDisclaimer: accepted },
          })),
        disclaimerIgnored: false,
        setDisclaimerIgnored: (ignored) =>
          set((state) => ({
            disclaimer: { ...state.disclaimer, disclaimerIgnored: ignored },
          })),
      },
      layout: {
        windowWidth: window.innerWidth,
        setWindowWidth: (width) =>
          set((state) => ({
            layout: { ...state.layout, windowWidth: width },
          })),
      },
      hide: {
        options: {
          postureName: false,
          postureSanskritName: false,
          vinyasaBuddy: false,
          seriesName: false,
          seriesDescription: false,
          breath: false,
          duration: false,
        },
        updateOptions: (options) =>
          set((state) => ({
            hide: { ...state.hide, ...options },
          })),
      },
      details: {
        selectedPosture: 'child',
        setSelectedPosture: (posture) =>
          set((state) => ({
            details: { ...state.details, selectedPosture: posture },
          })),
        isDetailsModalOpen: false,
        setIsDetailsModalOpen: (isOpen) =>
          set((state) => ({
            details: { ...state.details, isDetailsModalOpen: isOpen },
          })),
      },
    }),
    {
      name: 'vb-store',
      partialize: (state) => ({
        disclaimer: {
          acceptedDisclaimer: state.disclaimer.acceptedDisclaimer,
          disclaimerIgnored: state.disclaimer.disclaimerIgnored,
        },
        hide: state.hide,
      }),
    },
  ),
);

export const useSessionStore = create<SessionStoreState>()(
  persist(
    (set) => ({
      sequenceIndex: null,
      setSequenceIndex: (index) =>
        set((state) => ({
          sequenceIndex: index,
        })),
    }),
    {
      name: 'vb-session-store',
      partialize: ({ sequenceIndex }) => ({
        sequenceIndex,
      }),
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export const useChakraSystem = () =>
  useLocalStore((state) => state.theme.chakraSystem);
export const useSetChakraSystem = () =>
  useLocalStore((state) => state.theme.setChakraSystem);

export const useSequenceIndex = () =>
  useSessionStore((state) => state.sequenceIndex);
export const useSetSequenceIndex = () =>
  useSessionStore((state) => state.setSequenceIndex);

export const useAcceptedDisclaimer = () =>
  useLocalStore((state) => state.disclaimer.acceptedDisclaimer);
export const useSetAcceptedDisclaimer = () =>
  useLocalStore((state) => state.disclaimer.setAcceptedDisclaimer);

export const useDisclaimerIgnored = () =>
  useLocalStore((state) => state.disclaimer.disclaimerIgnored);
export const useSetDisclaimerIgnored = () =>
  useLocalStore((state) => state.disclaimer.setDisclaimerIgnored);

export const useWindowWidth = () =>
  useLocalStore((state) => state.layout.windowWidth);
export const useSetWindowWidth = () =>
  useLocalStore((state) => state.layout.setWindowWidth);

export const useHideOptions = () =>
  useLocalStore((state) => state.hide.options);
export const useUpdateHideOptions = () =>
  useLocalStore((state) => state.hide.updateOptions);

export const postureDetails = {
  useIsModalOpen: () =>
    useLocalStore((state) => state.details.isDetailsModalOpen),
  useSetIsModalOpen: () =>
    useLocalStore((state) => state.details.setIsDetailsModalOpen),
};
