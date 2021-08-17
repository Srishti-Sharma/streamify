import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';

const CustomText = ({children}) => {
  return <Text style={styles.fontWrapper}>{children}</Text>;
};

const styles = StyleSheet.create({
  fontWrapper: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: colorObj.primaryText,
  },
});

export default CustomText;
