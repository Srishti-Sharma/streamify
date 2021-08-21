import {StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: colorObj.primary,
    fontSize: 18,
  },
  linearGradient: {
    borderRadius: 5,
    width: 170,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: colorObj.secondary,
  },
});
export default styles;
