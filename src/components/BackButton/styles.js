import {Platform, StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colorObj.primaryTransparent,
    width: 50,
    height: 50,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 20,
    left: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
export default styles;
