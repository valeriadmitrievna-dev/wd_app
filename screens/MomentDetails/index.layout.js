import React from 'react';
import {View, Text, Pressable, Dimensions} from 'react-native';
import * as M from './index.styled';
import {
  TabScreen,
  FullScreenScrollView,
  TabScreenContainer,
} from './../../common.styled';
import BackIcon from '../../icons/back.icon';
import LikeIcon from '../../icons/like.icon';
import AutoHeightImage from 'react-native-auto-height-image';
import {Image, Box} from 'native-base';
import {formatDistanceToNowStrict} from 'date-fns';

export default function MomentDetailsLayout({
  moment,
  navigation,
  isShowMore,
  setShowMore,
  isLiked,
  setLiked,
}) {
  return (
    <TabScreen>
      <TabScreenContainer style={{paddingVertical: 20}}>
        <Pressable onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
      </TabScreenContainer>
      <FullScreenScrollView>
        <TabScreenContainer>
          <M.MomentBlock>
            <M.MomentHeader>
              <Image
                alt="User"
                source={{uri: moment.owner.profile_photo}}
                w="44px"
                h="44px"
                borderRadius="44px"
                mr="10px"
              />
              <M.MomentOwnerTitle>{moment.owner.fullname}</M.MomentOwnerTitle>
              <M.LikesSection>
                <M.LikesCount>
                  {moment.likes > 999
                    ? (moment.likes / 1000).toFixed(1) + 'k'
                    : moment.likes}
                </M.LikesCount>
                <Pressable onPress={() => setLiked(!isLiked)}>
                  <LikeIcon w={28} h={28} liked={isLiked} />
                </Pressable>
              </M.LikesSection>
            </M.MomentHeader>
            <AutoHeightImage
              width={Dimensions.get('window').width * 0.91}
              source={{uri: moment.image}}
              style={{borderRadius: 8}}
            />
          </M.MomentBlock>
          <M.MomentContent numberOfLines={isShowMore ? 0 : 2}>
            <M.MomentContentOwner>
              {moment.owner.fullname}{' '}
            </M.MomentContentOwner>
            {moment.content}
          </M.MomentContent>
          <Pressable onPress={() => setShowMore(!isShowMore)}>
            <M.ShowMoreLess>{isShowMore ? 'Less' : 'More'}</M.ShowMoreLess>
          </Pressable>
          <M.CommentsSectionTitle>Comments</M.CommentsSectionTitle>
          <M.CommentTextArea
            placeholder="Share your thoughts!"
            multiline={true}
            placeholderTextColor="#a1a1a1"
          />
          <M.AddCommentButton>
            <M.AddCommentButtonText>Comment</M.AddCommentButtonText>
          </M.AddCommentButton>
          <Box mt="20px">{moment.comments.map(c => Comment(c))}</Box>
        </TabScreenContainer>
      </FullScreenScrollView>
    </TabScreen>
  );
}

const Comment = c => (
  <M.CommentBlock>
    <M.CommentHeader>
      <Image
        alt="User"
        source={{uri: c.owner.profile_photo}}
        w="28px"
        h="28px"
        borderRadius="28px"
        mr="10px"
      />
      <M.MomentContentOwner>{c.owner.fullname}</M.MomentContentOwner>
      <M.CommentCreated>
        {formatDistanceToNowStrict(new Date(c.created), {addSuffix: true})}
      </M.CommentCreated>
    </M.CommentHeader>
    <M.CommentContent>{c.content}</M.CommentContent>
  </M.CommentBlock>
);
