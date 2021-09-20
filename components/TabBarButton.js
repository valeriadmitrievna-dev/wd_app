import React from 'react';
import styled from 'styled-components/native';
import HomeIcon from './../icons/home.icon';
import MomentsIcon from './../icons/moments.icon';
import ChatIcon from './../icons/chat.icon';
import ProfileIcon from './../icons/profile.icon';

const TabButton = styled.Pressable`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TabTitle = styled.Text`
  font-size: 10px;
  line-height: 15px;
  color: ${({color}) => color};
  font-family: 'Poppins-Black';
`;

const TabBadge = styled.View`
  background: #e73a40;
  width: 7px;
  height: 7px;
  border-radius: 3.5px;
  position: absolute;
  top: 23%;
  left: 41%;
  z-index: 1;
`;

export default function TabBarButton({
  accessibilityState,
  notifications,
  new_messages,
  to,
  onPress,
}) {
  const color = accessibilityState?.selected ? '#2B2B2B' : '#AEAEB2';
  const route = to
    ?.replace('/Root/', '')
    .replace('/Notifications/', '')
    .replace('/Walker/', '')
    .replace('/Settings/', '');
  return (
    <TabButton onPress={onPress}>
      {/* badges */}
      {route === 'Chat' && new_messages > 0 && <TabBadge />}
      {route === 'Profile' && !notifications?.checked && <TabBadge />}
      {/* icons */}
      {route === 'Home' && <HomeIcon color={color} />}
      {route === 'Moments' && <MomentsIcon color={color} />}
      {route === 'Chat' && <ChatIcon color={color} />}
      {route === 'Profile' && <ProfileIcon color={color} />}
      <TabTitle color={color}>{route}</TabTitle>
    </TabButton>
  );
}
