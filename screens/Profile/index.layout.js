import React from 'react';
import {TabScreen} from '../../common.styled';
import {TabScreenContainer} from './../../common.styled';
import OrangeButton from './../../components/OrangeButton';
import SettingsIcon from './../../icons/settings.icon';
import NotificationIcon from './../../icons/notification.icon';
import * as P from './index.styled';
import {Center, Image, Stack} from 'native-base';
import LocationIcon from './../../icons/location.icon';
import GuideDogIcon from './../../icons/guide_dog.icon';
import HeartIcon from './../../icons/heart.icon';
import MedalIcon from './../../icons/medal.icon';
import DollarIcon from './../../icons/dollar.icon';

export default function ProfileLayout({handleLogOut, user}) {
  return (
    <P.ProfileContainer>
      <P.ProfileHeader>
        <P.HeaderButton>
          <SettingsIcon />
        </P.HeaderButton>
        <P.HeaderButton>
          <NotificationIcon />
        </P.HeaderButton>
      </P.ProfileHeader>
      <Center>
        <Image
          size={165}
          resizeMode={'cover'}
          borderRadius={200}
          source={{uri: user.profile_photo}}
          alt="Avatar"
        />
        <P.ProfileName>{user.fullname}</P.ProfileName>
        <P.LocationBlock>
          <LocationIcon />
          <P.Location>{user.location}</P.Location>
        </P.LocationBlock>
      </Center>
      <Stack direction="column" space="19px" mb="22px" width="100%">
        <P.MenuListItem>
          <GuideDogIcon />
          <P.MenuListItemText>My pets</P.MenuListItemText>
        </P.MenuListItem>
        <P.MenuListItem>
          <HeartIcon />
          <P.MenuListItemText>My favourites</P.MenuListItemText>
        </P.MenuListItem>
        <P.MenuListItem>
          <MedalIcon />
          <P.MenuListItemText>My badges</P.MenuListItemText>
        </P.MenuListItem>
        <P.MenuListItem>
          <DollarIcon />
          <P.MenuListItemText>My walks history</P.MenuListItemText>
        </P.MenuListItem>
        <OrangeButton onPress={handleLogOut}>Logout</OrangeButton>
      </Stack>
    </P.ProfileContainer>
  );
}
