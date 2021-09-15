import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';

const CustomText = ({children, bold, customtyle, ...rest}) => {
  return (
    <Text
      style={
        bold
          ? {...styles.fontWrapperBold, ...customtyle}
          : {...styles.fontWrapper, ...customtyle}
      }
      {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  fontWrapper: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: colorObj.primaryText,
  },
  fontWrapperBold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: colorObj.primaryText,
  },
});

export default CustomText;
