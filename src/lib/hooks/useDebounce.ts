import { useEffect, useRef, useState } from 'react';

const useDebounce = (value: any, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const timerRef = useRef();

  useEffect(() => {
    // @ts-ignore
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
};
