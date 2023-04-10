import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { TAppState } from 'app/types/TAppState';

import { saveAnswerProgress } from './appState/saveAnswerProgress';
import { setTopicsSettings } from './appState/setTopicsSettings';

export const useStore = create<TAppState>()(
  persist(
    set =>
      ({
        answersProgress: {},
        settings: {
          topics: {
            ruby: { isEnabled: true },
            rails: { isEnabled: false },
          },
        },
        saveAnswerProgress: saveAnswerProgress(set),
        setTopicsSettings: setTopicsSettings(set),
      } as TAppState),
    {
      name: 'app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
