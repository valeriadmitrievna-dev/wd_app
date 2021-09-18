import styled from "styled-components/native";

export const WalkerCardContainer = styled.TouchableOpacity`
  position: relative;
  margin-right: ${({ m }) => m}px;
`;

export const WalkerPhoto = styled.ImageBackground`
  width: 180px;
  height: 125px;
  margin-bottom: 10px;
`;

export const RateContainer = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  padding: 5px 12px;
  top: 10px;
  right: 10px;
`;

export const RateText = styled.Text`
  font-size: 10px;
  line-height: 12px;
  color: #ffcb55;
  font-family: "Poppins-SemiBold";
  margin-left: 2px;
  margin-top: 2px;
`;

export const WalkerCardInfo = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const WalkerName = styled.Text`
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  color: #2b2b2b;
  font-family: "Poppins-SemiBold";
  width: 125px;
`;

export const WalkerDistance = styled.Text`
  font-size: 10px;
  line-height: 15px;
  color: #a1a1a1;
  margin-left: 4px;
  font-family: "Poppins-SemiBold";
`;

export const WalkerCardPrice = styled.Text`
  padding: 5px 12px;
  background: #2b2b2b;
  border-radius: 7px;
  font-size: 10px;
  line-height: 15px;
  color: #fbfbfb;
  font-family: "Poppins-SemiBold";
`;
