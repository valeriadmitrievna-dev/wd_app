import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { TabScreen, TabScreenContainer } from "../../common.styled";
import * as A from "../auth.styled";
import BackIcon from "./../../icons/back.icon";
import HiddenIcon from "./../../icons/hidden.icon";
import VisibleIcon from "./../../icons/visible.icon";
import { ActivityIndicator, TouchableOpacity } from "react-native";

export default function SignInLayout({
  navigation,
  isPasswordHidden,
  isKeyboardVisible,
  switchPasswordVidibility,
  handleSignIn,
  setEmail,
  setPassword,
  isLoading,
}) {
  return (
    <TabScreen>
      <TabScreenContainer
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <A.BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </A.BackButton>
        <A.AuthHeader>
          <A.AuthTitle>Welcome back</A.AuthTitle>
          <A.AuthSubtitle>We are happy to see you again</A.AuthSubtitle>
        </A.AuthHeader>
        <A.InputContainer>
          <A.InputLabel>E-mail</A.InputLabel>
          <A.Input
            placeholder="email@email.com"
            autoCompleteType="email"
            keyboardType="email-address"
            placeholderTextColor="#a1a1a1"
            onChangeText={setEmail}
            name="email"
          />
        </A.InputContainer>
        <A.InputContainer>
          <A.InputLabel>Password</A.InputLabel>
          <A.Input
            type="password"
            secureTextEntry={isPasswordHidden}
            placeholder="qwerty123"
            onChangeText={setPassword}
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
        <TouchableOpacity onPress={handleSignIn}>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={["#FE904B", "#FB724C"]}
            style={{
              borderRadius: 14,
              paddingVertical: 16,
            }}
          >
            {!isLoading && <A.AuthButtonText>sign in</A.AuthButtonText>}
            {isLoading && <ActivityIndicator size="large" color="#f6f7fa" />}
          </LinearGradient>
        </TouchableOpacity>
        {!isKeyboardVisible && (
          <A.AuthFooterText>
            By signing in, I agree with Terms of Use and Privacy Policy
          </A.AuthFooterText>
        )}
      </TabScreenContainer>
    </TabScreen>
  );
}
