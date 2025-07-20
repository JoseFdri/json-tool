import { useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const setLocalStorageValue = (key: string, newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [, setLocalStorageValue] as const;
};
