import { useEffect, useRef } from 'react';

export interface UseTimeoutProps {
  delay: number;
  callback: () => unknown;
  enabled: boolean;
}

export const useTimeout = ({ delay, callback, enabled }: UseTimeoutProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (enabled) {
      const timeout = setTimeout(callback, delay);
      timeoutRef.current = timeout;
      return () => clearTimeout(timeout);
    }
  }, [delay, callback, enabled]);

  return timeoutRef;
};

export interface UseIntervalProps {
  duration: number;
  callback: () => unknown;
  enabled: boolean;
}

export const useInterval = ({
  duration,
  callback,
  enabled,
}: UseIntervalProps) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (enabled) {
      const interval = setInterval(callback, duration);
      intervalRef.current = interval;
      return () => clearInterval(interval);
    }
  }, [duration, callback, enabled]);
};
