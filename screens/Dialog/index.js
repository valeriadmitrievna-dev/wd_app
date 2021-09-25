import startOfDay from 'date-fns/startOfDay';
import React, {useEffect, useRef, useState} from 'react';
import {Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addMessage, checkDialog} from '../../redux/chat';
import DialogLayout from './index.layout';

export default function Dialog({route, navigation}) {
  const {user} = useSelector(state => state.user);
  const dialogues = useSelector(state => state.chat);
  const [height, setInputHeight] = useState(1);
  const [dialog, setDialog] = useState(
    dialogues.find(d => d._id === route.params),
  );
  const scrollViewRef = useRef();
  const [messageText, setMessageText] = useState('');
  const dispatch = useDispatch();

  const handleChangeContentSize = e => {
    if (e.nativeEvent.contentSize.height < 100) {
      setInputHeight(e.nativeEvent.contentSize.height);
    }
  };

  const handleSendMessage = () => {
    if (messageText.trim().length) {
      dispatch(
        addMessage({
          d_id: dialog._id,
          u_id: user._id,
          content: messageText,
        }),
      );
      scrollToBottom();
    }
    setMessageText('');
  };

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({animated: true, duration: 2000});
  };

  useEffect(() => {
    setDialog(dialogues.find(d => d._id === route.params));
  }, [dialogues]);

  useEffect(() => {
    dispatch(checkDialog(dialog._id));

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        scrollToBottom();
      },
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <DialogLayout
      user={user}
      navigation={navigation}
      interlocutor={dialog.interlocutors.find(i => i._id !== user._id)}
      handleChangeContentSize={handleChangeContentSize}
      height={height}
      messageText={messageText}
      setMessageText={setMessageText}
      handleSendMessage={handleSendMessage}
      messages={[
        ...new Set(
          dialog.messages?.map(n => startOfDay(new Date(n.created)).toString()),
        ),
      ]?.map(d => {
        return {
          date: d,
          list: dialog.messages.filter(
            n => startOfDay(new Date(n.created)).toString() === d,
          ),
        };
      })}
      scrollViewRef={scrollViewRef}
      scrollToBottom={scrollToBottom}
    />
  );
}
