import React from 'react';
import {TabScreen, TabScreenContainer} from '../../common.styled';
import * as H from './index.styled';
import LocationIcon from './../../Icons/LocationIcon';
import {Pressable, ScrollView} from 'react-native';
import WalkerCard from '../../components/WalkerCard';
import {HDivider} from './../../common.styled';

export default function HomeLayout({walkers, navigation}) {
  return (
    <TabScreen>
      <ScrollView>
        <TabScreenContainer>
          <H.HomeHeader>
            <H.HomeHeaderTitle>Home</H.HomeHeaderTitle>
            <H.HomeHeaderText>Explore dog walkers</H.HomeHeaderText>
          </H.HomeHeader>
          <H.InputContainer>
            <LocationIcon />
            <H.Input placeholder="Search" />
          </H.InputContainer>
          {walkers.filter(walker => walker.distance <= 10).length > 0 && (
            <>
              <H.HomeCategoryContainer>
                <H.HomeCategoryTitle>Near you</H.HomeCategoryTitle>
                <Pressable>
                  <H.ViewAllButton>View All</H.ViewAllButton>
                </Pressable>
              </H.HomeCategoryContainer>
              <H.HomeHorizontalContainer horizontal={true}>
                {walkers
                  .filter(walker => walker.distance <= 10)
                  .map((walker, id) => (
                    <WalkerCard
                      margin={
                        id ===
                        walkers.filter(walker => walker.distance <= 10).length -
                          1
                          ? 0
                          : 30
                      }
                      walker={walker}
                      key={id}
                      navigation={navigation}
                    />
                  ))}
              </H.HomeHorizontalContainer>
              <HDivider></HDivider>
            </>
          )}
          <H.HomeCategoryContainer>
            <H.HomeCategoryTitle>Suggested</H.HomeCategoryTitle>
            <Pressable>
              <H.ViewAllButton>View All</H.ViewAllButton>
            </Pressable>
          </H.HomeCategoryContainer>
          <H.HomeHorizontalContainer horizontal={true}>
            {walkers
              .filter(walker => walker?.walker_info?.rate >= 4)
              .map((walker, id) => (
                <WalkerCard
                  margin={
                    id ===
                    walkers.filter(walker => walker?.walker_info?.rate >= 4)
                      .length -
                      1
                      ? 0
                      : 30
                  }
                  walker={walker}
                  navigation={navigation}
                  key={id}
                />
              ))}
          </H.HomeHorizontalContainer>
        </TabScreenContainer>
      </ScrollView>
    </TabScreen>
  );
}
