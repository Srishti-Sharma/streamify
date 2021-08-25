import {Dimensions, StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorObj.primary,
  },
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
  genreText: {
    marginTop: 10,
    color: colorObj.white,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingTop: 40,
    paddingLeft: 15,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
