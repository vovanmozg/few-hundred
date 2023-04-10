import { useStore as useAppStore } from 'app/store/appState';
import type { TAppState, TTopic, TTopicsSettins } from 'app/types/TAppState';

export function useTopicsSettings(): [
  TTopicsSettins,
  (value: boolean, topic: TTopic) => void,
] {
  const settings = useAppStore((state: TAppState) => state.settings.topics);
  const set = useAppStore((state: TAppState) => state.setTopicsSettings);

  function setIsEnabledTopicsSettings(value: boolean, topic: TTopic) {
    set(value, topic);
  }

  return [settings, setIsEnabledTopicsSettings];
}
