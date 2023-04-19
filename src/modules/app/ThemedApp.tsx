import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { AppWithNavigation } from 'app/modules/app/AppWithNavigation';
import { customTheme } from 'app/theme/theme';

export function ThemedApp() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <AppWithNavigation />
    </NativeBaseProvider>
  );
}
