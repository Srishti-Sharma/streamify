import React from 'react';
import {Button, Text, View} from 'react-native';
import AppButton from '../../components/AppButton';
const Test = ({test, testAction}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#10222D',
    }}>
    <AppButton
      onPress={() => {
        testAction(5);
      }}
      title="Streamify (click me)"
    />
    <Text style={{color: '#fff', marginVertical: 15}}>{test}</Text>
    <AppButton title="Watch Now" />
  </View>
);

export default Test;
