import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {baseImgUrl} from '../../../api/constants';
import FastImage from 'react-native-fast-image';
import {colorObj} from '../../../assets/colors';

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
        resizeMode={FastImage.resizeMode.cover}
      />
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
});

export default CarouselCardItem;
