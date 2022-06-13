/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../Global/context';
import jwt_decode from 'jwt-decode';
const Account = ({navigation}) => {
  const context = useContext(AuthContext);
  const setToken = context.setToken;
  const Token = context.token;
  const decode = jwt_decode(Token);
  console.log('decode', decode);
  const deleteData = async () => {
    setToken(await AsyncStorage.removeItem('storeToken'));
    console.log('account', setToken);
  };

  //
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>About your information</Text>
      <View style={styles.containerAccount}>
        <TextInput placeholder="Name Patient" />
        <TextInput placeholder="Day Of Birth" />
        <TextInput placeholder="Sex" />
        <TextInput placeholder="Phone" />
        <TextInput placeholder="Home Address" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Password" />
      </View>

      <View>
        <TouchableOpacity style={styles.test}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              fontFamily: 'Poppins',
              color: 'white',
              textAlign: 'center',
            }}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonLogout}
          onPress={() => deleteData()}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              fontFamily: 'Poppins',
              color: 'white',
              textAlign: 'center',
            }}>
            Logout
          </Text>
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
  header: {
    position: 'absolute',
    padding: 20,
    left: 55,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
    color: 'black',
  },
  containerAccount: {
    position: 'absolute',
    width: 389,
    height: 400,
    top: 70,
    padding: 10,
    margin: 10,
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  buttonLogout: {
    position: 'absolute',
    width: 389,
    top: 550,
    padding: 10,
    margin: 10,
    backgroundColor: '#4FC3F7',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
    padding: 10,
    margin: 10,
  },
  test: {
    position: 'absolute',
    width: 389,
    top: 500,
    padding: 10,
    margin: 10,
    backgroundColor: '#4FC3F7',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
    padding: 10,
    margin: 10,
  },
});
