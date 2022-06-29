/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../Global/context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <MaterialCommunityIcons
      name="doctor"
      size={35}
      style={{
        margin: 5,
        padding: 5,
        color: '#2196f3',
        fontSize: 20,
      }}>
      <Text
        style={{
          color: 'black',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
        }}>
        {item.NameDoctor}
      </Text>
    </MaterialCommunityIcons>
    <MaterialCommunityIcons
      name="calendar"
      size={25}
      style={{
        margin: 5,
        padding: 5,
        color: 'black',
        fontSize: 20,
      }}>
      <Text
        style={{
          color: 'black',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
        }}>
        {item.DayBooking.split('-').reverse().join('-')}
      </Text>
    </MaterialCommunityIcons>
    <MaterialCommunityIcons
      name="clock-time-two-outline"
      size={25}
      style={{
        margin: 5,
        padding: 5,
        color: 'black',
        fontSize: 20,
      }}>
      <Text
        style={{
          color: 'black',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
        }}>
        {item.TimeBooking}
      </Text>
    </MaterialCommunityIcons>
    <MaterialCommunityIcons
      name="note-text-outline"
      size={25}
      style={{
        margin: 5,
        padding: 5,
        color: '#ff77a9',
        fontSize: 20,
      }}>
      <Text
        style={{
          color: 'black',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
        }}>
        {item.Note}
      </Text>
    </MaterialCommunityIcons>
  </TouchableOpacity>
);
//
const Profile = ({navigation}) => {
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //
  const context = useContext(AuthContext);
  const setToken = context.setToken;
  const Token = context.token;
  const decode = jwt_decode(Token);
  const IDPatient = decode.result.IDPatient;
  console.log('Profile', IDPatient);
  //
  useEffect(() => {
    fetch(`http://10.0.2.2:8080/api/schedule/${IDPatient}`, {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setData(json.data);
        console.log('Profile', json.data);
      })
      .catch(error => {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
  }, []);
  //
  const renderItem = ({item}) => {
    const color = item.IDDoctor === selectedId ? 'black' : 'black';
    return <Item item={item} textColor={{color}} />;
  };
  //
  if (data?.length !== 0 && isLoading === false) {
    return (
      <View>
        <View style={styles.eclipse1} />
        <View style={styles.eclipse2} />
        <View style={styles.eclipse3} />
        <View style={styles.eclipse4} />
        <Text style={styles.header}>My Profile</Text>
        <Ionicons
          name="arrow-back-outline"
          size={30}
          style={{left: 10, top: 25}}
          //
          onPress={() => navigation.navigate('AppHome')}
        />
        <View style={styles.containerProfile}>
          <FlatList
            nestedScrollEnabled
            data={data}
            renderItem={renderItem}
            extraData={selectedId}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
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
    left: 120,
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
    top: 50,
    width: 200,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
  textInput: {
    position: 'absolute',
    width: 320,
    height: 41,
    left: 47,
    top: 270,
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  containerProfile: {
    position: 'absolute',
    width: 389,
    height: 680,
    top: 60,
    padding: 10,
    margin: 10,
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  item: {
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
    padding: 10,
    margin: 5,
    marginVertical: 8,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    padding: 5,
    lineHeight: 20,
    color: 'black',
  },
  buttonLogout: {
    position: 'absolute',
    width: 360,
    top: 500,
    padding: 10,
    margin: 10,
    backgroundColor: '#4FC3F7',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
    left: 15,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 20,
    alignItems: 'center',
    flex: 1,
  },
});
