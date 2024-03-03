import React from 'react';
import {
  AnalyticsProvider,
  createClient,
} from '@segment/analytics-react-native';
import Config from 'react-native-config';
import { AppWithNavigation } from 'app/modules/app/AppWithNavigation';

// TODO: fix env vars from .env file
//  https://github.com/lugg/react-native-config/issues/541#issuecomment-1491388207
const segmentClient = createClient({
  writeKey: 'ZhdCjVf2BnIuLOrXqL6t7dN3bi5x76mD', //Config.SEGMENT_KEY || '',
  trackAppLifecycleEvents: true,
});

export function AppWithAnalytics() {
  return (
    <AnalyticsProvider client={segmentClient}>
      <AppWithNavigation />
    </AnalyticsProvider>
  );
}
