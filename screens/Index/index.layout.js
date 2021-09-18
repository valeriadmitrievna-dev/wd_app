import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as I from './index.styled';
import IndexImage from '../../assets/index.png';
import Logo from './../../components/Logo';
import LinearGradient from 'react-native-linear-gradient';

export default function IndexLayout({toSignUp, toSignIn}) {
  return (
    <I.IndexView>
      <I.BackgroundImage
        source={IndexImage}
        imageStyle={{
          height: '80%',
        }}>
        <I.IndexContainer>
          <Logo />
          <I.IndexFooter>
            <I.FooterTitle>
              Too tired to walk your dog? Let’s help you!
            </I.FooterTitle>
            <TouchableOpacity onPress={toSignUp}>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}
                colors={['#FE904B', '#FB724C']}
                style={{
                  borderRadius: 14,
                  paddingVertical: 16,
                }}>
                <I.FooterButtonText>Join our community</I.FooterButtonText>
              </LinearGradient>
            </TouchableOpacity>
            <I.FooterSignIn>
              <I.FooterTextSignIn>Already a member?</I.FooterTextSignIn>
              <I.FooterSignInButton onPress={toSignIn}>
                <I.FooterSignInText>Sign In</I.FooterSignInText>
              </I.FooterSignInButton>
            </I.FooterSignIn>
          </I.IndexFooter>
        </I.IndexContainer>
      </I.BackgroundImage>
    </I.IndexView>
  );
}
