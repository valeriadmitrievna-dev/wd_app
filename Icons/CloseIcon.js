import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const CloseIcon = () => (
  <View>
    <Svg width="12" height="12" viewBox="0 0 10 10" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.4882 9.99829C8.10162 9.99829 7.71504 9.85131 7.42108 9.55533L0.442456 2.57671C-0.147485 1.98677 -0.147485 1.0324 0.442456 0.442456C1.0324 -0.147485 1.98677 -0.147485 2.57671 0.442456L9.55533 7.42107C10.1453 8.01102 10.1453 8.96539 9.55533 9.55533C9.26137 9.85131 8.87479 9.99829 8.4882 9.99829Z"
        fill="#F7F7F8"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.51178 9.99829C1.1252 9.99829 0.738617 9.85131 0.444653 9.55533C-0.145288 8.96539 -0.145288 8.01102 0.444653 7.42107L7.42327 0.442456C8.01321 -0.147485 8.96759 -0.147485 9.55753 0.442456C10.1475 1.0324 10.1475 1.98677 9.55753 2.57671L2.57891 9.55533C2.28495 9.85131 1.89836 9.99829 1.51178 9.99829Z"
        fill="#F7F7F8"
      />
    </Svg>
  </View>
);

export default CloseIcon;
