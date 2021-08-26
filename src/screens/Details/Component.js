import React, {useEffect, useState} from 'react';
const {width, height} = Dimensions.get('window');
import {
  View,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {baseImgUrl} from '../../../api/constants';
import {colorObj} from '../../../assets/colors';
import {BackButton} from '../../components';
import CustomText from '../../components/CustomText';
import WavyHeader from '../../components/WavyHeader';
import YouTube from 'react-native-youtube';

import styles from './styles';
const Details = ({
  route,
  navigation,
  genreList,
  movieTrailerUrlRequesting,
  movieTrailerUrl,
  fetchMovieTrailerUrlRequest,
}) => {
  const {item} = route.params;
  const CURVED_HEIGHT = 400;

  const windowWidth = Dimensions.get('window').width;
  const [showYouTube, setShowYouTube] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState('');
  const [quality, setQuality] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (item && item.id) {
      fetchMovieTrailerUrlRequest(item.id);
    }
  }, []);

  const getGenres = (genre_arr, genreList) => {
    let genre_data = genreList
      .map(genreItem => {
        if (genre_arr.includes(genreItem.id)) {
          return genreItem.name;
        }
      })
      .filter(item => item !== undefined);
    return genre_data;
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        {movieTrailerUrlRequesting ? (
          <ActivityIndicator size="small" color={colorObj.primaryText} />
        ) : showYouTube ? (
          <>
            <View style={styles.youTubeBackButton}>
              <BackButton onPress={() => setShowYouTube(false)} />
            </View>
            <View style={styles.youTubeContainer}>
              <YouTube
                videoId={movieTrailerUrl} // The YouTube video ID
                play // control playback of video with true/false
                fullscreen // control whether the video should play in fullscreen or inline
                loop // control whether the video should loop when ended
                onReady={e => setIsReady(true)}
                onChangeState={e => setStatus(e.state)}
                onChangeQuality={e => setQuality(e.quality)}
                onError={e => setError(e.error)}
                style={{alignSelf: 'stretch', height: 300}}
                showFullscreenButton
              />
            </View>
          </>
        ) : (
          <View
            style={{backgroundColor: colorObj.white, height: CURVED_HEIGHT}}>
            <ImageBackground
              source={{uri: `${baseImgUrl}${item.poster_path}`}}
              style={styles.imageStyle}
              resizeMode="cover">
              <LinearGradient
                locations={[1, 0]}
                colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.4)']}
                style={styles.linearGradient}>
                <View style={styles.buttonContainer}>
                  <BackButton onPress={() => navigation.goBack()} />
                </View>
                <WavyHeader
                  curvedHeight={CURVED_HEIGHT}
                  customStyles={styles.svgCurve}
                  screenWidth={windowWidth}
                  onPress={() => setShowYouTube(true)}
                />
              </LinearGradient>
            </ImageBackground>

            <View style={styles.innerContainer}>
              <CustomText style={styles.headerText}> {item.title}</CustomText>
              <CustomText style={styles.genreText}>
                {item.genre_ids.length > 0
                  ? getGenres(item.genre_ids, genreList).join('  ')
                  : 'Genre'}
              </CustomText>
              <CustomText style={styles.bodyText}> {item.overview}</CustomText>
              <TouchableOpacity
                onPress={() => setShowYouTube(true)}
                style={{
                  backgroundColor: colorObj.secondary,
                  padding: 10,
                  marginTop: 10,
                }}>
                <Text style={{color: 'black'}}>Click</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Details;
