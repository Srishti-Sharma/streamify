import {Dimensions, StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';

const styles = StyleSheet.create({
  image: {
    flex: 0.5,
    resizeMode: 'contain',
  },
  svgCurve: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colorObj.primaryHeading,
    textAlign: 'center',
    marginTop: 35,
  },
  bodyText: {
    paddingHorizontal: 10,
    fontSize: 18,
    color: colorObj.lightGrey,
    textAlign: 'center',
    marginTop: 10,
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
export default styles;
