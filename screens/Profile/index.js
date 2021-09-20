import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/user';
import ProfileLayout from './index.layout';

export default function Profile({navigation}) {
  const dispatch = useDispatch();
  const {user, notifications} = useSelector(state => state.user);

  const handleLogOut = () => {
    dispatch(logout());
  };

  const goToSettings = () => {
    navigation.navigate('Settings');
  };
  const goToNotifications = () => {
    navigation.navigate('Notifications');
  };

  return (
    <ProfileLayout
      handleLogOut={handleLogOut}
      user={user}
      goToSettings={goToSettings}
      goToNotifications={goToNotifications}
      notifications={notifications}
    />
  );
}
