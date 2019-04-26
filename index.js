/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import './globals';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerEventHandler(require('./src/BL/Services/event-handler-service'));
