import React from "react";
import { View, Text } from "react-native";
import * as W from "./index.styled";
import CloseIcon from "../../Icons/CloseIcon";
import VerifiedIcon from "../../Icons/VerifiedIcon";
import { HDivider, VDivider } from "../../common.styled";
import StarIcon from "./../../Icons/StarIcon";

export default function WalkerLayout({ walker, closeWalker }) {
  return (
    <>
      <W.BackgroundImage source={{ uri: walker.profile_photo }}>
        <W.WalkerHeader>
          <W.CloseWalker onPress={closeWalker}>
            <CloseIcon />
          </W.CloseWalker>
          <W.PaymentBadge>
            <W.PaymentBadgeText>
              {walker?.walker_info?.verified ? "Verified" : "Unverified"}
            </W.PaymentBadgeText>
            {walker?.walker_info?.verified && <VerifiedIcon />}
          </W.PaymentBadge>
        </W.WalkerHeader>
      </W.BackgroundImage>
      <W.WalkerInfoContainer>
        <W.WalkerName>{walker.fullname}</W.WalkerName>
        <W.WalkerInfoRow>
          <W.WalkerInfoRowView>
            <W.WalkerInfoRowValue>
              {walker?.walker_info?.price}$
            </W.WalkerInfoRowValue>
            <W.WalkerInfoRowText>/hr</W.WalkerInfoRowText>
          </W.WalkerInfoRowView>
          <VDivider />
          <W.WalkerInfoRowView>
            <W.WalkerInfoRowValue divided>
              {walker?.distance}
            </W.WalkerInfoRowValue>
            <W.WalkerInfoRowText>km</W.WalkerInfoRowText>
          </W.WalkerInfoRowView>
          <VDivider />
          <W.WalkerInfoRowView centered>
            <W.WalkerInfoRowValue divided>
              {walker?.walker_info?.rate}
            </W.WalkerInfoRowValue>
            <StarIcon color="#A1A1A1" />
          </W.WalkerInfoRowView>
          <VDivider />
          <W.WalkerInfoRowView>
            <W.WalkerInfoRowValue divided>
              {walker?.walker_info?.walks}
            </W.WalkerInfoRowValue>
            <W.WalkerInfoRowText>walks</W.WalkerInfoRowText>
          </W.WalkerInfoRowView>
        </W.WalkerInfoRow>
        <HDivider m={22} />
      </W.WalkerInfoContainer>
    </>
  );
}
