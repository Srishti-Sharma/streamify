import {Dimensions, StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';
const CIRCLE_SIZE = 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
    paddingBottom: 100,
    backgroundColor: colorObj.secondary,
  },
  circle: {
    backgroundColor: colorObj.primary,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },
  circleButton: {
    // backgroundColor: 'transparent',

    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    // margin: 12,
  },
});
export default styles;
