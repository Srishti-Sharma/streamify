import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import FastImage from 'react-native-fast-image';
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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorObj.primary,
      }}>
      <View style={{backgroundColor: colorObj.white, height: 400}}>
        <ImageBackground
          source={{uri: `${baseImgUrl}${item.item.backdrop_path}`}}
          style={{width: '100%', height: '100%'}}>
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
            item={item}
          />
        </ImageBackground>

        <View
          style={{
            marginTop: 10,
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
