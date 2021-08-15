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
      title="Click"
    />
    <Text style={{color: '#fff', marginTop: 15}}>{test}</Text>
  </View>
);

export default Test;
