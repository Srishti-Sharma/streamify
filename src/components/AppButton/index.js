import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const AppButton = ({title, ...rest}) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
