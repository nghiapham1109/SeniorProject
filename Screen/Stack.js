/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useMemo, useContext} from 'react';
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
import Account from './Account';
import Result from './Result';
import UpdateInformation from './UpdateInformation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthProvider, AuthContext} from '../Global/context';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  const context = useContext(AuthContext);
  const token = context.token;
  console.log('stack', token);
  //
  if (!token) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Confirm" component={Confirm} />
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailCountry" component={DetailCountry} />
        <Stack.Screen name="DetailDisease" component={DetailDisease} />
        <Stack.Screen name="Disease" component={Disease} />
        <Stack.Screen name="DetailNew" component={DetailNew} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="UpdateInformation" component={UpdateInformation} />
      </Stack.Navigator>
    );
  }
};

export default MyStack;

const styles = StyleSheet.create({});

// return (
//   <Stack.Navigator screenOptions={{headerShown: false}}>
//     <Stack.Screen name="Intro" component={IntroScreen} />
//     <Stack.Screen name="Login" component={Login} />
//     <Stack.Screen
//       name="AppHome"
//       component={Navigation}
//       options={{headerShown: false}}
//     />
//     <Stack.Screen name="Appointment" component={Appointment} />
//     <Stack.Screen name="Booking" component={Booking} />
//     <Stack.Screen name="CovidScreen" component={CovidScreen} />
//     <Stack.Screen name="ChooseTime" component={ChooseTime} />
//     <Stack.Screen name="Profile" component={Profile} />
//     <Stack.Screen name="Confirm" component={Confirm} />
//     <Stack.Screen name="New" component={New} />
//     <Stack.Screen name="HomeScreen" component={HomeScreen} />
//     <Stack.Screen name="Register" component={Register} />
//     <Stack.Screen name="DetailCountry" component={DetailCountry} />
//     <Stack.Screen name="DetailDisease" component={DetailDisease} />
//     <Stack.Screen name="Disease" component={Disease} />
//     <Stack.Screen name="DetailNew" component={DetailNew} />
//   </Stack.Navigator>
// );
