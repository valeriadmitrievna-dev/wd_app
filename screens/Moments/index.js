import React from "react";
import { Text } from "react-native";
import { TabScreen } from "../../common.styled";
import { TabScreenContainer } from "./../../common.styled";

export default function Moments() {
  return (
    <TabScreen>
      <TabScreenContainer>
        <Text>Moments</Text>
      </TabScreenContainer>
    </TabScreen>
  );
}
