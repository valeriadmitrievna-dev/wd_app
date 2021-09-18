import styled from 'styled-components/native';

export const ScreenView = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 0 5%;
`;

export const AuthHeader = styled.View`
  margin: 22px 0;
`;

export const BackButton = styled.Pressable`
  margin-top: 20px;
`;

export const AuthTitle = styled.Text`
  font-size: 34px;
  line-height: 51px;
  color: #2b2b2b;
  font-family: 'Poppins-Black';
`;

export const AuthSubtitle = styled.Text`
  font-size: 17px;
  line-height: 25px;
  color: #7a7a7a;
  font-family: 'Poppins-Bold';
`;

export const InputContainer = styled.View`
  padding: 8px 16px;
  margin-bottom: 22px;
  background: #f0f0f0;
  border-radius: 14px;
  position: relative;
`;

export const InputLabel = styled.Text`
  font-size: 10px;
  line-height: 24px;
  color: #aeaeb2;
  font-family: 'Poppins-SemiBold';
`;

export const Input = styled.TextInput`
  font-size: 17px;
  line-height: 22px;
  color: #2b2b2b;
  font-family: 'Poppins-SemiBold';
  padding: 0;
`;

export const InputExample = styled.Text`
  font-size: 12px;
  line-height: 24px;
  color: #7a7a7a;
  font-family: 'Poppins-SemiBold';
  margin-left: 15px;
`;

export const PasswordSwitch = styled.Pressable`
  position: absolute;
  right: 0;
  top: 0;
  height: 65px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthButtonText = styled.Text`
  font-size: 17px;
  line-height: 25px;
  color: #f6f7fa;
  text-align: center;
  font-family: 'Poppins-Black';
  text-transform: capitalize;
`;

export const AuthFooterText = styled.Text`
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #2b2b2b;
  font-family: 'Poppins-SemiBold';
  width: 80%;
  margin: 0 auto;
  margin-top: auto;
  margin-bottom: 20px;
`;

export const RadioButtonsContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 22px;
`;

export const RadioWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background: ${({c}) => c};
  border: 3px solid #fb724c;
  border-radius: 24px;
  margin: 10px 0;
`;

export const RadioButtonText = styled.Text`
  font-size: 17px;
  line-height: 25px;
  color: ${({c}) => c};
  font-family: 'Poppins-SemiBold';
  text-transform: capitalize;
  margin-top: 10px;
`;

export const RadioSelected = styled.View``;

export const TransparentInputContainer = styled.View`
  margin-bottom: 22px;
`;

export const InputHeader = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const InputBigLabel = styled.Text`
  font-size: 22px;
  line-height: 33px;
  color: #2b2b2b;
  font-family: 'Poppins-SemiBold';
`;

export const InputBigValue = styled.Text`
  font-size: 22px;
  line-height: 33px;
  color: #2b2b2b;
  font-family: 'Poppins-Bold';
`;

export const InputTextarea = styled.TextInput`
  padding: 8px 16px;
  background: #f0f0f0;
  border-radius: 14px;
  height: 150px;
  font-size: 17px;
  line-height: 25px;
  color: #2b2b2b;
  font-family: 'Poppins-SemiBold';
  text-align-vertical: top;
  margin-top: 5px;
`;
