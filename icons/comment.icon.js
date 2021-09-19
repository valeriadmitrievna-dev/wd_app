import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const CommentIcon = () => (
  <View>
    <Svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.11307 8.11244C6.83967 9.38598 4.95407 9.66112 3.41101 8.94751C3.18321 8.85579 2.99645 8.78167 2.81891 8.78167C2.32437 8.7846 1.70882 9.26411 1.3889 8.94458C1.06898 8.62462 1.54886 8.00858 1.54886 7.51106C1.54886 7.3335 1.47767 7.15007 1.38597 6.92183C0.672013 5.37901 0.947545 3.49279 2.22094 2.21967C3.8465 0.593513 6.48751 0.593513 8.11307 2.21925C9.74156 3.84792 9.73862 6.48671 8.11307 8.11244Z"
        stroke="#FBFBFB"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  </View>
);

export default CommentIcon;
