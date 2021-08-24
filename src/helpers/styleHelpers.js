import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const DESIGN_HEIGHT = 896;
const DESIGN_WIDTH = 414;

const horizontalScale = size => (width / DESIGN_WIDTH) * size;
const verticalScale = size => (height / DESIGN_HEIGHT) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;
export {horizontalScale as hs, verticalScale as vs, moderateScale as ms};
