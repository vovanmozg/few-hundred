import { create } from 'zustand';
import { saveAnswerProgress } from 'app/store/appState/saveAnswerProgress';
import { TAppState } from 'app/types/TAppState';

export const useStore = create<TAppState>(
  set =>
    ({
      answersProgress: {},
      saveAnswerProgress: saveAnswerProgress(set),
    } as TAppState),
);
