/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {Button} from 'react-native-elements';
import Home from './HomeScreen';
const IntroScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <View>
        <LottieView
          style={styles.healthtap}
          source={require('../lottie/1631-healthtap-spinner.json')}
          autoPlay
        />
      </View>
      <View>
        <Text style={styles.header}>My health</Text>
      </View>
      <View>
        <Text style={styles.title}>
          A dictionary and smart application for your health
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AppHome')}>
          <Text
            style={{
              fontSize: 24,
              color: 'white',
              lineHeight: 45,
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 10,
              fontFamily: 'Poppins',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroScreen;

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
  healthtap: {
    position: 'absolute',
    width: 250,
    height: 250,
    left: 42,
    top: 90,
  },
  header: {
    position: 'absolute',
    width: 155,
    height: 60,
    left: 144,
    top: 400,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 45,
    color: 'black',
  },
  title: {
    position: 'absolute',
    width: 341,
    height: 24,
    left: 55,
    top: 460,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 24,
    color: 'black',
  },
  button: {
    position: 'absolute',
    width: 286,
    height: 70,
    left: 65,
    top: 550,
    backgroundColor: '#1FCAF0',
    borderRadius: 10,
  },
});
