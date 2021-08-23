import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colorObj} from '../../../assets/colors';
const AppTextCard = ({title, ...rest}) => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppTextCard;
