import styled from 'styled-components/native';

export const NotificationBlock = styled.View`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const NotificationGroupDate = styled.Text`
  font-size: 17px;
  line-height: 25px;
  color: #2b2b2b;
  font-family: 'Poppins-SemiBold';
  margin-bottom: 5px;
  margin-left: 15px;
`;

export const NotificationTitle = styled.Text`
  font-size: 17px;
  line-height: 25px;
  color: #2b2b2b;
  font-family: 'Poppins-SemiBold';
  margin-bottom: 5px;
`;

export const NotificationText = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #2b2b2b;
  font-family: 'Poppins-Regular';
`;
