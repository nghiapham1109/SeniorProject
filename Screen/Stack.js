/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import IntroScreen from './IntroScreen';
import Navigation from './Navigation';
import Appointment from './Appointment';
import Booking from './Booking';
import CovidScreen from './CovidScreen';
import ChooseTime from './ChooseTime';
import Profile from './Profile';
import Confirm from './Confirm';
import New from './New';
import Login from './Login';
import Register from './Register';
import DetailCountry from './DetailCountry';
import DetailDisease from './DetailDisease';
import Disease from './Disease';
import DetailNew from './DetailNew';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const MyStack = () => {
  // const [token, setToken] = useState();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen
        name="AppHome"
        component={Navigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Appointment" component={Appointment} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="CovidScreen" component={CovidScreen} />
      <Stack.Screen name="ChooseTime" component={ChooseTime} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Confirm" component={Confirm} />
      <Stack.Screen name="New" component={New} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="DetailCountry" component={DetailCountry} />
      <Stack.Screen name="DetailDisease" component={DetailDisease} />
      <Stack.Screen name="Disease" component={Disease} />
      <Stack.Screen name="DetailNew" component={DetailNew} />
    </Stack.Navigator>
  );
};

export default MyStack;

const styles = StyleSheet.create({});
