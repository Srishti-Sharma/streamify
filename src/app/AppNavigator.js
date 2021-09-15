import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Navigator from './Navigator';
import {MovieList} from '../screens/MovieList';
import {StackScreenOptions, screenOptions} from './utils';
import {Details} from '../screens/Details';
import PlayScreen from '../screens/PlayScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={({route}) => StackScreenOptions(route)}>
        <Stack.Screen
          name="Tab"
          component={Navigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MovieList"
          component={MovieList}
          options={props => screenOptions(props)}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PlayScreen"
          component={PlayScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppNavigator;
