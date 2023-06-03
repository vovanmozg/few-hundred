import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { customTheme } from 'app/theme/theme';

import { AppWithAnalytics } from './AppWithAnalytics';

export function ThemedApp() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <AppWithAnalytics />
    </NativeBaseProvider>
  );
}
