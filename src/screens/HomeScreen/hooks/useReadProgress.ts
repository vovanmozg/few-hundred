import { useStore as useAppStore } from 'app/store/appState';

export function useReadProgress() {
  const progress = useAppStore(state => state.answersProgress);
  console.log(progress);
}
