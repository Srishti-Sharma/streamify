import React from 'react';
import {View} from 'react-native';
import Svg, {Defs, Path, Stop, LinearGradient} from 'react-native-svg';
import {colorObj} from '../../../assets/colors';

import RoundButton from '../RoundButton';

const WavyHeader = ({customStyles, curvedHeight}) => {
  return (
    <View style={[customStyles, {top: curvedHeight / 1.7}]}>
      <Svg height="100%" width="100%" viewBox="0 0 1440 320">
        <Defs>
          <LinearGradient id="path" x1="0" y1="0" x2="0" y2="100%">
            <Stop
              offset="0"
              stopColor={colorObj.primaryLight}
              stopOpacity="0.8"
            />
            <Stop offset="1" stopColor={colorObj.primary} stopOpacity="1" />
          </LinearGradient>
        </Defs>

        <Path
          fill={'url(#path)'}
          d="M0,96L30,133.3C60,171,120,245,180,256C240,267,300,213,360,170.7C420,128,480,96,540,117.3C600,139,660,213,720,213.3C780,213,840,139,900,112C960,85,1020,107,1080,122.7C1140,139,1200,149,1260,133.3C1320,117,1380,75,1410,53.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        />
      </Svg>
    </View>
  );
};

export default WavyHeader;
