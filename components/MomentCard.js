import styled from 'styled-components/native';
import React from 'react';
import {Dimensions} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import LikeIcon from '../icons/like.icon';
import CommentIcon from '../icons/comment.icon';

const MomentCardContainer = styled.TouchableOpacity`
  margin-right: ${({left}) => (left ? 0 : 8)}px;
  margin-left: ${({left}) => (left ? 8 : 0)}px;
  margin-bottom: 16px;
  position: relative;
`;

const MomentFooter = styled.View`
  position: absolute;
  left: 9px;
  bottom: 9px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const MomentButton = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2px 7px;
  background: rgba(200, 200, 200, 0.7);
  border-radius: 14px;
  margin-right: 10px;
`;

const MomentButtonText = styled.Text`
  font-size: 10px;
  line-height: 15px;
  color: #fbfbfb;
  font-family: 'Poppins-SemiBold';
  margin-left: 5px;
  margin-top: 2px;
`;

export default function MomentCard({item, left, checkMoment}) {
  return (
    <MomentCardContainer left={left} onPress={() => checkMoment(item)}>
      <AutoHeightImage
        width={(Dimensions.get('window').width * 0.91 - 16) / 2}
        source={{uri: item.image}}
        style={{borderRadius: 14}}
      />
      <MomentFooter>
        <MomentButton>
          <LikeIcon />
          <MomentButtonText>
            {item.likes > 999
              ? (item.likes / 1000).toFixed(1) + 'k'
              : item.likes}
          </MomentButtonText>
        </MomentButton>
        <MomentButton>
          <CommentIcon />
          <MomentButtonText>
            {item.comments.length > 999
              ? (item.comments.length / 1000).toFixed(1) + 'k'
              : item.comments.length}
          </MomentButtonText>
        </MomentButton>
      </MomentFooter>
    </MomentCardContainer>
  );
}
