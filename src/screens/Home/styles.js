import {StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';
import {tabStyles} from '../../app/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: tabStyles.tabHeight,
    backgroundColor: colorObj.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  image: {
    width: 150,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});
export default styles;
