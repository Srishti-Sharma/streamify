import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colorObj} from '../../../assets/colors';
import styles from './styles';

const CapsuleButton = ({title, width = 150, ...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <LinearGradient
        locations={[0, 1.0]}
        colors={[colorObj.primary, colorObj.primaryLighter]}
        style={styles.linearGradient({width})}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CapsuleButton;
