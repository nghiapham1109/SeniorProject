/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LottieView from 'lottie-react-native';
//Screen
import IntroScreen from './IntroScreen';
import HomeScreen from './HomeScreen';
import Disease from './Disease';
import Predict from './Predict';
import Profile from './Profile';
//Screen name
const homeScreen = 'Home';
const diseaseScreen = 'Disease';
const predictScreen = 'Predict';
const profileScreen = 'Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import React from 'react';

const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeScreen}
      // screenOptions={(route) => ({
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;
      //     let rn = route.name;
      //     if (rn === homeScreen) {
      //       iconName = focused ? 'home' : 'home-outline';
      //     } else if (rn === diseaseScreen) {
      //       iconName = focused ? 'list' : 'list-outline';
      //     } else if (rn === predictScreen) {
      //       iconName = focused ? 'settings' : 'settings-outline';
      //     }
      //     return  <LottieView style={styles.iconHome}
      //     source={require('../lottie/56502-home-location.json')}
      //     autoPlay/>;
      //   },
      // })}
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 50,
          elevation: 0,
          backgroundColor: '#73E4FD',
          borderRadius: 15,
          height: 70,
          top: 600,
          width: 320,
          ...styles.Shadow,
        },
      }}>
      <Tab.Screen
        name={homeScreen}
        options={{
          tabBarIcon: () => (
            <LottieView
              style={styles.iconHome}
              source={require('../lottie/56502-home-location.json')}
              autoPlay
            />
          ),
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={diseaseScreen}
        options={{
          tabBarIcon: () => (
            <LottieView
              style={styles.iconDisease}
              source={require('../lottie/21910-category-icon-animation.json')}
              autoPlay
            />
          ),
          headerShown: false,
        }}
        component={Disease}
      />
      <Tab.Screen
        name={predictScreen}
        options={{
          tabBarIcon: () => (
            <LottieView
              style={styles.iconPredict}
              source={require('../lottie/94901-disease.json')}
              autoPlay
            />
          ),
          headerShown: false,
        }}
        component={Predict}
      />
      <Tab.Screen
        name={profileScreen}
        options={{
          tabBarIcon: () => (
            <LottieView
              style={styles.iconPredict}
              source={require('../lottie/88222-id-card-profile-card.json')}
              autoPlay
            />
          ),
          headerShown: false,
        }}
        component={Profile}
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
