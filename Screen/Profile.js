/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PracticeProvider, PracticeContext} from '../Global/PracticeContext';
import ChooseTime from './ChooseTime';
import Confirm from './Confirm';
import {useRoute} from '@react-navigation/native';
const Profile = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const title = route.params.title;
  const text = route.params.text;
  const date = route.params.date;
  const IDDoctor = route.params.IDDoctor;
  useEffect(() => {
    getListDoctor();
    return () => {};
  }, []);
  let getListDoctor = () => {
    const apiURL = `http://10.0.2.2:8080/api/doctor/${IDDoctor}`;
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        console.log('data', data);
        setData(resJson.data[0]);
        setTimeout(() => setIsLoading(false), 1000);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };
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
        onPress={() => navigation.navigate('AppHome')}
      />
      <View style={styles.containerProfile}>
        <Text style={styles.text}>Name: {data?.NameDoctor}</Text>
        <Text style={styles.text}>Home address: {data?.HomeAddress}</Text>
        <Text style={styles.text}>Email: {data?.Email}</Text>
        <Text style={styles.text}>Phone: {data?.Phone}</Text>
        <Text>{title}</Text>
        <Text>{text}</Text>
        <Text>
          {date.day} / {date.month} / {date.year}
        </Text>
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
    height: 300,
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
});
