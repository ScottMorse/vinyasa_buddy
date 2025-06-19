import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
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

type SessionKeys = 'sequenceIndex' | 'setSequenceIndex';

type LocalStoreState = Omit<StoreState, SessionKeys>;
type SessionStoreState = Pick<StoreState, SessionKeys>;

const useLocalStore = create<LocalStoreState>()(
  persist(
    (set) => ({
      chakraSystem: DEFAULT_CHAKRA_SYSTEM,
      setChakraSystem: (system) => set({ chakraSystem: system }),
      sequenceIndex: null,
      setSequenceIndex: (index) => set({ sequenceIndex: index }),
      acceptedDisclaimer: false,
      setAcceptedDisclaimer: (accepted) =>
        set({ acceptedDisclaimer: accepted }),
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
    {
      name: 'vb-store',
      partialize: (state) => ({
        disclaimerIgnored: state.disclaimerIgnored,
        hideOptions: state.hideOptions,
      }),
    },
  ),
);

export const useSessionStore = create<SessionStoreState>()(
  persist(
    (set) => ({
      sequenceIndex: null,
      setSequenceIndex: (index) => set({ sequenceIndex: index }),
    }),
    {
      name: 'vb-session-store',
      partialize: (state) => ({
        sequenceIndex: state.sequenceIndex,
      }),
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export const useChakraSystem = () =>
  useLocalStore((state) => state.chakraSystem);
export const useSetChakraSystem = () =>
  useLocalStore((state) => state.setChakraSystem);

export const useSequenceIndex = () =>
  useSessionStore((state) => state.sequenceIndex);
export const useSetSequenceIndex = () =>
  useSessionStore((state) => state.setSequenceIndex);

export const useAcceptedDisclaimer = () =>
  useLocalStore((state) => state.acceptedDisclaimer);
export const useSetAcceptedDisclaimer = () =>
  useLocalStore((state) => state.setAcceptedDisclaimer);

export const useDisclaimerIgnored = () =>
  useLocalStore((state) => state.disclaimerIgnored);
export const useSetDisclaimerIgnored = () =>
  useLocalStore((state) => state.setDisclaimerIgnored);

export const useWindowWidth = () => useLocalStore((state) => state.windowWidth);
export const useSetWindowWidth = () =>
  useLocalStore((state) => state.setWindowWidth);

export const useHideOptions = () => useLocalStore((state) => state.hideOptions);
export const useUpdateHideOptions = () =>
  useLocalStore((state) => state.updateHideOptions);
