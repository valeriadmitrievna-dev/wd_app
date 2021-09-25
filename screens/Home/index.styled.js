import styled from 'styled-components/native';

export const HomeHeader = styled.View`
  padding-top: 16px;
  margin-bottom: 22px;
`;

export const HomeHeaderTitle = styled.Text`
  font-size: 34px;
  line-height: 51px;
  color: #2b2b2b;
  font-family: 'Poppins-Black';
`;

export const HomeHeaderText = styled.Text`
  font-size: 17px;
  line-height: 25px;
  color: #b0b0b0;
  font-family: 'Poppins-Bold';
`;

export const InputContainer = styled.View`
  background: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({mb}) => (mb > -1 ? mb : 22)}px;
`;

export const Input = styled.TextInput`
  font-size: 17px;
  line-height: 20px;
  color: #a1a1a1;
  font-family: 'Poppins-Bold';
  flex-grow: 1;
  margin-left: 5px;
  margin-top: 3px;
  padding: 0;
`;

export const HomeCategoryContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const HomeCategoryTitle = styled.Text`
  font-size: 34px;
  line-height: 51px;
  color: #2b2b2b;
  font-family: 'Poppins-Black';
`;

export const ViewAllButton = styled.Text`
  font-size: 15px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #2b2b2b;
  font-family: 'Poppins-Regular';
`;

export const HomeHorizontalContainer = styled.ScrollView`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 10px;
`;
