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
import styles from './styles';
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
  fetchGenreListRequest,
  trendingMovies,
  navigation,
}) => {
  useEffect(() => {
    fetchActionMoviesRequest();
    fetchRomanceMoviesRequest();
    fetchHorrorMoviesRequest();
    fetchTrendingMoviesRequest();
    fetchGenreListRequest();
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
          navigation={navigation}
        />
        <HorizontalRow
          title="Romance Movies"
          contentList={romanceMovies}
          loading={romanceMoviesRequesting}
          navigation={navigation}
        />
        <HorizontalRow
          title="Horror Movies"
          contentList={horrorMovies}
          loading={horrorMoviesRequesting}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
