import React from 'react';
import {
  AnalyticsProvider,
  createClient,
} from '@segment/analytics-react-native';
import Config from 'react-native-config';
import { AppWithNavigation } from 'app/modules/app/AppWithNavigation';

const segmentClient = createClient({
  writeKey: Config.SEGMENT_KEY || '',
  trackAppLifecycleEvents: true,
});

export function AppWithAnalytics() {
  return (
    <AnalyticsProvider client={segmentClient}>
      <AppWithNavigation />
    </AnalyticsProvider>
  );
}
