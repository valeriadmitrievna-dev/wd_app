import React from "react";
import { View, Text } from "react-native";
import { TabScreen } from "../../common.styled";
import { TabScreenContainer } from './../../common.styled';

export default function Profile() {
  return (
    <TabScreen>
      <TabScreenContainer>
        <Text>Profile</Text>
      </TabScreenContainer>
    </TabScreen>
  );
}
