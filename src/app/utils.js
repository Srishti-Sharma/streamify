import React from 'react';
import {colorObj} from '../../assets/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import FaIcon from 'react-native-vector-icons/FontAwesome';

export const tabScreenOptions = route => ({
  tabBarActiveTintColor: colorObj.primaryHeading,
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
  headerTintColor: colorObj.primaryHeading,
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
        <Icon name="ios-home" size={20} color={colorObj.primaryText} />
      ) : (
        <Icon name="ios-home-outline" size={20} color={colorObj.primaryText} />
      );
    } else if (route.name === 'Explore') {
      return focused ? (
        <Icon
          name="md-search-circle-sharp"
          size={20}
          color={colorObj.primaryText}
        />
      ) : (
        <Icon name="search-outline" size={20} color={colorObj.primaryText} />
      );
    } else if (route.name === 'Profile') {
      return focused ? (
        <FaIcon name="user-circle-o" size={20} color={colorObj.primaryText} />
      ) : (
        <FaIcon name="user-circle" size={20} color={colorObj.primaryText} />
      );
    }
  },
});
