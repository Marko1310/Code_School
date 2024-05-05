import { useState, useEffect } from 'react';

export function useLocalStorageState<T>(
  initialState: T | string,
  key: string,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
