import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyStack from './Screen/Stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider, AuthContext} from './Global/context';
const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
