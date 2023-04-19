import { useColorModeValue } from 'native-base';

export function useQuizScreenStyles(): { bg: string } {
  return {
    bg: useColorModeValue('white', 'trueGray.800'),
  };
}
