import {Dimensions, StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';
import {CURVED_HEIGHT} from './Component';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorObj.primary,
  },
  buttonContainer: {
    paddingTop: 40,
    paddingLeft: 15,
  },
});
export default styles;
