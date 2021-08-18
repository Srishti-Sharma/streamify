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
}) => {
  useEffect(() => {
    fetchActionMoviesRequest(requests.fetchActionMovies);
    fetchRomanceMoviesRequest(requests.fetchRomanceMovies);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
