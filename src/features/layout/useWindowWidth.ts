import throttle from 'lodash/throttle';
import { useEffect } from 'react';
import { useSetWindowWidth } from '@/features/store';

export const useWindowWidth = () => {
  const setWindowWidth = useSetWindowWidth();

  useEffect(() => {
    const handleResize = throttle(
      () => {
        setWindowWidth(window.innerWidth);
      },
      200,
      { leading: true, trailing: true },
    );
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setWindowWidth]);
};
