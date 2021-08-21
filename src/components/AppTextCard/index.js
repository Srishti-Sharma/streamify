import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colorObj} from '../../../assets/colors';
const AppTextCard = ({title, ...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        colors={[colorObj.secondary, colorObj.secondaryFade]}
        style={styles.linearGradient}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AppTextCard;
