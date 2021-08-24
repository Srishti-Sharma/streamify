import React from 'react';
import {View, Text, ImageBackground, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {baseImgUrl} from '../../../api/constants';
import {colorObj} from '../../../assets/colors';
import {BackButton} from '../../components';
import CustomText from '../../components/CustomText';
import WavyHeader from '../../components/WavyHeader';

import styles from './styles';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const CURVED_HEIGHT = 400;

  // console.log('item ', item);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorObj.primary,
      }}>
      <View style={{backgroundColor: colorObj.white, height: 400}}>
        <ImageBackground
          source={{uri: `${baseImgUrl}${item.item.poster_path}`}}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover">
          <LinearGradient
            locations={[1, 0]}
            colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.4)']}
            style={styles.linearGradient}>
            <View
              style={{
                paddingTop: 40,
                paddingLeft: 15,
              }}>
              <BackButton onPress={() => navigation.goBack()} />
            </View>
            <WavyHeader
              curvedHeight={CURVED_HEIGHT}
              customStyles={styles.svgCurve}
              screenWidth={windowWidth}
              item={item}
            />
          </LinearGradient>
        </ImageBackground>

        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomText style={styles.headerText}> {item.item.title}</CustomText>
          <CustomText style={styles.bodyText}> {item.item.overview}</CustomText>
        </View>
      </View>
    </View>
  );
};

export default Details;
