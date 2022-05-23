/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>Register</Text>
      <Ionicons
        name="arrow-back-outline"
        size={30}
        style={{left: 10, top: 25}}
        onPress={() => navigation.navigate('Intro')}
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        autoCapitalize="none"
        onChangeText={val => this.onChangeText('username', val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Day of Birth"
        autoCapitalize="none"
        onChangeText={val => this.onChangeText('email', val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        autoCapitalize="none"
        onChangeText={val => this.onChangeText('phone_number', val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        autoCapitalize="none"
        onChangeText={val => this.onChangeText('phone_number', val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={val => this.onChangeText('phone_number', val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={val => this.onChangeText('password', val)}
      />
      <TouchableOpacity
        style={styles.register}
        onPress={() => navigation.navigate('AppHome')}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            color: 'white',
            textAlign: 'center',
            padding: 10,
          }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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
    left: 135,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
    color: 'black',
  },
  input: {
    width: 389,
    height: 55,
    top: 40,
    backgroundColor: '#F8F0F0',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  register: {
    width: 389,
    height: 55,
    top: 40,
    backgroundColor: '#4FC3F7',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
});
