import { useCallback, useRef } from 'react';

interface IuseDebounce {
  callback: () => void;
  delay: number;
}

export function useDebounce(callback: () => void, delay: number) {
  let timer = useRef<number>();

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
      console.log('debounce');
    },
    [callback, delay]
  );

  return debouncedCallback;
}
