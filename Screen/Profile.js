/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Profile = () => {
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>My Profile</Text>
      <View style={{alignItems: 'center'}}>
        <View style={styles.image}>
          <Image
            source={require('../asset/picture.jpg')}
            style={styles.profileImage}
            resizeMode="center"
          />
        </View>
      </View>
      <View>
        <TextInput style={styles.textInput} placeholder="My result..." />
      </View>
      <View style={styles.containerProfile}></View>
      <View>
        <LottieView
          style={styles.footer}
          source={require('../lottie/43749-mask-wear-lt-gray.json')}
          autoPlay
        />
        <Text style={[styles.footerText]}>Wear a mask to prevent COVID-19</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  eclipse1: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: -20,
    top: -100,
    borderRadius: 100,
    backgroundColor: '#7BDFC7',
  },
  eclipse2: {
    position: 'absolute',
    width: 200,
    height: 200,
    left: -130,
    top: 20,
    borderRadius: 100,
    backgroundColor: '#BFF1E5',
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
    width: 296,
    height: 35,
    left: 140,
    top: 70,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
    color: 'black',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  profileImage: {
    top: 120,
    width: 150,
    height: 150,
    borderRadius: 50,
    overflow: 'hidden',
  },
  textInput: {
    position: 'absolute',
    width: 320,
    height: 41,
    left: 47,
    top: 300,
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  containerProfile: {
    position: 'absolute',
    width: 317,
    height: 200,
    left: 50,
    top: 370,
    backgroundColor: '#FEFFFF',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  footer: {
    position: 'absolute',
    width: 64,
    height: 50,
    left: 30,
    top: 345,
  },
  footerText: {
    position: 'absolute',
    width: 263,
    height: 23,
    left: 120,
    top: 700,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 22,
  },
});
