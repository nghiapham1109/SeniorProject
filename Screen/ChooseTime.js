/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChooseTime = ({navigation}) => {
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>Choose time</Text>
      <Ionicons
        name="arrow-back-outline"
        size={30}
        style={{left: 10, top: 25}}
        onPress={() => navigation.navigate('Appointment')}
      />
      <View style={styles.listTime}>
        <Text style={styles.title}>Infomation about time</Text>
        <View style={styles.blue}>
          <Text style={styles.emptyHours}>Empty hours</Text>
        </View>
        <View style={styles.gray}>
          <Text style={styles.busyHours}>Busy hours</Text>
        </View>
        <Text style={styles.morning}>Morning</Text>
        <View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: 110,
              height: 40,
              top: 190,
              left: 15,
              backgroundColor: '#A6E9F2',
              borderRadius: 10,
            }}>
            <Text
              style={{
                justifyContent: 'center',
                // alignItems: 'center',
                textAlign: 'center',
                padding: 10,
              }}>
              8:00 - 9:00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: 110,
              height: 40,
              top: 190,
              left: 135,
              backgroundColor: '#A6E9F2',
              borderRadius: 10,
            }}>
            <Text
              style={{
                justifyContent: 'center',
                // alignItems: 'center',
                textAlign: 'center',
                padding: 10,
              }}>
              9:15 - 10:00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: 110,
              height: 40,
              top: 190,
              left: 255,
              backgroundColor: '#A6E9F2',
              borderRadius: 10,
            }}>
            <Text
              style={{
                justifyContent: 'center',
                // alignItems: 'center',
                textAlign: 'center',
                padding: 10,
              }}>
              9:15 - 10:00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: 110,
              height: 40,
              top: 250,
              left: 15,
              backgroundColor: '#A6E9F2',
              borderRadius: 10,
            }}>
            <Text
              style={{
                justifyContent: 'center',
                // alignItems: 'center',
                textAlign: 'center',
                padding: 10,
              }}>
              10:15 - 11:15
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.afternoon}>Afternoon</Text>
        <View>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: 110,
              height: 40,
              top: 380,
              left: 15,
              backgroundColor: '#A6E9F2',
              borderRadius: 10,
            }}>
            <Text
              style={{
                justifyContent: 'center',
                // alignItems: 'center',
                textAlign: 'center',
                padding: 10,
              }}>
              13:00 - 14:00
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: 110,
              height: 40,
              top: 380,
              left: 135,
              backgroundColor: '#A6E9F2',
              borderRadius: 10,
            }}>
            <Text
              style={{
                justifyContent: 'center',
                // alignItems: 'center',
                textAlign: 'center',
                padding: 10,
              }}>
              14:15 - 15:15
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: 110,
              height: 40,
              top: 380,
              left: 255,
              backgroundColor: '#A6E9F2',
              borderRadius: 10,
            }}>
            <Text
              style={{
                justifyContent: 'center',
                // alignItems: 'center',
                textAlign: 'center',
                padding: 10,
              }}>
              15:30 - 16:30
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              width: 110,
              height: 40,
              top: 440,
              left: 15,
              backgroundColor: '#A6E9F2',
              borderRadius: 10,
            }}>
            <Text
              style={{
                justifyContent: 'center',
                // alignItems: 'center',
                textAlign: 'center',
                padding: 10,
              }}>
              16:45 - 17:45
            </Text>
          </TouchableOpacity>
        </View>
        <MaterialIcons
          onPress={() => navigation.navigate('Confirm')}
          name="navigate-next"
          size={50}
          style={{top: 525, left: 325}}
        />
      </View>
    </View>
  );
};

export default ChooseTime;

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
    left: 115,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
    color: 'black',
  },
  listTime: {
    position: 'absolute',
    width: 389,
    height: 650,
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
  title: {
    position: 'absolute',
    width: 300,
    height: 23,
    left: 25,
    top: 30,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 22,
    color: 'black',
    fontSize: 20,
  },
  blue: {
    position: 'absolute',
    width: 70,
    height: 40,
    left: 25,
    top: 80,
    backgroundColor: '#A6E9F2',
    borderRadius: 10,
  },
  gray: {
    position: 'absolute',
    width: 70,
    height: 40,
    right: 100,
    top: 80,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  emptyHours: {
    position: 'absolute',
    width: 100,
    height: 40,
    left: 80,
    top: 5,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 22,
    color: 'black',
  },
  busyHours: {
    position: 'absolute',
    width: 100,
    height: 40,
    left: 80,
    top: 5,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 22,
    color: 'black',
  },
  morning: {
    position: 'absolute',
    width: 79,
    height: 23,
    left: 25,
    top: 150,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 22,
    color: 'black',
  },
  afternoon: {
    position: 'absolute',
    width: 100,
    height: 23,
    left: 25,
    top: 335,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 22,
    color: 'black',
  },
});
