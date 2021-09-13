import React, {useEffect, useState, useCallback} from 'react';
import {View, ScrollView, SafeAreaView, RefreshControl} from 'react-native';
import styles from './styles';
import HorizontalRow from '../../components/HorizontalRow';
import CarouselCards from '../../components/CarouselCards';
import {colorObj} from '../../../assets/colors';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
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
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = () => {
    fetchActionMoviesRequest();
    fetchRomanceMoviesRequest();
    fetchHorrorMoviesRequest();
    fetchTrendingMoviesRequest();
    fetchGenreListRequest();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        directionalLockEnabled
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={colorObj.secondary}
            tintColor={colorObj.secondary}
            colors={[colorObj.primary]}
          />
        }>
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
          isRefreshing={refreshing}
        />
        <HorizontalRow
          title="Romance Movies"
          contentList={romanceMovies}
          loading={romanceMoviesRequesting}
          navigation={navigation}
          isRefreshing={refreshing}
        />
        <HorizontalRow
          title="Horror Movies"
          contentList={horrorMovies}
          loading={horrorMoviesRequesting}
          navigation={navigation}
          isRefreshing={refreshing}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
