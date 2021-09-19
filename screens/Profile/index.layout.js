import React from 'react';
import {Text} from 'react-native';
import {TabScreen} from '../../common.styled';
import {TabScreenContainer} from './../../common.styled';
import OrangeButton from './../../components/OrangeButton';

export default function ProfileLayout({handleLogOut, user}) {
  return (
    <TabScreen>
      <TabScreenContainer>
        <Text>{user.fullname}</Text>
        <OrangeButton onPress={handleLogOut}>Logout</OrangeButton>
      </TabScreenContainer>
    </TabScreen>
  );
}
