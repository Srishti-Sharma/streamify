import React, {useEffect, useState} from 'react';
const {width, height} = Dimensions.get('window');
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import AppTextCard from '../../components/AppTextCard';
import styles from './styles';
import {genre, genreList} from '../../app/constants';
import CustomText from '../../components/CustomText';
import Backdrop from '../../components/Backdrop';
import requests from '../../../api/requests';
import {colorObj} from '../../../assets/colors';
import FastImage from 'react-native-fast-image';
import {baseImgUrl} from '../../../api/constants';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

const ITEM_SIZE = width * 0.72;
const SPACING = 10;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const MovieList = ({
  navigation,
  movieListGenre,
  fetchMovieByGenreIdRequest,
  movieListRequesting,
  movieListArr,
}) => {
  const [movieList, setMovieList] = useState([]);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fetchMovieByGenreIdRequest(movieListGenre.id);
  }, [movieListGenre]);
  useEffect(() => {
    if (movieListArr && movieListArr.length > 0) {
      let newArr = movieListArr.filter(
        item => item.backdrop_path && item.poster_path,
      );
      setMovieList([
        {key: 'left-spacer', id: 'left'},
        ...newArr,
        {key: 'right-spacer', id: 'right'},
      ]);
    }
  }, [movieListArr]);

  return (
    <SafeAreaView style={styles.container}>
      {movieListRequesting ? (
        <View style={styles.loader}>
          <ActivityIndicator size="small" color={colorObj.primaryText} />
        </View>
      ) : (
        <View>
          <Backdrop movies={movieList} scrollX={scrollX} />
          <Animated.FlatList
            showsHorizontalScrollIndicator={false}
            data={movieList}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle={{
              alignItems: 'center',
            }}
            snapToInterval={ITEM_SIZE}
            decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
            renderToHardwareTextureAndroid
            snapToInterval={ITEM_SIZE}
            snapToAlignment="start"
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            scrollEventThrottle={16}
            renderItem={({item, index}) => {
              if (!item.poster_path) {
                return (
                  <View
                    style={{
                      width: SPACER_ITEM_SIZE,
                      backgroundColor: 'red',
                    }}
                  />
                );
              }
              const inputRange = [
                (index - 2) * ITEM_SIZE,
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE,
              ];
              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [100, 50, 100],
                extrapolate: 'clamp',
              });
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Details', {item: item});
                  }}>
                  <View style={{width: ITEM_SIZE}}>
                    <Animated.View
                      style={{
                        marginHorizontal: SPACING,
                        padding: SPACING / 2,
                        alignItems: 'center',
                        borderRadius: 34,
                        transform: [{translateY}],
                        padding: 10,
                        backgroundColor: colorObj.primary,
                      }}>
                      <FastImage
                        style={styles.image}
                        source={{
                          uri: `${baseImgUrl}${item.poster_path}`,
                          priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.cover}>
                        <LinearGradient
                          locations={[0, 1.0]}
                          colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.99)']}
                          style={styles.linearGradient}
                        />
                      </FastImage>
                      <CustomText
                        style={{
                          textAlign: 'center',
                          color: colorObj.primaryText,
                          fontSize: 20,
                          fontWeight: 'bold',
                          paddingTop: 10,
                        }}
                        numberOfLines={1}>
                        {item.title}
                      </CustomText>
                      <CustomText
                        numberOfLines={3}
                        style={{
                          textAlign: 'center',
                          color: colorObj.primaryText,
                          paddingTop: 10,
                        }}>
                        {item.overview}
                      </CustomText>
                    </Animated.View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default MovieList;
