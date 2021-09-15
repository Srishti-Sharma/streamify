import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colorObj} from '../../../assets/colors';

import styles from './styles';

const BackButton = ({onPress, showBackground = false}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={showBackground && styles.buttonContainer}>
      <Icon name="arrow-back-outline" size={25} color={colorObj.secondary} />
    </TouchableOpacity>
  );
};
export default BackButton;
