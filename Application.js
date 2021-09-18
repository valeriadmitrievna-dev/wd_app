import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {StatusBar, Text} from 'react-native';

// screens
import Home from './screens/Home/index';
import Moments from './screens/Moments/index';
import Chat from './screens/Chat/index';
import Profile from './screens/Profile/index';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn/index';
import Walker from './screens/Walker/index';
import Index from './screens/Index/index';

import TabBarButton from './components/TabBarButton';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Root = () => (
  <Tab.Navigator
    screenOptions={() => ({
      headerShown: false,
      tabBarStyle: {
        elevation: 0,
        shadowOpacity: 0,
        backgroundColor: '#fff',
        borderTopColor: '#fff',
        height: 75,
      },
      tabBarButton: props => <TabBarButton props={props} />,
    })}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Moments" component={Moments} />
    <Tab.Screen name="Chat" component={Chat} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default function Application() {
  const {isAuth} = useSelector(state => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        {!isAuth && (
          <>
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </>
        )}
        {isAuth && (
          <>
            <Stack.Screen name="Root" component={Root} />
            <Stack.Screen name="Walker" component={Walker} />
          </>
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
