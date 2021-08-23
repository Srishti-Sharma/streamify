import {StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: colorObj.secondary,
    fontSize: 18,
  },
  container: {
    borderRadius: 5,
    width: 160,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: colorObj.secondary,
  },
});
export default styles;
