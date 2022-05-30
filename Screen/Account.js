/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = ({navigation}) => {
  const deleteData = async () => {
    await AsyncStorage.removeItem('storeToken');
  };
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <View>
        <TouchableOpacity onPress={() => deleteData()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  eclipse1: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: -20,
    top: -100,
    borderRadius: 100,
    backgroundColor: '#4FC3F7',
  },
  eclipse2: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: -130,
    top: 20,
    borderRadius: 100,
    backgroundColor: '#81D4FA',
  },
  eclipse3: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: 290,
    top: 650,
    borderRadius: 100,
    backgroundColor: '#7BDFC7',
  },
  eclipse4: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: 175,
    top: 700,
    borderRadius: 100,
    backgroundColor: '#BFF1E5',
  },
});
