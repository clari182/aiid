import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

function useHasHydrated(beforePaint = true) {
  const [hasHydrated, setHasHydrated] = useState(false);

  // To reduce flicker, we use `useLayoutEffect` so that we return value
  // before React has painted to the browser.
  // React currently throws a warning when using useLayoutEffect on the server so
  // we use useEffect on the server (no-op) and useLayoutEffect in the browser.
  const isServer = typeof window === 'undefined';

  const useEffectFn = beforePaint && !isServer ? useLayoutEffect : useEffect;

  useEffectFn(() => {
    setHasHydrated(true);
  }, []);

  return hasHydrated;
}

export const useLocalStorageState = ({ key, value }) => {
  const parsedLocalStorage = JSON.parse('{}');

  const hasHydrated = useHasHydrated();

  const initialValue = Object.keys(parsedLocalStorage).length > 0 ? parsedLocalStorage : value;

  const [localStorageState, setLocalStorageState] = useState(initialValue);

  const handleUpdateLocalStorageState = useCallback(
    (x) => {
      setLocalStorageState(x);
      localStorage.setItem(key, JSON.stringify(x));
    },
    [key]
  );

  return [hasHydrated ? localStorageState : '{}', handleUpdateLocalStorageState];
};
