import React from 'react';
import {View, Text, Pressable, ScrollView, Dimensions} from 'react-native';
import * as W from './index.styled';
import CloseIcon from '../../icons/close.icon';
import VerifiedIcon from '../../icons/verified.icon';
import {HDivider, VDivider} from '../../common.styled';
import StarIcon from './../../icons/star.icon';
import {Stack} from 'native-base';
import OrangeButton from './../../components/OrangeButton';
import Carousel from 'react-native-snap-carousel';
import Review from './../../components/Review';

export default function WalkerLayout({
  walker,
  closeWalker,
  activeTab,
  setActiveTab,
}) {
  return (
    <>
      <W.BackgroundImage source={{uri: walker.profile_photo}}>
        <W.WalkerHeader>
          <W.CloseWalker onPress={closeWalker}>
            <CloseIcon />
          </W.CloseWalker>
          <W.PaymentBadge>
            <W.PaymentBadgeText>
              {walker?.walker_info?.verified ? 'Verified' : 'Unverified'}
            </W.PaymentBadgeText>
            {walker?.walker_info?.verified && <VerifiedIcon />}
          </W.PaymentBadge>
        </W.WalkerHeader>
      </W.BackgroundImage>
      <W.WalkerInfoContainer>
        <W.WalkerName>{walker.fullname}</W.WalkerName>
        <W.WalkerInfoRow>
          <W.WalkerInfoRowView>
            <W.WalkerInfoRowValue>
              {walker?.walker_info?.price}$
            </W.WalkerInfoRowValue>
            <W.WalkerInfoRowText>/hr</W.WalkerInfoRowText>
          </W.WalkerInfoRowView>
          <VDivider />
          <W.WalkerInfoRowView>
            <W.WalkerInfoRowValue divided>
              {walker?.distance}
            </W.WalkerInfoRowValue>
            <W.WalkerInfoRowText>km</W.WalkerInfoRowText>
          </W.WalkerInfoRowView>
          <VDivider />
          <W.WalkerInfoRowView centered>
            <W.WalkerInfoRowValue divided>
              {walker?.walker_info?.rate}
            </W.WalkerInfoRowValue>
            <StarIcon color="#A1A1A1" />
          </W.WalkerInfoRowView>
          <VDivider />
          <W.WalkerInfoRowView>
            <W.WalkerInfoRowValue divided>
              {walker?.walker_info?.walks}
            </W.WalkerInfoRowValue>
            <W.WalkerInfoRowText>walks</W.WalkerInfoRowText>
          </W.WalkerInfoRowView>
        </W.WalkerInfoRow>
        <HDivider m={20} />
        <Stack space="21px" direction="row" mb="20px">
          <Pressable
            onPress={() => setActiveTab('About')}
            style={{flexGrow: 1}}>
            <W.TabButton active={activeTab === 'About'}>About</W.TabButton>
          </Pressable>
          <Pressable
            onPress={() => setActiveTab('Location')}
            style={{flexGrow: 1}}>
            <W.TabButton active={activeTab === 'Location'}>
              Location
            </W.TabButton>
          </Pressable>
          <Pressable
            onPress={() => setActiveTab('Reviews')}
            style={{flexGrow: 1}}>
            <W.TabButton active={activeTab === 'Reviews'}>Reviews</W.TabButton>
          </Pressable>
        </Stack>
        <ScrollView>
          {activeTab === 'About' && tabAbout(walker)}
          {activeTab === 'Location' && tabLocation(walker)}
          {activeTab === 'Reviews' && tabReviews(walker?.walker_info?.reviews)}
        </ScrollView>
        <OrangeButton>Check schedule</OrangeButton>
      </W.WalkerInfoContainer>
    </>
  );
}

const tabAbout = walker => (
  <>
    <Stack space="45px" direction="row" mb="20px">
      <View>
        <W.AboutInfoTitle>Age</W.AboutInfoTitle>
        <W.AboutInfoValue>{walker?.walker_info?.age} years</W.AboutInfoValue>
      </View>
      <View>
        <W.AboutInfoTitle>Experience</W.AboutInfoTitle>
        <W.AboutInfoValue>{walker?.walker_info?.experience}</W.AboutInfoValue>
      </View>
    </Stack>
    <W.AboutInfoDescription numberOfLines={5}>
      {walker?.description}
    </W.AboutInfoDescription>
  </>
);

const tabLocation = walker => (
  <>
    <View>
      <W.AboutInfoTitle>Location</W.AboutInfoTitle>
      <W.AboutInfoValue>{walker?.location}</W.AboutInfoValue>
    </View>
  </>
);

const tabReviews = reviews => {
  const windowWidth = Dimensions.get('window').width;
  const renderItem = ({item}) => {
    console.log(item);
    return <Review review={item} />;
  };
  return (
    <>
      <Carousel
        data={reviews}
        renderItem={renderItem}
        sliderWidth={windowWidth - 30}
        itemWidth={windowWidth - 30}
        layout={'stack'}
        layoutCardOffset={10}
        loop={true}
      />
    </>
  );
};
