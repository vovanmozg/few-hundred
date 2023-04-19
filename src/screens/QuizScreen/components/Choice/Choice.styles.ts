import type { ColorMode } from 'native-base';

export function styles(colorMode: ColorMode) {
  return {
    normal: {
      backgroundColor: colorMode === 'light' ? 'trueGray.200' : 'trueGray.700',
      borderSize: 2,
      borderColor: colorMode === 'light' ? 'trueGray.200' : 'trueGray.700',
    },
    correct: {
      backgroundColor: colorMode === 'light' ? 'emerald.300' : 'emerald.900',
      borderSize: 2,
      borderColor: colorMode === 'light' ? 'emerald.300' : 'emerald.900',
    },
    incorrect: {
      backgroundColor: colorMode === 'light' ? 'rose.300' : 'rose.900',
      borderSize: 2,
      borderColor: colorMode === 'light' ? 'rose.300' : 'rose.900',
    },
    correctHint: {
      backgroundColor: null,
      borderSize: 2,
      borderColor: colorMode === 'light' ? 'emerald.300' : 'emerald.900',
    },
  };
}
