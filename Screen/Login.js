/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
//
import client from '../api/client';
import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//
//
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //
  axios.defaults.withCredentials = true;
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = () => {
    axios
      .post('http://10.0.2.2:8080/api/patient/login', {
        Email: email,
        Pw: password,
      })
      .then(response => {
        if (!response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data.token);
          AsyncStorage.setItem('storeToken', response.data.token);
        }
        console.log(response.data.token);
      });
  };
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>Login</Text>
      <View>
        <LottieView
          style={styles.introduce}
          source={require('../lottie/75532-login-intruction-popup.json')}
          autoPlay
        />
      </View>
      <View style={styles.containerLogin}>
        <TextInput
          style={styles.textUsername}
          onChangeText={value => setEmail(value)}
          value={email}
          placeholder="Email..."
        />
        <TextInput
          style={styles.textPassword}
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
          value={password}
          placeholder="Password..."
        />
        {/* onPress={() => navigation.navigate('AppHome') */}
        {/*onPress={() => navigation.navigate('AppHome')} */}
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => handleLogin()}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              fontFamily: 'Poppins',
              color: 'white',
              textAlign: 'center',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            left: 45,
            top: 220,
            fontSize: 15,
            fontWeight: 'normal',
            fontFamily: 'Poppins',
            color: 'black',
          }}>
          If you don't have an account,
        </Text>
        <Text
          onPress={() => navigation.navigate('Register')}
          style={{
            left: 240,
            top: 200,
            fontSize: 15,
            fontWeight: 'normal',
            fontFamily: 'Poppins',
            color: 'blue',
          }}>
          register here
        </Text>
      </View>
    </View>
  );
};

export default Login;

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
  health: {
    position: 'absolute',
    width: 250,
    height: 250,
    left: 42,
    top: 90,
  },
  introduce: {
    position: 'absolute',
    width: 250,
    height: 250,
    left: 42,
    top: 40,
  },
  header: {
    position: 'absolute',
    padding: 20,
    left: 145,
    top: 70,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 38,
    color: 'black',
  },
  containerLogin: {
    position: 'absolute',
    width: 380,
    height: 260,
    margin: 15,
    top: 280,
    backgroundColor: '#F8F0F0',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
    borderRadius: 10,
  },
  textUsername: {
    position: 'absolute',
    width: 360,
    height: 50,
    top: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  textPassword: {
    position: 'absolute',
    width: 360,
    height: 50,
    top: 80,
    padding: 10,
    margin: 10,
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  buttonLogin: {
    position: 'absolute',
    width: 360,
    top: 150,
    padding: 10,
    margin: 10,
    backgroundColor: '#4FC3F7',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
});
