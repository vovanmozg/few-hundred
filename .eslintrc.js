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
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
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
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react$', '^@?\\w', '^app/']],
      },
    ],
  },
};
