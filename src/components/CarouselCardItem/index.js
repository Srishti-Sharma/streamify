import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {baseImgUrl} from '../../../api/constants';
import FastImage from 'react-native-fast-image';
import {colorObj} from '../../../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../CustomText';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
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
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colorObj.primary,
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: '100%',
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  imageText: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 5,
    paddingLeft: 5,
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default CarouselCardItem;
