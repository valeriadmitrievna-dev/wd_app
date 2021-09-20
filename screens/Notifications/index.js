import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {checkNotifications} from '../../redux/user';
import NotificationsLayout from './index.layout';

export default function Notifications({notifications, navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkNotifications());
  }, []);

  return (
    <NotificationsLayout
      notifications={[
        ...new Set(notifications?.list?.map(n => n.date.toString())),
      ]?.map(d => {
        return {
          date: d,
          list: notifications.list.filter(n => n.date.toString() === d),
        };
      })}
      navigation={navigation}
    />
  );
}
