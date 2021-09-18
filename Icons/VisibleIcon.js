import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const VidibleIcon = ({ w = 20, h = 17 }) => (
  <View>
    <Svg
      width={w}
      height={h}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M8.13381 9.91095C7.65464 9.52563 7.36298 9.00201 7.36298 8.41463C7.36298 7.23785 8.53964 6.28931 9.99964 6.28931C10.7221 6.28931 11.3871 6.52493 11.858 6.91026"
        stroke="#AEAEB2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5873 8.7915C12.394 9.65748 11.5473 10.3409 10.4731 10.4979"
        stroke="#AEAEB2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.54549 11.9958C4.22299 11.1594 3.10299 9.93761 2.29132 8.41444C3.11132 6.88456 4.23882 5.65608 5.56965 4.81293C6.89215 3.96979 8.41799 3.51196 9.99965 3.51196C11.5905 3.51196 13.1155 3.9765 14.4463 4.82569"
        stroke="#AEAEB2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2063 6.302C16.7796 6.91557 17.2838 7.62378 17.708 8.4139C16.0688 11.473 13.1721 13.3157 9.99965 13.3157C9.28048 13.3157 8.57132 13.2217 7.88965 13.0385"
        stroke="#AEAEB2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

export default VidibleIcon;
