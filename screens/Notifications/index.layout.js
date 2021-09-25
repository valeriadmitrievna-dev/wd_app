import React from 'react';
import {View, Pressable, ScrollView} from 'react-native';
import {TabScreen, TabScreenContainer} from './../../common.styled';
import * as H from '../Home/index.styled';
import * as N from './index.styled';
import {ArrowBackIcon, Image, Stack} from 'native-base';
import {format} from 'date-fns';

export default function NotificationsLayout({navigation, notifications}) {
  return (
    <TabScreen>
      <TabScreenContainer style={{paddingTop: 20}}>
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </Pressable>
        <H.HomeHeader>
          <H.HomeHeaderTitle>Notifications</H.HomeHeaderTitle>
          <H.HomeHeaderText>Check out what's new</H.HomeHeaderText>
        </H.HomeHeader>
      </TabScreenContainer>
      <ScrollView>
        <TabScreenContainer>
          <Stack space="15px">
            {notifications.map((ns, id) => (
              <View key={id}>
                <N.NotificationGroupDate>
                  {format(new Date(ns.date), 'dd MMMM yyyy')}
                </N.NotificationGroupDate>
                <Stack space="10px">
                  {ns.list.map(n => (
                    <N.NotificationBlock key={n._id}>
                      <Image
                        source={{
                          uri:
                            n?.owner?.profile_photo ||
                            'https://woodog.s3.amazonaws.com/paw128.png',
                        }}
                        w="58px"
                        h="58px"
                        mr="10px"
                        alt="Avatar"
                        borderRadius="60px"
                      />
                      <View style={{flex: 1}}>
                        <N.NotificationTitle>{n.title}</N.NotificationTitle>
                        <N.NotificationText>{n.content}</N.NotificationText>
                      </View>
                    </N.NotificationBlock>
                  ))}
                </Stack>
              </View>
            ))}
          </Stack>
        </TabScreenContainer>
      </ScrollView>
    </TabScreen>
  );
}
