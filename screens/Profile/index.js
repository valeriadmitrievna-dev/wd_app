import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/user';
import ProfileLayout from './index.layout';

export default function Profile() {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return <ProfileLayout handleLogOut={handleLogOut} user={user} />;
}
