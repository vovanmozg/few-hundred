import { AppRegistry } from 'react-native';
import { ThemedApp } from 'app/modules/app/ThemedApp';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => ThemedApp);
