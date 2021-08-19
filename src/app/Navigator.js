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
import Icon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: colorObj.primaryHeading,
          tabBarInactiveTintColor: colorObj.primaryText,
          tabBarInactiveBackgroundColor: colorObj.primary,
          tabBarActiveBackgroundColor: colorObj.primary,
          tabBarStyle: {position: 'absolute', bottom: 0},
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return focused ? (
                <Icon name="ios-home" size={20} color={colorObj.primaryText} />
              ) : (
                <Icon
                  name="ios-home-outline"
                  size={20}
                  color={colorObj.primaryText}
                />
              );
            } else if (route.name === 'Explore') {
              return focused ? (
                <Icon
                  name="md-search-circle-sharp"
                  size={30}
                  color={colorObj.primaryText}
                />
              ) : (
                <Icon
                  name="search-outline"
                  size={20}
                  color={colorObj.primaryText}
                />
              );
            } else if (route.name === 'Profile') {
              return focused ? (
                <FaIcon
                  name="user-circle-o"
                  size={20}
                  color={colorObj.primaryText}
                />
              ) : (
                <FaIcon
                  name="user-circle"
                  size={20}
                  color={colorObj.primaryText}
                />
              );
            }
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={Test} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigator;
