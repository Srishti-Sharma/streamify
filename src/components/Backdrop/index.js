import React, {useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Animated,
  Image,
  Platform,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {baseImgUrl} from '../../../api/constants';
import MaskedView from '@react-native-community/masked-view';
import {colorObj} from '../../../assets/colors';
import Svg, {Rect} from 'react-native-svg';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const {width, height} = Dimensions.get('window');
const BACKDROP_HEIGHT = height * 0.6;
const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const Backdrop = ({movies, scrollX}) => {
  let renderList = useCallback(
    ({item, index}) => {
      if (!item.backdrop_path) {
        return null;
      }
      const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE];
      const translateX = scrollX.interpolate({
        inputRange,
        outputRange: [-width, 0],
      });
      return Platform.OS === 'ios' ? (
        <MaskedView
          style={{position: 'absolute'}}
          maskElement={
            <AnimatedSvg
              width={width}
              height={height}
              viewBox={`0 0 ${width} ${height}`}
              style={{transform: [{translateX}]}}>
              <Rect x="0" y="0" width={width} height={height} fill="red" />
            </AnimatedSvg>
          }>
          <FastImage
            style={{width, height: BACKDROP_HEIGHT}}
            source={{
              uri: `${baseImgUrl}${item.backdrop_path}`,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}>
            <LinearGradient
              locations={[0, 1.0]}
              colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.99)']}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 100,
              }}
            />
          </FastImage>
        </MaskedView>
      ) : (
        <Animated.View
          style={{
            flex: 1,
            transform: [{translateX}],
            position: 'absolute',
            top: 0,
            width: width,
            height: height * 0.6,
            backgroundColor: colorObj.primary,
            elevation: 5,
          }}>
          <FastImage
            style={{width, height: BACKDROP_HEIGHT}}
            source={{
              uri: `${baseImgUrl}${item.backdrop_path}`,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}>
            <LinearGradient
              locations={[0, 1.0]}
              colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.99)']}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 100,
              }}
            />
          </FastImage>
        </Animated.View>
      );
    },
    [movies],
  );

  return (
    <View style={{height: BACKDROP_HEIGHT, width, position: 'absolute'}}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        removeClippedSubviews={false}
        contentContainerStyle={{
          width,
          height: BACKDROP_HEIGHT,
        }}
        renderItem={renderList}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', colorObj.primary]}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};

export default React.memo(Backdrop);
