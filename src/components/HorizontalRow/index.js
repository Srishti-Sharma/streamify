import React, {useRef, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
} from 'react-native';
import CustomText from '../CustomText';
import styles from './styles';
import {baseImgUrl} from '../../../api/constants';
import {colorObj} from '../../../assets/colors';
import FastImage from 'react-native-fast-image';
import ProgressiveImage from '../ProgressiveImage';

const ITEM_SIZE = 100;

const HorizontalRow = ({
  title = '',
  contentList = [],
  loading,
  navigation,
  isRefreshing,
}) => {
  let scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isRefreshing) {
      Animated.timing(scrollX, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [isRefreshing]);

  const renderDataList = item => {
    const inputRange = [
      -1,
      0,
      ITEM_SIZE * item.index,
      ITEM_SIZE * (item.index + 5),
    ];
    const inputRangeforOpacity = [
      -1,
      0,
      ITEM_SIZE * item.index,
      ITEM_SIZE * (item.index + 2),
    ];
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const opacity = scrollX.interpolate({
      inputRange: inputRangeforOpacity,
      outputRange: [1, 1, 1, 0.5],
    });

    return (
      <TouchableOpacity
        style={styles.imageWrapper}
        key={item.index}
        onPress={() => {
          navigation.navigate('Details', {item: item.item});
        }}>
        {item.item.backdrop_path !== null && (
          <Animated.View style={{transform: [{scale}], opacity}}>
            <ProgressiveImage
              style={styles.image}
              source={{
                uri: `${baseImgUrl}${item.item.backdrop_path}`,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
          </Animated.View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.rowContainer}>
      <CustomText bold customtyle={{paddingHorizontal: 5}}>
        {title}
      </CustomText>
      <View style={styles.ListContainer}>
        {loading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="small" color={colorObj.primaryText} />
          </View>
        ) : (
          contentList &&
          contentList.length > 0 && (
            <Animated.FlatList
              removeClippedSubviews
              initialNumToRender={4}
              data={contentList}
              horizontal
              keyExtractor={(item, index) => index}
              renderItem={renderDataList}
              contentContainerStyle={{paddingHorizontal: 5}}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
              )}
            />
          )
        )}
      </View>
    </View>
  );
};

export default React.memo(HorizontalRow);
