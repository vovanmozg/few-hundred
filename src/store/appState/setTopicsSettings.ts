import type { TAppState, TTopic } from 'app/types/TAppState';

export function setTopicsSettings(
  set: (partial: (state: TAppState) => Partial<TAppState>) => void,
) {
  return (isEnabled: boolean, topic: TTopic): void =>
    set((state: TAppState) => {
      const settings = {
        ...state.settings,
        topics: {
          ...state.settings.topics,
          [topic]: { isEnabled },
        },
      };
      return {
        settings,
      };
    });
}
