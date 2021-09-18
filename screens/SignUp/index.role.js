import React from 'react';
import {TouchableOpacity} from 'react-native';
import * as A from '../auth.styled';
import OwnerIcon from '../../Icons/OwnerIcon';
import WalkerIcon from './../../Icons/WalkerIcon';
import {RadioButtons} from 'react-native-radio-buttons';
import LinearGradient from 'react-native-linear-gradient';

const SignUpRole = ({role, setRole, goToDetails}) => {
  function renderOption(option, selected, onSelect, index) {
    const textColor = selected ? '#fff' : '#2b2b2b';
    const mainColor = selected ? '#fb724c' : '#f7f7f7';
    return (
      <A.RadioWrapper c={mainColor} key={index} onPress={onSelect}>
        {option === 'owner' ? (
          <OwnerIcon color={textColor} />
        ) : (
          <WalkerIcon color={textColor} />
        )}
        <A.RadioButtonText c={textColor}>{option}</A.RadioButtonText>
      </A.RadioWrapper>
    );
  }

  function renderContainer(optionNodes) {
    return <A.RadioButtonsContainer>{optionNodes}</A.RadioButtonsContainer>;
  }

  return (
    <A.ScreenView>
      <A.AuthHeader>
        <A.AuthTitle>Let’s start here</A.AuthTitle>
        <A.AuthSubtitle>Select your account type</A.AuthSubtitle>
      </A.AuthHeader>
      <RadioButtons
        options={['walker', 'owner']}
        onSelection={setRole}
        selectedOption={role}
        renderOption={renderOption}
        renderContainer={renderContainer}
      />
      <TouchableOpacity
        style={{
          marginBottom: 30,
        }}
        onPress={goToDetails}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={['#FE904B', '#FB724C']}
          style={{
            borderRadius: 14,
            paddingVertical: 16,
          }}>
          <A.AuthButtonText>next</A.AuthButtonText>
        </LinearGradient>
      </TouchableOpacity>
    </A.ScreenView>
  );
};

export default SignUpRole;
