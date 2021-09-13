import React, {useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import FastImage from 'react-native-fast-image';

import LinearGradient from 'react-native-linear-gradient';
import {baseImgUrl} from '../../../api/constants';
import {colorObj} from '../../../assets/colors';
import {BackButton} from '../../components';
import CustomText from '../../components/CustomText';
import RoundButton from '../../components/RoundButton';
import WavyHeader from '../../components/WavyHeader';

import {vs, ms} from '../../helpers/styleHelpers';

import {Rating} from 'react-native-ratings';

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
  const height = Dimensions.get('screen').height;

  const CURVED_HEIGHT = height / 2;

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
    <>
      {movieTrailerUrlRequesting ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="small" color={colorObj.primaryText} />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          style={styles.container}>
          <View
            style={{
              backgroundColor: colorObj.primary,
              height: CURVED_HEIGHT - 60,
            }}>
            <FastImage
              source={{uri: `${baseImgUrl}${item.poster_path}`}}
              style={styles.imageStyle}
              resizeMode="cover">
              <LinearGradient
                locations={[0.3, 0]}
                colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.5)']}
                style={styles.linearGradient}
              />
              <BackButton
                onPress={() => navigation.goBack()}
                showBackground={true}
              />
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
            </FastImage>
          </View>
          <View style={styles.innerContainer}>
            <CustomText style={styles.headerText}> {item.title}</CustomText>
            <CustomText style={styles.genreText}>
              {item.genre_ids.length > 0
                ? getGenres(item.genre_ids, genreList).join('  ')
                : 'Genre'}
            </CustomText>
            <CustomText style={styles.bodyText}>{item.overview}</CustomText>
            <View style={styles.ratingContainer}>
              <Rating
                imageSize={30}
                size={30}
                readonly
                startingValue={item.vote_average / 2}
                fractions={1}
                tintColor={colorObj.primary}
                style={styles.rating}
                count={10}
              />
              <CustomText style={styles.ratingText}>
                {item.vote_count}
              </CustomText>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Details;
