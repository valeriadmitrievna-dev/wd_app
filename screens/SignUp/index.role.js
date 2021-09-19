import React from 'react';
import * as A from '../auth.styled';
import OwnerIcon from '../../icons/owner.icon';
import WalkerIcon from '../../icons/walker.icon';
import {RadioButtons} from 'react-native-radio-buttons';
import OrangeButton from './../../components/OrangeButton';

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
      <OrangeButton
        style={{
          marginBottom: 30,
        }}
        onPress={goToDetails}>
        next
      </OrangeButton>
    </A.ScreenView>
  );
};

export default SignUpRole;
