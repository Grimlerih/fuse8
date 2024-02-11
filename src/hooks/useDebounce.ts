import { useCallback, useRef } from 'react';

// Определяем тип для функции обратного вызова
type CallbackFunction = (...args: any[]) => void;

export function useDebounce(callback: CallbackFunction, delay: number) {
  const timer = useRef<number>();

  const debouncedCallback = useCallback(
    (...args: Parameters<CallbackFunction>) => {
      // Используем Parameters<CallbackFunction> для получения типов аргументов функции callback
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
