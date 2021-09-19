import React from "react";
import { View } from "react-native";
import * as W from "./index.styled";
import StarIcon from "./../../icons/star.icon";
import LocationIcon from "./../../icons/location.icon";
import { JustFlex } from "../../common.styled";

export default function WalkerCardLayout({ walker, margin, showWalker }) {
  return (
    <W.WalkerCardContainer m={margin} onPress={showWalker}>
      <W.WalkerPhoto
        imageStyle={{ borderRadius: 14 }}
        source={{ uri: walker.profile_photo }}
      >
        <W.RateContainer>
          <StarIcon />
          <W.RateText>{walker?.walker_info?.rate}</W.RateText>
        </W.RateContainer>
      </W.WalkerPhoto>
      <W.WalkerCardInfo>
        <View>
          <W.WalkerName numberOfLines={1}>{walker.fullname}</W.WalkerName>
          <JustFlex>
            <LocationIcon w={15} h={15} />
            <W.WalkerDistance>{walker?.distance} km from you</W.WalkerDistance>
          </JustFlex>
        </View>
        <W.WalkerCardPrice>${walker?.walker_info?.price}/h</W.WalkerCardPrice>
      </W.WalkerCardInfo>
    </W.WalkerCardContainer>
  );
}
