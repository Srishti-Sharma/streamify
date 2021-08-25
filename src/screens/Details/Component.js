import React from 'react';
import {View, ImageBackground, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {baseImgUrl} from '../../../api/constants';
import {colorObj} from '../../../assets/colors';
import {BackButton} from '../../components';
import CustomText from '../../components/CustomText';
import WavyHeader from '../../components/WavyHeader';

import styles from './styles';

const Details = ({route, navigation, genreList}) => {
  const {item} = route.params;
  const CURVED_HEIGHT = 400;

  const windowWidth = Dimensions.get('window').width;

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
      <View style={{backgroundColor: colorObj.white, height: CURVED_HEIGHT}}>
        <ImageBackground
          source={{uri: `${baseImgUrl}${item.poster_path}`}}
          style={styles.imageStyle}
          resizeMode="cover">
          <LinearGradient
            locations={[1, 0]}
            colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.4)']}
            style={styles.linearGradient}>
            <View style={styles.buttonContainer}>
              <BackButton onPress={() => navigation.goBack()} />
            </View>
            <WavyHeader
              curvedHeight={CURVED_HEIGHT}
              customStyles={styles.svgCurve}
              screenWidth={windowWidth}
            />
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
    </View>
  );
};

export default Details;
