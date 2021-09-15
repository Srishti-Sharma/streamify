import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const ProgressiveImage = props => {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <View style={styles.container}>
      <FastImage {...props} onLoadEnd={() => setImageLoading(false)} />
    </View>
  );
};

export default ProgressiveImage;
