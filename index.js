import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('TrackPlayer', () => async (data) => {
  if (data.type === 'playback-state') {
    // Update the UI with the new state
  } else if (data.type === 'remote-play') {
    // The play button was pressed, we can forward this command to the player using
    TrackPlayer.play();
  } else if (data.type === 'remote-stop') {
    // The stop button was pressed, we can stop the player
    TrackPlayer.stop();
  } else if (data.type === 'remote-pause') {
    // The play button was pressed, we can forward this command to the player using
    TrackPlayer.pause();
  }
});
