import React from 'react';
import * as A from '../auth.styled';
import {Text} from 'react-native';
import {Modal, Box} from 'native-base';
import DatePicker from 'react-native-modern-datepicker';
import {differenceInYears, format, sub} from 'date-fns';
import OrangeButton from './../../components/OrangeButton';

export default function SignUpDetailsOwner({
  age,
  price,
  setAge,
  setPrice,
  setLocation,
  setDescription,
  isAgeModalVisible,
  setAgeModalVisible,
  goToAvatar,
}) {
  return (
    <A.ScreenView>
      <Modal
        avoidKeyboard
        isOpen={isAgeModalVisible}
        onClose={() => setAgeModalVisible(false)}
        padding={0}>
        <Modal.Content maxWidth="90%" padding={0} bg="#fff">
          <Modal.Body padding={0}>
            <DatePicker
              options={{
                backgroundColor: '#fff',
                textHeaderColor: '#2b2b2b',
                textDefaultColor: '#2b2b2b',
                selectedTextColor: '#fff',
                mainColor: '#fb724c',
                textSecondaryColor: '#000',
                borderColor: 'rgba(122, 146, 165, 0.1)',
              }}
              current="2020-07-13"
              selected="2020-07-23"
              mode="calendar"
              minuteInterval={30}
              style={{borderRadius: 10}}
              onDateChange={d => {
                setAge(differenceInYears(new Date(), new Date(d)));
                setAgeModalVisible(false);
              }}
              minimumDate={format(
                sub(new Date(), {
                  years: 80,
                }),
                'yyyy-MM-dd',
              )}
              maximumDate={format(
                sub(new Date(), {
                  years: 14,
                }),
                'yyyy-MM-dd',
              )}
              current={format(
                sub(new Date(), {
                  years: 14,
                }),
                'yyyy-MM-dd',
              )}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal>
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
