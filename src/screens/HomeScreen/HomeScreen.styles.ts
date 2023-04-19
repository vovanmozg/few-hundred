import { useColorModeValue } from 'native-base';

export function useHomeScreenStyles(): { bg: string } {
  return {
    bg: useColorModeValue('white', 'trueGray.800'),
  };
}
