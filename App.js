import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyStack from './Screen/Stack';
import {NavigationContainer} from '@react-navigation/native';
import {PracticeProvider, PracticeContext} from './Global/PracticeContext';
const App = () => {
  return (
    <PracticeProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </PracticeProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
