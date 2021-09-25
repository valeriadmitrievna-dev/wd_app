import styled from 'styled-components/native';

export const TabScreenContainer = styled.View`
  width: 91%;
  margin: 0 auto;
  /* flex-grow: 1; */
`;

export const DialogHeader = styled.View`
  padding-bottom: 10px;
  padding-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const DialogTitle = styled.Text`
  font-size: 17px;
  line-height: 25px;
  color: #2b2b2b;
  font-family: 'Poppins-Black';
`;

export const StatusLine = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const StatusText = styled.Text`
  font-size: 13px;
  line-height: 19px;
  color: #aeaeb2;
  font-family: 'Poppins-SemiBold';
`;

export const StatusDot = styled.View`
  margin-right: 2px;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background-color: ${({online}) => (online ? '#5ad439' : '#aeaeb2')};
`;

export const DialogFooter = styled.View`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  padding: 10px 0;
  width: 100%;
  justify-content: space-between;
`;

export const MessageInput = styled.TextInput`
  background-color: #f5f5f5;
  border-radius: 14px;
  padding: 9px 12px;
  padding-top: 11px;
  font-size: 17px;
  line-height: 30px;
  font-family: 'Poppins-SemiBold';
  color: #2b2b2b;
  height: ${({height}) => height + 'px' || 'auto'};
  margin-right: 10px;
`;

export const SendButton = styled.Pressable`
  background-color: #fb724c;
  border-radius: 14px;
  height: 47.5px;
  margin-left: 15px;
  width: 44px;
`;

export const MessagesDate = styled.Text`
  font-size: 13px;
  line-height: 19px;
  font-family: 'Poppins-SemiBold';
  color: #aeaeb2;
  margin-bottom: 12px;
  text-align: center;
`;

export const Message = styled.View`
  padding: 10px;
  background-color: ${({own}) => (own ? '#FB724C' : '#ECEEF1')};
  border-radius: 14px;
  margin-bottom: 10px;
  ${({own}) => own && 'margin-left: auto;'}
  ${({own}) => !own && 'margin-right: auto;'}
  max-width: 215px;
`;

export const MessageText = styled.Text`
  font-size: 13px;
  line-height: 18px;
  text-align: ${({own}) => (own ? 'right' : 'left')};
  color: ${({own}) => (own ? '#f7f7f8' : '#2B2B2B')};
  font-family: 'Poppins-SemiBold';
`;
