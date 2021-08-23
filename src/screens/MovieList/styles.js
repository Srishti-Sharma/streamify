import {StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorObj.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  imageContainer: {
    padding: 10,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageText: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 2,
    paddingLeft: 5,
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
export default styles;
