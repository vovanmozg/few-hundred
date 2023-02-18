module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@react-native-community',
    'prettier',
  ],
  plugins: ['simple-import-sort'],
  settings: {
    'import/resolver': {
      'babel-module': {},
      // node: {
      //   extensions: ['.js', '.jsx', '.ts', '.tsx'],
      //   paths: ['app'],
      //   moduleDirectory: ['app/', 'node_modules'],
      // },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
