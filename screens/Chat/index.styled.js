import styled from 'styled-components/native';

export const DialogContainer = styled.Pressable`
  padding: 20px;
  border-bottom-width: 2px;
  border-bottom-color: #eceef1;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

export const UncheckedDot = styled.View`
  position: absolute;
  top: 44px;
  right: 20px;
  width: 10px;
  height: 10px;
  background-color: #fb724c;
  border-radius: 10px;
`;

export const DialogName = styled.Text`
  font-size: 20px;
  line-height: 24px;
  font-family: 'Poppins-Black';
  color: #2b2b2b;
  margin-bottom: 2px;
`;

export const DialogMessage = styled.Text`
  font-size: 17px;
  line-height: 22px;
  font-family: 'Poppins-SemiBold';
  color: #4f4f4f;
  max-width: 200px;
`;

export const DialogTime = styled.Text`
  font-size: 17px;
  line-height: 22px;
  font-family: 'Poppins-SemiBold';
  color: #4f4f4f;
`;

export const DialogItemFooter = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
