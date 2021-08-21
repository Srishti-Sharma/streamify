import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import CustomText from '../../components/CustomText';
import styles from './styles';
import requests from '../../../api/requests';
import HorizontalRow from '../../components/HorizontalRow';
import CarouselCards from '../../components/CarouselCards';

const HomeScreen = ({
  fetchActionMoviesRequest,
  actionMovies,
  actionMoviesRequesting,
  fetchRomanceMoviesRequest,
  romanceMovies,
  romanceMoviesRequesting,
  horrorMovies,
  horrorMoviesRequesting,
  fetchHorrorMoviesRequest,
  fetchTrendingMoviesRequest,
  trendingMovies,
}) => {
  useEffect(() => {
    fetchActionMoviesRequest(requests.fetchActionMovies);
    fetchRomanceMoviesRequest(requests.fetchRomanceMovies);
    fetchHorrorMoviesRequest(requests.fetchHorrorMovies);
    fetchTrendingMoviesRequest(requests.fetchTrending);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView directionalLockEnabled>
        <View
          style={{
            height: 300,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CarouselCards data={trendingMovies} />
        </View>
        <HorizontalRow
          title="Action Movies"
          contentList={actionMovies}
          loading={actionMoviesRequesting}
        />
        <HorizontalRow
          title="Romance Movies"
          contentList={romanceMovies}
          loading={romanceMoviesRequesting}
        />
        <HorizontalRow
          title="Horror Movies"
          contentList={horrorMovies}
          loading={horrorMoviesRequesting}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
