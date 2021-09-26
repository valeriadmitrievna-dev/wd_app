import styled from 'styled-components/native';

export const TabScreen = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  /* padding-top: 25px; */
`;

export const TabScreenContainer = styled.View`
  width: 91%;
  margin: 0 auto;
`;

export const JustFlex = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const HDivider = styled.View`
  height: 3px;
  width: 100%;
  background-color: #e8e8e8;
  margin: ${({m}) => (m ? m : 14)}px 0;
`;

export const VDivider = styled.View`
  height: ${({h}) => (h ? h : 15)}px;
  width: 2px;
  background-color: #a1a1a1;
  margin: 0 ${({m}) => (m ? m : 10)}px;
`;

export const FullScreenScrollView = styled.ScrollView`
  flex: 1;
  display: flex;
`;