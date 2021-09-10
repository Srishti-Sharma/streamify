import React, {useState} from 'react';
import {View, Text} from 'react-native';
import YouTube from 'react-native-youtube';
import {AUTH_KEY} from '../../../api/constants';
import {BackButton} from '../../components';

import styles from './styles';

const PlayScreen = ({route, navigation}) => {
  const {url} = route.params;

  const [error, setError] = useState();
  const [isReady, setIsReady] = useState();
  const [quality, setQuality] = useState();
  const [status, setStatus] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', marginBottom: 70}}>
        <YouTube
          apiKey={AUTH_KEY}
          videoId={url} // The YouTube video ID
          play // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={e => setIsReady(true)}
          onChangeState={e => setStatus(e.state)}
          onChangeQuality={e => setQuality(e.quality)}
          onError={e => setError(e.error)}
          style={{
            alignSelf: 'stretch',
            height: 300,
          }}
        />
      </View>
    </View>
  );
};
export default PlayScreen;
