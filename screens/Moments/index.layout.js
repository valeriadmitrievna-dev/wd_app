import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TabScreen, TabScreenContainer} from '../../common.styled';
import Logo from '../../components/Logo';
import * as M from './index.styled';
import MasonryList from '@react-native-seoul/masonry-list';
import MomentCard from '../../components/MomentCard';

export default function MomentsLayout({moments, checkMoment}) {
  return (
    <TabScreen>
      <M.MomentsHeader>
        <Logo />
        <TouchableOpacity>
          <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}
            colors={['#FE904B', '#FB724C']}
            style={{
              borderRadius: 10,
              paddingVertical: 15,
              paddingHorizontal: 18,
            }}>
            <M.AddPostText>+ Add post</M.AddPostText>
          </LinearGradient>
        </TouchableOpacity>
      </M.MomentsHeader>
      <TabScreenContainer>
        <M.MomentsGroupTitle>Recently added</M.MomentsGroupTitle>
      </TabScreenContainer>
      <MasonryList
        data={moments}
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: '4.5%',
          alignSelf: 'stretch',
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({item, i}) => (
          <MomentCard
            key={i}
            item={item}
            left={i % 2}
            checkMoment={checkMoment}
          />
        )}
        onEndReachedThreshold={0.1}
      />
    </TabScreen>
  );
}
