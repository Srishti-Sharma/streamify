import React, {useEffect, useState} from 'react';
import {View, ImageBackground, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {baseImgUrl} from '../../../api/constants';
import {colorObj} from '../../../assets/colors';
import {BackButton} from '../../components';
import CustomText from '../../components/CustomText';
import RoundButton from '../../components/RoundButton';
import WavyHeader from '../../components/WavyHeader';

import styles from './styles';

export const CURVED_HEIGHT = 400;

const Details = ({
  route,
  navigation,
  genreList,
  movieTrailerUrlRequesting,
  movieTrailerUrl,
  fetchMovieTrailerUrlRequest,
}) => {
  const {item} = route.params;

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
    <View style={styles.container}>
      {movieTrailerUrlRequesting ? (
        <ActivityIndicator size="small" color={colorObj.primaryText} />
      ) : (
        <View
          style={{
            backgroundColor: colorObj.primary,
            height: CURVED_HEIGHT,
          }}>
          <ImageBackground
            source={{uri: `${baseImgUrl}${item.poster_path}`}}
            style={styles.imageStyle}
            resizeMode="cover">
            <LinearGradient
              locations={[1, 0]}
              colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.7)']}
              style={styles.linearGradient}>
              <View style={styles.buttonContainer}>
                <BackButton onPress={() => navigation.goBack()} />
              </View>
              <WavyHeader
                curvedHeight={CURVED_HEIGHT}
                customStyles={styles.svgCurve}
              />
              <View style={styles.roundButton}>
                <RoundButton
                  onPress={() => {
                    navigation.navigate('PlayScreen', {
                      url: movieTrailerUrl,
                    });
                  }}
                />
              </View>
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
          </View>
        </View>
      )}
    </View>
  );
};

export default Details;
