import React from 'react';
import {View} from 'react-native';
import {
  TabScreen,
  TabScreenContainer,
  FullScreenScrollView,
} from '../../common.styled';
import * as H from '../Home/index.styled';
import * as D from './index.styled';
import SearchIcon from '../../icons/search.icon';
import {Image} from 'native-base';
import {formatTime} from '../../utils';

export default function ChatLayout({dialogues, user, navigation}) {
  return (
    <TabScreen>
      <TabScreenContainer>
        <H.HomeHeader>
          <H.HomeHeaderTitle>Chat</H.HomeHeaderTitle>
          <H.InputContainer mb={0}>
            <SearchIcon mb={3} />
            <H.Input placeholder="Search" placeholderTextColor="#a1a1a1" />
          </H.InputContainer>
        </H.HomeHeader>
      </TabScreenContainer>
      <FullScreenScrollView
        style={{
          borderTopWidth: 2,
          borderTopColor: '#eceef1',
        }}>
        {dialogues.map(d => (
          <D.DialogContainer
            key={d._id}
            onPress={() => {
              navigation.navigate('Dialog', d._id);
            }}>
            <Image
              source={{
                uri: d.interlocutors.find(i => i._id !== user._id)
                  .profile_photo,
              }}
              w="58px"
              h="58px"
              borderRadius="58px"
              alt="avatar"
              mr="12px"
            />
            {!d.checked && <D.UncheckedDot />}
            <View>
              <D.DialogName>
                {d.interlocutors.find(i => i._id !== user._id).fullname}
              </D.DialogName>
              <D.DialogItemFooter>
                <D.DialogMessage numberOfLines={1}>
                  {d.messages[d.messages.length - 1].content}
                </D.DialogMessage>
                <D.DialogTime>
                  {' '}
                  ∙ {formatTime(d.messages[d.messages.length - 1].created)}
                </D.DialogTime>
              </D.DialogItemFooter>
            </View>
          </D.DialogContainer>
        ))}
      </FullScreenScrollView>
    </TabScreen>
  );
}
