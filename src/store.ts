import { create } from 'zustand';
import { getPosture, type PostureId } from './postures';
import { persist } from 'zustand/middleware';

interface StoreState {
  posture: PostureId | null;
  setPosture: (posture: PostureId) => void;
}

const useStore = create<StoreState>()(
  // persist
  (set) => ({
    posture: 'triangleLift' as const,
    setPosture: (posture: PostureId) => set({ posture }),
  }),
  // {
  //   name: 'cambio-store',
  // },
  // ),
);

export const usePosture = () => getPosture(useStore((state) => state.posture));
export const useSetPosture = () => useStore((state) => state.setPosture);
