import {StyleSheet} from 'react-native';
import {colorObj} from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  linearGradient: props => ({
    paddingHorizontal: 15,
    paddingVertical: 25,
    // borderRadius: 50,
    width: props.width,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  text: {
    color: colorObj.primaryText,
    fontWeight: 'bold',
  },
});
export default styles;
