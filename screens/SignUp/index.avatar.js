import React from 'react';
import * as A from '../auth.styled';
import {RadioButtons} from 'react-native-radio-buttons';
import OrangeButton from './../../components/OrangeButton';
import {Image, Stack, Button} from 'native-base';
import {Pressable} from 'react-native';
import default_avatars from './../../constants';

const SignUpAvatar = ({goToFinish, profile_photo, setProfilePhoto}) => {
  function renderOption(option, selected, onSelect, index) {
    return (
      <Button
        onPress={onSelect}
        p={1}
        borderRadius={200}
        mb={2}
        bg={selected ? '#FE904B' : '#fff'}>
        <Image
          key={index}
          size={100}
          resizeMode={'cover'}
          borderRadius={200}
          source={{uri: option}}
          alt="Avatar"
        />
      </Button>
    );
  }

  function renderContainer(optionNodes) {
    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        mb={3}
        space={3}>
        {optionNodes}
      </Stack>
    );
  }

  return (
    <A.ScreenView>
      <A.AuthHeader>
        <A.AuthTitle>Show yourself</A.AuthTitle>
        <A.AuthSubtitle>
          Upload your avatar or choose from the suggested ones
        </A.AuthSubtitle>
      </A.AuthHeader>
      <RadioButtons
        options={default_avatars}
        onSelection={setProfilePhoto}
        selectedOption={profile_photo}
        renderOption={renderOption}
        renderContainer={renderContainer}
      />
      <OrangeButton
        style={{
          marginBottom: 30,
        }}
        onPress={goToFinish}>
        next
      </OrangeButton>
    </A.ScreenView>
  );
};

export default SignUpAvatar;
