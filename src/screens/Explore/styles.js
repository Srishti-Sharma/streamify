import {StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 70,
    backgroundColor: colorObj.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  cardContainer: {
    padding: 10,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genreHeading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
