import React from 'react';
import * as A from '../auth.styled';
import HiddenIcon from '../../icons/hidden.icon';
import VisibleIcon from '../../icons/visible.icon';
import {ActivityIndicator} from 'react-native';
import OrangeButton from './../../components/OrangeButton';

export default function SignUpMain({
  isPasswordHidden,
  switchPasswordVidibility,
  handleSignUp,
  setFullname,
  setEmail,
  setPassword,
  isLoading,
  fullname,
  email,
  password,
}) {
  return (
    <A.ScreenView>
      <A.AuthHeader>
        <A.AuthTitle>Let’s start here</A.AuthTitle>
        <A.AuthSubtitle>Fill in your details to begin</A.AuthSubtitle>
      </A.AuthHeader>
      <A.InputContainer>
        <A.InputLabel>Fullname</A.InputLabel>
        <A.Input
          placeholder="John Smith"
          onChangeText={setFullname}
          value={fullname}
          placeholderTextColor="#a1a1a1"
        />
      </A.InputContainer>
      <A.InputContainer>
        <A.InputLabel>E-mail</A.InputLabel>
        <A.Input
          placeholder="email@email.com"
          autoCompleteType="email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor="#a1a1a1"
        />
      </A.InputContainer>
      <A.InputContainer>
        <A.InputLabel>Password</A.InputLabel>
        <A.Input
          type="password"
          secureTextEntry={isPasswordHidden}
          placeholder="qwerty123"
          onChangeText={setPassword}
          value={password}
          placeholderTextColor="#a1a1a1"
        />
        <A.PasswordSwitch onPress={switchPasswordVidibility}>
          {isPasswordHidden ? (
            <HiddenIcon w={25} h={22} />
          ) : (
            <VisibleIcon w={25} h={22} />
          )}
        </A.PasswordSwitch>
      </A.InputContainer>
      <OrangeButton onPress={handleSignUp}>
        {!isLoading && <A.AuthButtonText>sign up</A.AuthButtonText>}
        {isLoading && <ActivityIndicator size="large" color="#f6f7fa" />}
      </OrangeButton>
    </A.ScreenView>
  );
}
