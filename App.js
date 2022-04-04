import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyStack from './Screen/Stack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
