import {Dimensions, StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';
import {vs} from '../../helpers/styleHelpers';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorObj.primary,
    paddingTop: 0,
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
    paddingLeft: 15,
    paddingBottom: 10,
    backgroundColor: colorObj.primary,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    // marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton: {
    top: 130,
    paddingLeft: windowWidth / 2 - 30,
  },
  ratingContainer: {
    display: 'flex',
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  ratingText: {
    color: '#f1c40f',
    fontWeight: '600',
    fontSize: 16,
    marginTop: 5,
  },
  contentContainer: {
    paddingBottom: 30,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default styles;
