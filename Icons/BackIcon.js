import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const BackIcon = () => (
  <View>
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M4.95831 14.3199L22.4583 14.3199"
        stroke="#2B2B2B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0164 21.3484L4.95808 14.3204L12.0164 7.29126"
        stroke="#2B2B2B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

export default BackIcon;
