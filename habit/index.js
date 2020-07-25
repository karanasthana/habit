/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppProvider from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => AppProvider);
