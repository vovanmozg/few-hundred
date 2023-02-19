import { AppRegistry } from 'react-native';
import { AppWithNavigation } from 'app/modules/app/AppWithNavigation';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppWithNavigation);
