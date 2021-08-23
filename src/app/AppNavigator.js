import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Navigator from './Navigator';
import {MovieList} from '../screens/MovieList';
import {StackScreenOptions, MovieListScreenOptions} from './utils';

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
          options={props => MovieListScreenOptions(props)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppNavigator;
