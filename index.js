/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './src/views/landing/Login';
import Registration from './src/views/landing/Registration';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
//AppRegistry.registerComponent(appName, () => Registration);
