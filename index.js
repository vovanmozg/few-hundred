import { AppWithNavigation } from 'app/modules/app/AppWithNavigation';
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppWithNavigation);
