import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colorObj} from '../../../assets/colors';

const RoundButton = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colorObj.secondary,
        borderRadius: 35,
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
      }}>
      <Icon name="play" size={35} color={colorObj.primary} />
    </TouchableOpacity>
  );
};
export default RoundButton;
