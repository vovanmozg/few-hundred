import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { saveAnswerProgress } from 'app/store/appState/saveAnswerProgress';
import { TAppState } from 'app/types/TAppState';

export const useStore = create<TAppState>(
  persist(
    set =>
      ({
        answersProgress: {},
        saveAnswerProgress: saveAnswerProgress(set),
      } as TAppState),
    {
      name: 'app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
