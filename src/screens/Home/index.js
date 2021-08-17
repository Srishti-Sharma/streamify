import React from 'react';
import {View, Text} from 'react-native';
import CustomText from '../../components/CustomText';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#10222D',
      }}>
      <Text style={{color: 'white', fontSize: 16}}>Home SWEET Home!</Text>
      <CustomText>Home SWEET Home!</CustomText>
    </View>
  );
};

export default HomeScreen;
