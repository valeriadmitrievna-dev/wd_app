import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useToast } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import { TabScreen, TabScreenContainer } from '../../common.styled';
import BackIcon from '../../icons/back.icon';
import { auth, setUser } from '../../redux/user';
import { SignUpService } from '../../services/user';
import * as A from '../auth.styled';
import WarningToast from './../../components/WarningToast';
import SignUpAvatar from './index.avatar';
import SignUpDetailsOwner from './index.details.owner';
import SignUpDetailsWalker from './index.details.walker';
import SignUpMain from './index.main';
import SignUpRole from './index.role';

const Stack = createNativeStackNavigator();

export default function SignUp({navigation}) {
  const toast = useToast();
  const [role, setRole] = useState();
  const [price, setPrice] = useState(3);
  const [age, setAge] = useState(14);
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [fullname, setFullname] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [profile_photo, setProfilePhoto] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [isAgeModalVisible, setAgeModalVisible] = useState(false);
  const [isExperienceModalVisible, setExperienceModalVisible] = useState(false);
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
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

  const goToDetails = () => {
    if (!role) {
      renderWarningToast('Select role');
    } else {
      navigation.navigate(`Details_${role}`);
    }
  };

  const goToAvatar = () => {
    if (!location || location.trim() === '') {
      renderWarningToast('Enter your location');
    } else if (!location.includes(',')) {
      renderWarningToast('Enter valid location');
    } else if (role === 'walker' && !experience.trim().length)
      renderWarningToast('Indicate how much experience you have');
    else {
      navigation.navigate('Avatar');
    }
  };

  const goToFinish = () => {
    if (!profile_photo || !profile_photo.length) {
      renderWarningToast('Choose profile photo');
    } else {
      navigation.navigate('Finish');
    }
  };

  const handleSignUp = async () => {
    Keyboard.dismiss();
    if (fullname.length === 0 && fullname.trim().length === 0)
      renderWarningToast('Full name is empty');
    else if (fullname.split(' ').filter(word => word !== ' ').length < 2) {
      renderWarningToast('Full name requires at least 2 words');
    } else if (email.length < 1) renderWarningToast('Email is empty');
    else if (!isEmail(email.trim())) renderWarningToast('Email is invalid');
    else if (password.length === 0 && password.trim().length === 0)
      renderWarningToast('Password is empty');
    else if (password.includes(' '))
      renderWarningToast("Password can't contain spaces");
    else if (password.length < 6)
      renderWarningToast('Password length should be 6 or greater');
    else {
      setLoading(true);
      const response = await SignUpService({
        walker: role === 'walker',
        price,
        age,
        location,
        fullname,
        email,
        password,
        description,
        experience,
        profile_photo,
      });
      if (response?.data?.error) {
        renderWarningToast(response?.data?.error);
      } else {
        if (response?.data) {
          dispatch(auth());
          dispatch(setUser(response.data));
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
    <TabScreen>
      <TabScreenContainer
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <A.BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </A.BackButton>
      </TabScreenContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Role">
          {props => (
            <SignUpRole
              {...props}
              role={role}
              setRole={setRole}
              goToDetails={goToDetails}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Details_owner">
          {props => (
            <SignUpDetailsOwner
              {...props}
              role={role}
              price={price}
              age={age}
              setAge={setAge}
              setPrice={setPrice}
              setLocation={setLocation}
              isAgeModalVisible={isAgeModalVisible}
              setAgeModalVisible={setAgeModalVisible}
              setDescription={setDescription}
              goToAvatar={goToAvatar}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Details_walker">
          {props => (
            <SignUpDetailsWalker
              {...props}
              role={role}
              price={price}
              age={age}
              setAge={setAge}
              setPrice={setPrice}
              setLocation={setLocation}
              experience={experience}
              isAgeModalVisible={isAgeModalVisible}
              isExperienceModalVisible={isExperienceModalVisible}
              setExperienceModalVisible={setExperienceModalVisible}
              setAgeModalVisible={setAgeModalVisible}
              setDescription={setDescription}
              setExperience={setExperience}
              goToAvatar={goToAvatar}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Avatar">
          {props => (
            <SignUpAvatar
              {...props}
              profile_photo={profile_photo}
              setProfilePhoto={setProfilePhoto}
              goToFinish={goToFinish}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Finish">
          {props => (
            <SignUpMain
              {...props}
              handleSignUp={handleSignUp}
              isPasswordHidden={isPasswordHidden}
              switchPasswordVidibility={switchPasswordVidibility}
              setFullname={setFullname}
              setEmail={setEmail}
              setPassword={setPassword}
              isLoading={isLoading}
              fullname={fullname}
              email={email}
              password={password}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
      {!isKeyboardVisible && (
        <TabScreenContainer
          style={{
            marginTop: 20,
          }}>
          <A.AuthFooterText>
            By signing in, I agree with Terms of Use and Privacy Policy
          </A.AuthFooterText>
        </TabScreenContainer>
      )}
    </TabScreen>
  );
}
