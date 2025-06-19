import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SystemContext } from '@chakra-ui/react';
import { DEFAULT_CHAKRA_SYSTEM } from '@/features/chakra/theme/defaultSystem';

export interface HideOptions {
  postureName: boolean;
  postureSanskritName: boolean;
  vinyasaBuddy: boolean;
  seriesName: boolean;
  seriesDescription: boolean;
  breath: boolean;
  duration: boolean;
}

interface StoreState {
  chakraSystem: SystemContext;
  setChakraSystem: (system: SystemContext) => void;
  sequenceIndex: number | null;
  setSequenceIndex: (index: number | null) => void;
  acceptedDisclaimer: boolean;
  setAcceptedDisclaimer: (accepted: boolean) => void;
  disclaimerIgnored: boolean;
  setDisclaimerIgnored: (ignored: boolean) => void;
  windowWidth: number;
  setWindowWidth: (width: number) => void;
  hideOptions: HideOptions;
  updateHideOptions: (options: Partial<HideOptions>) => void;
}

const useStore = create<StoreState>()(
  // persist
  (set) => ({
    chakraSystem: DEFAULT_CHAKRA_SYSTEM,
    setChakraSystem: (system) => set({ chakraSystem: system }),
    sequenceIndex: null,
    setSequenceIndex: (index) => set({ sequenceIndex: index }),
    acceptedDisclaimer: false,
    setAcceptedDisclaimer: (accepted) => set({ acceptedDisclaimer: accepted }),
    windowWidth: window.innerWidth,
    setWindowWidth: (width) => set({ windowWidth: width }),
    disclaimerIgnored: false,
    setDisclaimerIgnored: (ignored) => set({ disclaimerIgnored: ignored }),
    hideOptions: {
      postureName: false,
      postureSanskritName: false,
      vinyasaBuddy: false,
      seriesName: false,
      seriesDescription: false,
      breath: false,
      duration: false,
    },
    updateHideOptions: (options) =>
      set((state) => ({
        hideOptions: { ...state.hideOptions, ...options },
      })),
  }),
  // {
  //   name: 'cambio-store',
  // },
  // ),
);

export const useChakraSystem = () => useStore((state) => state.chakraSystem);
export const useSetChakraSystem = () =>
  useStore((state) => state.setChakraSystem);

export const useSequenceIndex = () => useStore((state) => state.sequenceIndex);
export const useSetSequenceIndex = () =>
  useStore((state) => state.setSequenceIndex);

export const useAcceptedDisclaimer = () =>
  useStore((state) => state.acceptedDisclaimer);
export const useSetAcceptedDisclaimer = () =>
  useStore((state) => state.setAcceptedDisclaimer);

export const useDisclaimerIgnored = () =>
  useStore((state) => state.disclaimerIgnored);
export const useSetDisclaimerIgnored = () =>
  useStore((state) => state.setDisclaimerIgnored);

export const useWindowWidth = () => useStore((state) => state.windowWidth);
export const useSetWindowWidth = () =>
  useStore((state) => state.setWindowWidth);

export const useHideOptions = () => useStore((state) => state.hideOptions);
export const useUpdateHideOptions = () =>
  useStore((state) => state.updateHideOptions);
