import styled from 'styled-components/native';

export const ProfileContainer = styled.ScrollView`
  flex: 1;
  padding: 0 15px;
`;

export const ProfileHeader = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 15px;
  width: 100%;
`;

export const HeaderButton = styled.TouchableOpacity`
  background: #ebebeb;
  border-radius: 20px;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;

export const Badge = styled.View`
  background: #e73a40;
  width: 7px;
  height: 7px;
  border-radius: 3.5px;
  position: absolute;
  top: 11px;
  right: 13px;
  z-index: 1;
`;

export const ProfileName = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 34px;
  line-height: 51px;
  color: #2b2b2b;
  margin-top: 10px;
`;

export const LocationBlock = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 22px;
`;

export const Location = styled.Text`
  font-size: 17px;
  line-height: 22px;
  color: #a1a1a2;
  font-family: 'Poppins-SemiBold';
  margin-left: 2px;
`;

export const MenuListItem = styled.TouchableOpacity`
  background-color: #fafafa;
  width: 100%;
  border-radius: 14px;
  padding: 19px 26px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const MenuListItemText = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: #2b2b2b;
  margin-left: 10px;
  font-family: 'Poppins-SemiBold';
`;
