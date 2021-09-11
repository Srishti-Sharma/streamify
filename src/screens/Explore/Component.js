import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import AppTextCard from '../../components/AppTextCard';
import styles from './styles';
import CustomText from '../../components/CustomText';
import CapsuleButton from '../../components/CapsuleButton';

const {width} = Dimensions.get('window');
const ITEM_SIZE = 85;

const Explore = ({navigation, setGenre, genreList}) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  console.log('scrollY', scrollY);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        directionalLockEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={16}>
        <View style={styles.genreHeading}>
          <CustomText bold>Genres</CustomText>
        </View>
        <View style={styles.genreContainer}>
          {genreList &&
            genreList.map((item, index) => {
              const inputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 2),
              ];
              const inputRangeforOpacity = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 1),
              ];
              const scale = scrollY.interpolate({
                inputRange,
                outputRange: [1, 1, 1, 0],
              });
              const opacity = scrollY.interpolate({
                inputRange: inputRangeforOpacity,
                outputRange: [1, 1, 1, 0],
              });
              return (
                <Animated.View
                  key={index}
                  style={{
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [{scale}],
                    opacity,
                  }}>
                  <CapsuleButton
                    title={item?.name}
                    onPress={() => {
                      setGenre(item);
                      navigation.navigate('MovieList');
                    }}
                    width={width - 50}
                  />
                </Animated.View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
