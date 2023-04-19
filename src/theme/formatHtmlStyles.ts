import type { ColorMode } from 'native-base';

export function classesStyles(colorMode: ColorMode) {
  return {
    container: {
      fontSize: '1.2em',
    },
    code: {
      backgroundColor: colorMode === 'light' ? '#F0F0F0' : '#333333',
      borderRadius: 5,
      padding: 5,
    },
    inlineCode: {
      backgroundColor: colorMode === 'light' ? '#F0F0F0' : '#333333',
      // whiteSpace: 'pre',
    },
  };
}

export const tagsStyles = {
  p: {
    margin: '0 0 0.5em',
  },
};
