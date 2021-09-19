import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const LocationIcon = ({ w = 25, h = 25 }) => (
  <View>
    <Svg width={w} height={h} viewBox="0 0 21 21" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9167 7.67702C12.9167 6.52596 11.984 5.59326 10.8338 5.59326C9.68273 5.59326 8.75003 6.52596 8.75003 7.67702C8.75003 8.82723 9.68273 9.75993 10.8338 9.75993C11.984 9.75993 12.9167 8.82723 12.9167 7.67702Z"
        stroke="#A1A1A1"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8329 16.4265C9.83421 16.4265 4.58334 12.1752 4.58334 7.72926C4.58334 4.24871 7.38093 1.42651 10.8329 1.42651C14.2849 1.42651 17.0833 4.24871 17.0833 7.72926C17.0833 12.1752 11.8317 16.4265 10.8329 16.4265Z"
        stroke="#A1A1A1"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

export default LocationIcon;
