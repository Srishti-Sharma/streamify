import React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#10222D',
      }}>
      <Text style={{color: 'white'}}>Home!</Text>
    </View>
  );
};

export default HomeScreen;
