/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const MyStack = () => {
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
    </Stack.Navigator>
  );
};

export default MyStack;

const styles = StyleSheet.create({});
