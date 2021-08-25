import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import AppTextCard from '../../components/AppTextCard';
import styles from './styles';
import {genre, genreList} from '../../app/constants';
import CustomText from '../../components/CustomText';
import requests from '../../../api/requests';
import {colorObj} from '../../../assets/colors';
import FastImage from 'react-native-fast-image';
import {baseImgUrl} from '../../../api/constants';
import LinearGradient from 'react-native-linear-gradient';

const MovieList = ({
  navigation,
  movieListGenre,
  fetchMovieByGenreIdRequest,
  movieListRequesting,
  movieListArr,
}) => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetchMovieByGenreIdRequest(movieListGenre.id);
  }, [movieListGenre]);
  useEffect(() => {
    if (movieListArr && movieListArr.length > 0) {
      setMovieList([...movieListArr]);
    }
  }, [movieListArr]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView directionalLockEnabled>
        {movieListRequesting ? (
          <View style={styles.loader}>
            <ActivityIndicator size="small" color={colorObj.primaryText} />
          </View>
        ) : (
          <View style={styles.listContainer}>
            {movieList &&
              movieList.map((item, index) => {
                return (
                  <View style={styles.imageContainer} key={index}>
                    <TouchableOpacity
                      style={styles.clickableImageContainer}
                      onPress={() => {
                        navigation.navigate('Details', {item: item});
                      }}>
                      <FastImage
                        style={styles.image}
                        source={{
                          uri: `${baseImgUrl}${item.backdrop_path}`,
                          priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.cover}>
                        <LinearGradient
                          locations={[0, 1.0]}
                          colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.99)']}
                          style={styles.linearGradient}>
                          <View style={styles.imageText}>
                            <CustomText bold>{item.title}</CustomText>
                          </View>
                        </LinearGradient>
                      </FastImage>
                    </TouchableOpacity>
                  </View>
                );
              })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieList;
