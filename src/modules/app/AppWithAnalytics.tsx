import React from 'react';
import {
  AnalyticsProvider,
  createClient,
} from '@segment/analytics-react-native';
import { AppWithNavigation } from 'app/modules/app/AppWithNavigation';

const segmentClient = createClient({
  writeKey: 'KEY',
  trackAppLifecycleEvents: true,
});

export function AppWithAnalytics() {
  return (
    <AnalyticsProvider client={segmentClient}>
      <AppWithNavigation />
    </AnalyticsProvider>
  );
}
