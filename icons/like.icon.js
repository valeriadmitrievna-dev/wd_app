import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const LikeIcon = ({liked}) => (
  <View>
    <Svg
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill={liked ? '#E73A40' : 'none'}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.19669 4.58263C0.749609 3.1868 1.27211 1.59138 2.73753 1.1193C3.50836 0.870551 4.35919 1.01722 5.00003 1.4993C5.60628 1.03055 6.48836 0.872217 7.25836 1.1193C8.72378 1.59138 9.24961 3.1868 8.80294 4.58263C8.10711 6.79513 5.00003 8.4993 5.00003 8.4993C5.00003 8.4993 1.91586 6.82097 1.19669 4.58263Z"
        stroke={liked ? '#E73A40' : '#FBFBFB'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

export default LikeIcon;
