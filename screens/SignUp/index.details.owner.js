import React from 'react';
import * as A from '../auth.styled';
import {Text} from 'react-native';
import {Box} from 'native-base';
import OrangeButton from './../../components/OrangeButton';

export default function SignUpDetailsOwner({
  setLocation,
  setDescription,
  goToAvatar,
}) {
  return (
    <A.ScreenView>
      <A.AuthHeader>
        <A.AuthTitle>Details</A.AuthTitle>
        <A.AuthSubtitle>Fill in your owner details</A.AuthSubtitle>
      </A.AuthHeader>
      <Box mb="20px">
        <A.InputContainer style={{marginBottom: 5}}>
          <A.InputLabel>Location</A.InputLabel>
          <A.Input
            placeholder="New York, USA"
            onChangeText={setLocation}
            placeholderTextColor="#a1a1a1"
          />
        </A.InputContainer>
        <A.InputExample>
          e.g.<Text style={{color: '#000'}}> Tokyo, Japan</Text>
        </A.InputExample>
      </Box>
      <A.TransparentInputContainer>
        <A.InputHeader>
          <A.InputBigLabel>Description</A.InputBigLabel>
        </A.InputHeader>
        <A.InputTextarea
          placeholder="A few words about youself"
          onChangeText={setDescription}
          multiline={true}
          placeholderTextColor="#a1a1a1"
        />
      </A.TransparentInputContainer>
      <OrangeButton onPress={goToAvatar}>next</OrangeButton>
    </A.ScreenView>
  );
}
