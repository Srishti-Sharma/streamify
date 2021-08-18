/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import {Test} from '../screens/testScreen';
import {colorObj} from '../../assets/colors';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: colorObj.primaryHeading,
          tabBarInactiveTintColor: colorObj.primaryText,
          tabBarInactiveBackgroundColor: colorObj.primary,
          tabBarActiveBackgroundColor: colorObj.primary,
          tabBarStyle: {position: 'absolute', bottom: 0},
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Test" component={Test} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigator;
