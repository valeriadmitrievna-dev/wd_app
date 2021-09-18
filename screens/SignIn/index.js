import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import SignInLayout from './index.layout';
import {useToast} from 'native-base';
import WarningToast from './../../components/WarningToast';
import {isEmail} from 'validator';
import {SignInService} from './../../services/user';
import {useDispatch} from 'react-redux';
import {auth} from '../../redux/user';

export default function SignIn({navigation}) {
  const toast = useToast();
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const switchPasswordVidibility = () => {
    setPasswordHidden(!isPasswordHidden);
  };

  const renderWarningToast = title => {
    toast.show({
      render: () => <WarningToast title={title} />,
      duration: 3000,
      placement: 'top',
    });
  };

  const handleSignIn = async () => {
    Keyboard.dismiss();
    if (email.length < 1) renderWarningToast('Email is empty');
    else if (!isEmail(email.trim())) renderWarningToast('Email is invalid');
    else if (password.length === 0 && password.trim().length === 0)
      renderWarningToast('Password is empty');
    else if (password.includes(' '))
      renderWarningToast("Password can't contain spaces");
    else if (password.length < 6)
      renderWarningToast('Password length should be 6 or greater');
    else {
      setLoading(true);
      const response = await SignInService({email, password});
      if (response?.data?.error) {
        renderWarningToast(response?.data?.error);
      } else {
        if (response?.data?.token) {
          dispatch(auth());
        }
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SignInLayout
      navigation={navigation}
      isPasswordHidden={isPasswordHidden}
      isKeyboardVisible={isKeyboardVisible}
      switchPasswordVidibility={switchPasswordVidibility}
      handleSignIn={handleSignIn}
      setEmail={setEmail}
      setPassword={setPassword}
      isLoading={isLoading}
    />
  );
}
