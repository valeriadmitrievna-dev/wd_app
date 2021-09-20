import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import GetLocation from 'react-native-get-location';

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
import Settings from './screens/Settings/index';
import Notifications from './screens/Notifications/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Root = ({notifications, new_messages}) => {
  return (
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
        tabBarButton: props => (
          <TabBarButton
            {...props}
            new_messages={new_messages}
            notifications={notifications}
          />
        ),
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Moments" component={Moments} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function Application() {
  const {isAuth, notifications, new_messages} = useSelector(
    state => state.user,
  );

  useEffect(() => {
    // GetLocation.getCurrentPosition({
    //   enableHighAccuracy: true,
    //   timeout: 15000,
    // })
    //   .then(location => {
    //     console.log(location);
    //   })
    //   .catch(error => {
    //     const {code, message} = error;
    //     console.warn(code);
    //     console.log(message);
    //   });
  }, []);

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
            <Stack.Screen name="Root">
              {props => (
                <Root
                  {...props}
                  notifications={notifications}
                  new_messages={new_messages}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Walker" component={Walker} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Notifications">
              {props => (
                <Notifications {...props} notifications={notifications} />
              )}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
