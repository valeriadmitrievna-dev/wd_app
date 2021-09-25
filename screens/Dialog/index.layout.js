import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {TabScreen, FullScreenScrollView} from '../../common.styled';
import {ArrowBackIcon, Image} from 'native-base';
import * as D from './index.styled';
import SendIcon from '../../icons/send.icon';
import startOfDay from 'date-fns/startOfDay';
import {format, isEqual, subDays} from 'date-fns';

export default function DialogLayout({
  user,
  navigation,
  interlocutor,
  handleChangeContentSize,
  height,
  messageText,
  setMessageText,
  handleSendMessage,
  messages,
  scrollViewRef,
  scrollToBottom,
}) {
  return (
    <TabScreen>
      <D.TabScreenContainer>
        <D.DialogHeader>
          <ArrowBackIcon onPress={() => navigation.goBack()} />
          <Image
            source={{
              uri: interlocutor.profile_photo,
            }}
            w="48px"
            h="48px"
            borderRadius="48px"
            alt="avatar"
            mr="10px"
            ml="20px"
          />
          <View>
            <D.DialogTitle>{interlocutor.fullname}</D.DialogTitle>
            <D.StatusLine>
              <D.StatusDot online={interlocutor.online} />
              <D.StatusText>
                {interlocutor.online ? 'Online' : 'Offline'}
              </D.StatusText>
            </D.StatusLine>
          </View>
        </D.DialogHeader>
      </D.TabScreenContainer>
      <FullScreenScrollView
        style={{paddingHorizontal: 15}}
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom}>
        {messages.map((msgs, id) => (
          <View key={id}>
            <D.MessagesDate>
              {isEqual(startOfDay(new Date(msgs.date)), startOfDay(new Date()))
                ? 'Today'
                : isEqual(
                    startOfDay(new Date(msgs.date)),
                    startOfDay(subDays(new Date(), 1)),
                  )
                ? 'Yesterday'
                : format(new Date(msgs.date), 'dd MMM yyyy')}
            </D.MessagesDate>
            {msgs.list.map(m => (
              <D.Message own={m.owner === user._id} key={m._id}>
                <D.MessageText own={m.owner === user._id}>
                  {m.content}
                </D.MessageText>
              </D.Message>
            ))}
          </View>
        ))}
      </FullScreenScrollView>
      <D.TabScreenContainer>
        <D.DialogFooter>
          <D.MessageInput
            placeholder="Aa"
            selectionColor="#FB724C"
            placeholderTextColor="#b0b0b0"
            multiline={true}
            onContentSizeChange={handleChangeContentSize}
            height={height}
            style={{width: Dimensions.get('window').width * 0.91 - 60}}
            value={messageText}
            onChangeText={setMessageText}
          />
          <TouchableOpacity onPress={handleSendMessage}>
            <SendIcon />
          </TouchableOpacity>
        </D.DialogFooter>
      </D.TabScreenContainer>
    </TabScreen>
  );
}
