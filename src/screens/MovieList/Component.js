import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
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
  fetchActionMoviesRequest,
  actionMoviesRequesting,
  actionMovies,
  fetchRomanceMoviesRequest,
  romanceMoviesRequesting,
  romanceMovies,
  horrorMoviesRequesting,
  horrorMovies,
  fetchHorrorMoviesRequest,
}) => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    switch (movieListGenre) {
      case genre.ACTION:
        fetchActionMoviesRequest();
        break;
      case genre.ROMANCE:
        fetchRomanceMoviesRequest();
        break;
      case genre.HORROR:
        fetchHorrorMoviesRequest();
        break;
      default:
        break;
    }
    return () => setMovieList([]);
  }, []);
  useEffect(() => {
    switch (movieListGenre) {
      case genre.ACTION:
        if (actionMovies) {
          let arr = [...actionMovies];
          setMovieList([...arr]);
        }
        break;
      case genre.ROMANCE:
        if (romanceMovies) {
          let arr = [...romanceMovies];
          setMovieList([...arr]);
        }
        break;
      case genre.HORROR:
        if (horrorMovies) {
          let arr = [...horrorMovies];
          setMovieList([...arr]);
        }
        break;

      default:
        break;
    }
  }, [movieListGenre]);

  const loading =
    actionMoviesRequesting || romanceMoviesRequesting || horrorMoviesRequesting;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView directionalLockEnabled>
        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="small" color={colorObj.primaryText} />
          </View>
        ) : (
          <View style={styles.listContainer}>
            {movieList &&
              movieList.map((item, index) => {
                return (
                  <View style={styles.imageContainer} key={index}>
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
