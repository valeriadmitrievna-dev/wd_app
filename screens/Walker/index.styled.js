import styled from "styled-components/native";

export const BackgroundImage = styled.ImageBackground`
  position: relative;
  width: 100%;
  height: 60%;
  padding: 16px;
  padding-top: 30px;
`;

export const WalkerHeader = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const CloseWalker = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  background-color: rgba(196, 196, 196, 0.4);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaymentBadge = styled.View`
  background-color: rgba(196, 196, 196, 0.4);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 12px;
`;

export const PaymentBadgeText = styled.Text`
  font-size: 13px;
  line-height: 19px;
  color: #f7f7f8;
  font-family: "Poppins-Black";
  margin-right: 4px;
`;

export const WalkerInfoContainer = styled.View`
  position: absolute;
  background: #fbfbfb;
  border-radius: 24px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 55%;
  padding: 24px 16px;
`;

export const WalkerName = styled.Text`
  font-size: 28px;
  line-height: 42px;
  margin-bottom: 10px;
  font-family: "Poppins-Black";
  color: #2b2b2b;
  text-align: center;
`;

export const WalkerInfoRow = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const WalkerInfoRowView = styled.View`
  display: flex;
  align-items: ${({ centered }) => (centered ? "center" : "baseline")};
  flex-direction: row;
  justify-content: center;
`;

export const WalkerInfoRowValue = styled.Text`
  font-size: 13px;
  line-height: 19px;
  font-family: "Poppins-SemiBold";
  color: #2b2b2b;
  margin-right: ${({ divided }) => (divided ? 5 : 0)}px;
`;

export const WalkerInfoRowText = styled.Text`
  font-size: 13px;
  line-height: 19px;
  font-family: "Poppins-SemiBold";
  color: #b0b0b0;
`;
