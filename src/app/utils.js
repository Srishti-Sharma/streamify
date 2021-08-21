import React from 'react';
import {colorObj} from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export const tabScreenOptions = route => ({
  tabBarActiveTintColor: colorObj.secondary,
  tabBarInactiveTintColor: colorObj.primaryText,
  tabBarInactiveBackgroundColor: colorObj.primary,
  tabBarActiveBackgroundColor: colorObj.primary,
  headerStyle: {
    backgroundColor: colorObj.primary,
    // removes header border
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  tabBarOptions: {
    showLabel: false,
  },
  headerTintColor: colorObj.secondary,
  tabBarShowLabel: false, // removes bottom-tab text
  tabBarStyle: {
    height: 80,
    backgroundColor: colorObj.primary,
    position: 'absolute',
    bottom: 0,
    // removes tab border
    elevation: 0,
    shadowOpacity: 0,
    borderTopWidth: 0,
  },
  tabBarIcon: ({focused, color, size}) => {
    if (route.name === 'Home') {
      return focused ? (
        <Icon name="ios-home" size={25} color={colorObj.secondary} />
      ) : (
        <Icon name="ios-home-outline" size={25} color={colorObj.primaryText} />
      );
    } else if (route.name === 'Explore') {
      return focused ? (
        <Icon name="search" size={25} color={colorObj.secondary} />
      ) : (
        <Icon name="search-outline" size={25} color={colorObj.primaryText} />
      );
    } else if (route.name === 'Profile') {
      return focused ? (
        <Icon name="person" size={25} color={colorObj.secondary} />
      ) : (
        <Icon name="person-outline" size={25} color={colorObj.primaryText} />
      );
    }
  },
});
