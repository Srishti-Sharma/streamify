import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colorObj} from '../../../assets/colors';
import styles from './styles';
import {textDetails, colors} from './constants';
const {width} = Dimensions.get('window');

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const DURATION = 1000;
const TEXT_DURATION = DURATION * 0.8;

const Circle = ({onPress, animatedValue, index, pressedCount}) => {
  const inputRange = [0, 0.001, 0.5, 0.501, 1];
  const isEvenIndex = index % 2 === 0 ? true : false;
  const containerBg = animatedValue.interpolate({
    inputRange,
    outputRange:
      pressedCount === 1 || pressedCount === 0 || !isEvenIndex
        ? [
            colorObj.secondary,
            colorObj.secondary,
            colorObj.secondary,
            colorObj.primary,
            colorObj.primary,
          ]
        : [
            colorObj.primary,
            colorObj.primary,
            colorObj.primary,
            colorObj.secondary,
            colorObj.secondary,
          ],
  });
  const circleBg = animatedValue.interpolate({
    inputRange,
    outputRange:
      pressedCount === 1 || pressedCount === 0 || !isEvenIndex
        ? [
            colorObj.primary,
            colorObj.primary,
            colorObj.primary,
            colorObj.secondary,
            colorObj.secondary,
          ]
        : [
            colorObj.secondary,
            colorObj.secondary,
            colorObj.secondary,
            colorObj.primary,
            colorObj.primary,
          ],
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.circleContainer,
        {
          backgroundColor:
            Platform.OS === 'ios' ? containerBg : colorObj.secondary,
        },
      ]}>
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor:
              Platform.OS === 'ios' ? circleBg : colorObj.primary,
          },
          {
            transform: [
              {
                perspective: 200,
              },
              {
                rotateY: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '-90deg', '-180deg'],
                }),
              },
              {
                scale: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 15, 1],
                }),
              },
              {
                translateX: animatedValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0, 10, 0],
                }),
              },
            ],
          },
        ]}>
        {console.log('akk', pressedCount)}
        <TouchableOpacity onPress={onPress}>
          <Animated.View style={[styles.circleButton]}>
            <AnimatedIcon
              name="arrow-up"
              size={25}
              color={
                Platform.OS === 'ios'
                  ? pressedCount === 0 || isEvenIndex
                    ? colorObj.secondary
                    : colorObj.primary
                  : colorObj.secondary
              }
            />
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const Profile = () => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const sliderAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [...Array(textDetails.length).keys()];
  const [index, setIndex] = useState(0);
  const [pressedCount, setPressedCount] = useState(0);

  const animate = i =>
    Animated.parallel([
      Animated.timing(sliderAnimatedValue, {
        toValue: i,
        duration: TEXT_DURATION,
        useNativeDriver: Platform.OS === 'ios' ? false : true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: Platform.OS === 'ios' ? false : true,
      }),
    ]);
  const onPress = () => {
    // animatedValue.setValue(index % 2 === 0 ? 0 : 1);
    // animate((index + 1) % textDetails.length, index % 2 === 0 ? 1 : 0).start();
    // setIndex((index + 1) % textDetails.length);
    setPressedCount(pressedCount + 1);
    animatedValue.setValue(0);
    animate((index + 1) % textDetails.length).start();
    setIndex((index + 1) % textDetails.length);
  };

  return (
    <View style={styles.container}>
      <Circle
        onPress={onPress}
        animatedValue={animatedValue}
        index={index}
        pressedCount={pressedCount}
      />
      <Animated.View
        style={{
          flexDirection: 'row',
          width,
          transform: [
            {
              translateX: sliderAnimatedValue.interpolate({
                inputRange,
                outputRange: textDetails.map((_, i) => -i * width * 2),
              }),
            },
          ],
        }}>
        {textDetails.map((item, index) => {
          return (
            <View key={index} style={{paddingRight: width, width: width * 2}}>
              <Animated.Text
                style={[
                  styles.title,
                  {
                    color:
                      Platform.OS === 'ios' ? item.color : colorObj.primary,
                  },
                ]}>
                {item.title}
              </Animated.Text>
              <Animated.Text
                style={[
                  {
                    fontSize: 14,
                    textAlign: 'center',
                    opacity: 0.8,
                    color:
                      Platform.OS === 'ios' ? item.color : colorObj.primary,
                  },
                ]}>
                {item.subtitle}
              </Animated.Text>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default Profile;
