import {StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colorObj.secondary,
    borderRadius: 7,
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
export default styles;
