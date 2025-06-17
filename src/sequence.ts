import type { PostureId } from './postures';

interface AbstractSequenceItem {
  posture: PostureId;
  duration: number;
  durationUnit: 'minute' | 'breath';
  breath: 'inhale' | 'exhale' | null;
  side: 'left' | 'right' | null;
}
