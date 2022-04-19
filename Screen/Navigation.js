/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Screen
import IntroScreen from './IntroScreen';
import HomeScreen from './HomeScreen';
import Disease from './Disease';
import Predict from './Predict';
import Profile from './Profile';
import CovidScreen from './CovidScreen';
//Screen name
const homeScreen = 'Home';
const diseaseScreen = 'Disease';
const predictScreen = 'Predict';
const profileScreen = 'Profile';
const covidScreen = 'Covid-19';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import React from 'react';

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeScreen}
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          //bottom: 20,
          //left: 50,
          elevation: 0,
          backgroundColor: 'white',
          //borderRadius: 15,
          height: 70,
          //top: 680,
          //width: 320,
          ...styles.Shadow,
        },
      }}>
      <Tab.Screen
        name={homeScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="home" size={45} />
          ),
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={diseaseScreen}
        options={{
          tabBarIcon: () => (
            <AntDesign name="profile" size={45} />
          ),
          headerShown: false,
        }}
        component={Disease}
      />
      <Tab.Screen
        name={predictScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" size={45} />
          ),
          headerShown: false,
        }}
        component={Predict}
      />
    </Tab.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  Shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconHome: {
    position: 'absolute',
    // width: 100,
    // height: 70,
    // marginTop: 5,
    // left: -5,
  },
});
