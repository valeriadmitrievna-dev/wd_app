import React from 'react';
import {View} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

const SearchIcon = ({mb = 0, mt = 0}) => (
  <View>
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{
        marginBottom: mb,
        marginTop: mt,
      }}>
      <Circle
        cx="9.80547"
        cy="9.80541"
        r="7.49047"
        stroke="#A1A1A1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.0153 15.4043L17.9519 18.3334"
        stroke="#A1A1A1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

export default SearchIcon;
