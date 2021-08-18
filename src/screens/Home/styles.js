import {StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 70,
    backgroundColor: colorObj.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSection: {
    paddingTop: 15,
    flex: 1,
  },
  image: {
    width: 150,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});
export default styles;
