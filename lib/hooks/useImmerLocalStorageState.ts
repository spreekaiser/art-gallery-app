import { useCallback } from "react";
import useLocalStorageState from "use-local-storage-state";

type UseImmerLocalStorageStateReturn<T> = [T, (updater: any) => void];

export function useImmerLocalStorageState<T>(
  key: string,
  options: { defaultValue: T }
): UseImmerLocalStorageStateReturn<T> {
  const [value, setValue] = useLocalStorageState(key, {
    ...options,
    defaultValue: options.defaultValue,
  });

  const updateValue = useCallback(
    (updater: any) => {
      setValue(updater);
    },
    [setValue]
  );

  return [value, updateValue];
}
