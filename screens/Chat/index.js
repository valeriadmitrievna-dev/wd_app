import React from 'react';
import ChatLayout from './index.layout';
import {useSelector} from 'react-redux';

export default function Chat({navigation}) {
  const dialogues = useSelector(state => state.chat);
  const {user} = useSelector(state => state.user);

  return (
    <ChatLayout dialogues={dialogues} user={user} navigation={navigation} />
  );
}
