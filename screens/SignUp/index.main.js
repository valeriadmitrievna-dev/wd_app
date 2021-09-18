import React from "react";
import LinearGradient from "react-native-linear-gradient";
import * as A from "../auth.styled";
import HiddenIcon from "../../Icons/HiddenIcon";
import VisibleIcon from "../../Icons/VisibleIcon";
import { ActivityIndicator, TouchableOpacity } from "react-native";

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
        />
        <A.PasswordSwitch onPress={switchPasswordVidibility}>
          {isPasswordHidden ? (
            <HiddenIcon w={25} h={22} />
          ) : (
            <VisibleIcon w={25} h={22} />
          )}
        </A.PasswordSwitch>
      </A.InputContainer>
      <TouchableOpacity onPress={handleSignUp}>
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={["#FE904B", "#FB724C"]}
          style={{
            borderRadius: 14,
            paddingVertical: 16,
          }}
        >
          <A.AuthButtonText>
            {!isLoading && <A.AuthButtonText>sign up</A.AuthButtonText>}
            {isLoading && <ActivityIndicator size="large" color="#f6f7fa" />}
          </A.AuthButtonText>
        </LinearGradient>
      </TouchableOpacity>
    </A.ScreenView>
  );
}
