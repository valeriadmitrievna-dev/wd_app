import React from 'react';
import * as A from '../auth.styled';
import {Text} from 'react-native';
import {Slider, Modal, Button, Box} from 'native-base';
import DatePicker from 'react-native-modern-datepicker';
import OrangeButton from './../../components/OrangeButton';
import {
  differenceInYears,
  format,
  sub,
  formatDistanceStrict,
  startOfDay,
} from 'date-fns';

const modal_options = {
  backgroundColor: '#fff',
  textHeaderColor: '#2b2b2b',
  textDefaultColor: '#2b2b2b',
  selectedTextColor: '#fff',
  mainColor: '#fb724c',
  textSecondaryColor: '#000',
  borderColor: 'rgba(122, 146, 165, 0.1)',
};

export default function SignUpDetailsWalker({
  age,
  price,
  setAge,
  setPrice,
  setLocation,
  experience,
  setDescription,
  isAgeModalVisible,
  isExperienceModalVisible,
  setExperienceModalVisible,
  setAgeModalVisible,
  goToAvatar,
  setExperience,
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
              options={modal_options}
              mode="calendar"
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
      <Modal
        avoidKeyboard
        isOpen={isExperienceModalVisible}
        onClose={() => setExperienceModalVisible(false)}
        padding={0}>
        <Modal.Content maxWidth="90%" padding={0} bg="#fff">
          <Modal.Body padding={0}>
            <DatePicker
              options={modal_options}
              current={format(new Date(), 'yyyy-MM-dd')}
              selected={format(new Date(), 'yyyy-MM-dd')}
              mode="calendar"
              style={{borderRadius: 10}}
              onDateChange={d => {
                setExperience(
                  formatDistanceStrict(
                    startOfDay(new Date(d)),
                    startOfDay(new Date()),
                  ).replace('0 seconds', 'without experience'),
                );
                setExperienceModalVisible(false);
              }}
              minimumDate={format(
                sub(new Date(), {
                  years: age - 10 || 80,
                }),
                'yyyy-MM-dd',
              )}
              maximumDate={format(new Date(), 'yyyy-MM-dd')}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <A.AuthHeader>
        <A.AuthTitle>Details</A.AuthTitle>
        <A.AuthSubtitle>Fill in your walker details</A.AuthSubtitle>
      </A.AuthHeader>
      <Box mb="20px">
        <A.InputContainer style={{marginBottom: 1}}>
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
          <A.InputBigLabel>Price</A.InputBigLabel>
          <A.InputBigValue>${price}/h</A.InputBigValue>
        </A.InputHeader>
        <Slider
          defaultValue={price * 10}
          value={price * 10}
          colorScheme="orange"
          minValue={5}
          maxValue={100}
          onChange={v => setPrice(v / 10)}>
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </A.TransparentInputContainer>
      <A.TransparentInputContainer>
        <A.InputHeader>
          <A.InputBigLabel>Age</A.InputBigLabel>
          <A.InputBigValue>{age} years</A.InputBigValue>
        </A.InputHeader>
        <Button
          mt={2}
          bg="#e5e5e5"
          borderRadius={10}
          _text={{
            fontSize: 17,
            lineHeight: '24px',
            fontFamily: 'Poppins-SemiBold',
            color: '#555',
          }}
          onPress={() => setAgeModalVisible(true)}>
          Select birth date
        </Button>
      </A.TransparentInputContainer>
      <A.TransparentInputContainer>
        <A.InputHeader>
          <A.InputBigLabel>Experience</A.InputBigLabel>
          <A.InputBigValue>{experience}</A.InputBigValue>
        </A.InputHeader>
        <Button
          mt={2}
          bg="#e5e5e5"
          borderRadius={10}
          _text={{
            fontSize: 17,
            lineHeight: '24px',
            fontFamily: 'Poppins-SemiBold',
            color: '#555',
          }}
          onPress={() => setExperienceModalVisible(true)}>
          Select start of walker experience
        </Button>
      </A.TransparentInputContainer>
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
