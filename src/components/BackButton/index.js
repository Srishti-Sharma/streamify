import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colorObj} from '../../../assets/colors';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="arrow-back-outline" size={25} color={colorObj.secondary} />
    </TouchableOpacity>
  );
};
export default BackButton;
