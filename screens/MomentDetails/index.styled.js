import styled from 'styled-components/native';

export const MomentHeader = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
  z-index: 5;
  background-color: rgba(251, 114, 76, 0.9);
  width: 100%;
  padding: 8px 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const MomentBlock = styled.View`
  position: relative;
`;

export const MomentOwnerTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-family: 'Poppins-SemiBold';
  color: #fff;
`;

export const MomentContent = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #2b2b2b;
  margin-top: 14px;
  font-family: 'Poppins-SemiBold';
  text-align: justify;
`;

export const MomentContentOwner = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #2b2b2b;
  font-family: 'Poppins-Black';
`;

export const ShowMoreLess = styled.Text`
  font-size: 13px;
  line-height: 19px;
  color: #fb724c;
  font-family: 'Poppins-Bold';
`;

export const CommentsSectionTitle = styled.Text`
  font-size: 17px;
  line-height: 25px;
  color: #2b2b2b;
  font-family: 'Poppins-Bold';
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const CommentTextArea = styled.TextInput`
  padding: 8px 16px;
  background: #f0f0f0;
  border-radius: 8px;
  font-size: 13px;
  line-height: 18px;
  color: #2b2b2b;
  font-family: 'Poppins-SemiBold';
  /* text-align-vertical: top; */
  margin-bottom: 10px;
`;

export const AddCommentButton = styled.Pressable`
  background-color: #fb724c;
  border-radius: 8px;
  padding: 8px 10px;
  width: 110px;
`;

export const AddCommentButtonText = styled.Text`
  font-size: 13px;
  line-height: 18px;
  font-family: 'Poppins-SemiBold';
  color: #fff;
  text-align: center;
`;

export const CommentBlock = styled.View`
  padding: 12px;
  background: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const CommentHeader = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const CommentCreated = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #2b2b2b;
  font-family: 'Poppins-SemiBold';
  margin-left: auto;
`;

export const CommentContent = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #2b2b2b;
  font-family: 'Poppins-SemiBold';
`;

export const LikesSection = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: auto;
`;

export const LikesCount = styled.Text`
  margin-right: 10px;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  font-family: 'Poppins-SemiBold';
`;
