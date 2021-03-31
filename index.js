/* eslint-disable no-console */
/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];