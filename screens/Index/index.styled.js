import styled from "styled-components/native";

export const IndexView = styled.View`
  flex: 1;
  background-color: #202020;
`;

export const BackgroundImage = styled.ImageBackground`
  /* padding-top: 45px; */
  padding-top: 25px;
  width: 100%;
`;

export const IndexContainer = styled.View`
  width: 91%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const IndexFooter = styled.View`
  align-self: center;
  margin-top: auto;
  padding-bottom: 40px;
`;

export const FooterTitle = styled.Text`
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: #fcfcfc;
  font-family: "Poppins-Black";
  margin-bottom: 22px;
`;

export const FooterButtonText = styled.Text`
  font-size: 17px;
  line-height: 25px;
  color: #fcfcfc;
  font-family: "Poppins-Black";
  text-align: center;
`;

export const FooterSignIn = styled.View`
  margin-top: 22px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: row;
`;

export const FooterTextSignIn = styled.Text`
  font-size: 13px;
  line-height: 19px;
  color: #fcfcfc;
  font-family: "Poppins-Bold";
`;

export const FooterSignInButton = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const FooterSignInText = styled.Text`
  font-size: 13px;
  line-height: 19px;
  color: #fe904b;
  font-family: "Poppins-Bold";
`;
