import { useCallback } from "react";
import useLocalStorageState from "use-local-storage-state";
import { UseImmerLocalStorageStateReturn } from "../../types/types";

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
