import { extendTheme } from 'native-base';

const config = {
  useSystemColorMode: true,
};

export const headerStyle = {
  backgroundColor: ['info.100', 'trueGray.900'],
  color: ['trueGray.900', 'trueGray.300'],
};

export const headerIconStyle = {
  color: ['trueGray.900', 'trueGray.300'],
};

export const customTheme = extendTheme({
  config,
  components: {
    Button: {
      // Can simply pass default props to change default behaviour of components.
      baseStyle: {
        rounded: 'md',
      },
      defaultProps: {},
    },
    Heading: {
      // Can pass also function, giving you access theming tools
      baseStyle: ({ colorMode }: Record<string, string>) => {
        return {
          color: colorMode === 'dark' ? 'red.300' : 'blue.300',
          fontWeight: 'normal',
        };
      },
    },
  },
});
