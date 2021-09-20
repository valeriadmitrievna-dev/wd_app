import styled from 'styled-components/native';

export const BackgroundImage = styled.ImageBackground`
  position: relative;
  width: 100%;
  height: 350px;
  padding: 16px;
  padding-top: 15px;
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
  font-family: 'Poppins-Black';
  margin-right: 4px;
`;

export const WalkerInfoContainer = styled.View`
  position: absolute;
  background: #fbfbfb;
  border-radius: 24px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 440px;
  padding: 15px;
`;

export const WalkerName = styled.Text`
  font-size: 28px;
  line-height: 37px;
  margin-bottom: 10px;
  font-family: 'Poppins-Black';
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
  align-items: ${({centered}) => (centered ? 'center' : 'baseline')};
  flex-direction: row;
  justify-content: center;
`;

export const WalkerInfoRowValue = styled.Text`
  font-size: 13px;
  line-height: 19px;
  font-family: 'Poppins-SemiBold';
  color: #2b2b2b;
  margin-right: ${({divided}) => (divided ? 5 : 0)}px;
`;

export const WalkerInfoRowText = styled.Text`
  font-size: 13px;
  line-height: 19px;
  font-family: 'Poppins-SemiBold';
  color: #b0b0b0;
`;

export const TabButton = styled.Text`
  padding: 10px;
  font-size: 13px;
  line-height: 19px;
  font-family: ${({active}) => (active ? 'Poppins-Black' : 'Poppins-SemiBold')};
  flex-grow: 1;
  text-align: center;
  border-radius: 14px;
  background-color: ${({active}) => (active ? '#2B2B2B' : '#F5F5F5')};
  color: ${({active}) => (active ? '#F7F7F8' : '#B0B0B0')};
`;

export const AboutInfoTitle = styled.Text`
  font-size: 13px;
  line-height: 19px;
  font-family: 'Poppins-SemiBold';
  color: #b0b0b0;
`;

export const AboutInfoValue = styled.Text`
  font-size: 17px;
  line-height: 25px;
  color: #2b2b2b;
  font-family: 'Poppins-SemiBold';
`;

export const AboutInfoDescription = styled.Text`
  font-size: 13px;
  line-height: 19px;
  font-family: 'Poppins-SemiBold';
  color: #b0b0b0;
  width: 80%;
`;

export const FlexFull = styled.ScrollView`
  display: flex;
  flex-grow: 1;
  flex: 1;
`;
