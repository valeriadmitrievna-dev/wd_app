import React from "react";
import { View, Text, Button } from "react-native";
import { TabScreen } from "../../common.styled";
import { TabScreenContainer } from "./../../common.styled";

export default function Chat({ navigation }) {
  return (
    <TabScreen>
      <TabScreenContainer>
        <Text>Chat</Text>
      </TabScreenContainer>
    </TabScreen>
  );
}
