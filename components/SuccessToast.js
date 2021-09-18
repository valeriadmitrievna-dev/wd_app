import React from "react";
import { Box } from "native-base";
import { Circle, G, Path, Svg } from "react-native-svg";

export default function SuccessToast({ title }) {
  return (
    <Box
      bg="#039C55"
      py={2}
      px={5}
      borderRadius={8}
      _text={{
        fontSize: 18,
        lineHeight: "26px",
        fontFamily: "Poppins-SemiBold",
        color: "#F7F7F8",
      }}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Svg
        width="25"
        height="25"
        x="0"
        y="0"
        viewBox="0 0 512 512"
        style={{
          marginRight: 15,
        }}
      >
        <G>
          <Circle cx="253.6" cy="253.6" r="253.6" fill="#ffffff" />
          <G>
            <Path
              d="M260,310.4c11.2,11.2,11.2,30.4,0,41.6l-23.2,23.2c-11.2,11.2-30.4,11.2-41.6,0L93.6,272.8   c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L260,310.4z"
              fill="#039C55"
            />
            <Path
              d="M348.8,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6l-176,175.2   c-11.2,11.2-30.4,11.2-41.6,0l-23.2-23.2c-11.2-11.2-11.2-30.4,0-41.6L348.8,133.6z"
              fill="#039C55"
            />
          </G>
        </G>
      </Svg>
      {title}
    </Box>
  );
}
