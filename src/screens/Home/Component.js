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
}) => {
  useEffect(() => {
    fetchActionMoviesRequest(requests.fetchActionMovies);
    fetchRomanceMoviesRequest(requests.fetchRomanceMovies);
    fetchHorrorMoviesRequest(requests.fetchHorrorMovies);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView>
          <View
            style={{
              width: '100%',
              height: 250,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CustomText>Movie Carousel Coming Soon...</CustomText>
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
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
