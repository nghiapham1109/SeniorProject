/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../Global/context';
import jwt_decode from 'jwt-decode';
import BackendAPI from '../api/HttpClient';
import Toast from 'react-native-simple-toast';
import Ionicons from 'react-native-vector-icons/Ionicons';
//
const Account = ({navigation}) => {
  const context = useContext(AuthContext);
  const setToken = context.setToken;
  const Token = context.token;
  const decode = jwt_decode(Token);
  const IDPatient = decode.result.IDPatient;
  //
  const [data, setData] = useState([]);
  const [namePatient, setNamePatient] = useState('');
  const [dayOfBirth, setDayOfBirth] = useState('');
  const [sex, setSex] = useState('');
  const [phone, setPhone] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [idAdmin, setIDAdmin] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  //
  const deleteData = async () => {
    setToken(await AsyncStorage.removeItem('storeToken'));
    console.log('account', setToken);
  };
  //
  useEffect(() => {
    fetch(`http://10.0.2.2:8080/api/patient/${IDPatient}`, {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setData(json.data);
        console.log('Account', json.data);
        setNamePatient(json.data[0].NamePatient);
        setDayOfBirth(json.data[0].DayOfBirth);
        setSex(json.data[0].Sex);
        setPhone(json.data[0].Phone);
        setHomeAddress(json.data[0].HomeAddress);
        setEmail(json.data[0].Email);
        setPassword(json.data[0].Pw);
        setIDAdmin(json.data[0].IDAdmin);
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
  const updatePatient = () => {
    //
    const DATA = {
      namePatient,
      dayOfBirth,
      sex,
      phone,
      homeAddress,
      email,
      password,
    };
    //
    BackendAPI.put(`/api/patient/${IDPatient}`, DATA, {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    })
      .then(json => {
        console.log(json);
        Toast.showWithGravity(
          'Update information success!',
          Toast.LONG,
          Toast.BOTTOM,
        );
      })
      .catch(error => {
        console.log(
          'There has been a problem with your axios operation: ' +
            error.message,
        );
        throw error;
      });
  };
  //
  if (data.length !== 0 && isLoading === true) {
    return (
      <KeyboardAvoidingView enabled={true} behavior="height">
        <View>
          <View style={styles.eclipse1} />
          <View style={styles.eclipse2} />
          <View style={styles.eclipse3} />
          <View style={styles.eclipse4} />
          <Text style={styles.header}>Update your information</Text>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            style={{left: 10, top: 25}}
            onPress={() => navigation.navigate('AppHome')}
          />
          <View style={styles.containerAccount}>
            <Text
              style={{
                position: 'absolute',
                width: 150,
                height: 23,
                margin: 15,
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 15,
                lineHeight: 22,
                color: 'black',
              }}>
              Name Patient:
            </Text>
            <TextInput
              style={{top: 20}}
              placeholder="Name Patient"
              defaultValue={namePatient}
              onChangeText={setNamePatient}
            />
            <Text
              style={{
                position: 'absolute',
                width: 150,
                height: 23,
                margin: 15,
                top: 60,
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 15,
                lineHeight: 22,
                color: 'black',
              }}>
              Day Of Birth:
            </Text>
            <TextInput
              style={{top: 35}}
              placeholder="Day Of Birth"
              defaultValue={dayOfBirth}
              onChangeText={setDayOfBirth}
            />
            <Text
              style={{
                position: 'absolute',
                width: 150,
                height: 23,
                margin: 15,
                top: 120,
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 15,
                lineHeight: 22,
                color: 'black',
              }}>
              Gender
            </Text>
            <TextInput
              style={{top: 45}}
              placeholder="Sex"
              defaultValue={sex}
              onChangeText={setSex}
            />
            <Text
              style={{
                position: 'absolute',
                width: 150,
                height: 23,
                margin: 15,
                top: 180,
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 15,
                lineHeight: 22,
                color: 'black',
              }}>
              Phone
            </Text>
            <TextInput
              style={{top: 58}}
              placeholder="Phone"
              defaultValue={phone}
              onChangeText={setPhone}
            />
            <Text
              style={{
                position: 'absolute',
                width: 150,
                height: 23,
                margin: 15,
                top: 245,
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 15,
                lineHeight: 22,
                color: 'black',
              }}>
              Home Address:
            </Text>
            <TextInput
              style={{top: 75}}
              placeholder="Home Address"
              defaultValue={homeAddress}
              onChangeText={setHomeAddress}
            />
            <Text
              style={{
                position: 'absolute',
                width: 150,
                height: 23,
                margin: 15,
                top: 310,
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 15,
                lineHeight: 22,
                color: 'black',
              }}>
              Email:
            </Text>
            <TextInput
              boderColor="primary"
              style={{top: 90}}
              placeholder="Email"
              defaultValue={email}
              onChangeText={setEmail}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.update}
              onPress={() => {
                updatePatient();
              }}>
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
          {/* <View>
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
          </View> */}
        </View>
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 20,
        }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
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
    height: 405,
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
  // buttonLogout: {
  //   position: 'absolute',
  //   width: 389,
  //   top: 520,
  //   padding: 10,
  //   margin: 10,
  //   backgroundColor: '#4FC3F7',
  //   borderRadius: 10,
  //   shadowColor: 'rgba(0, 0, 0, 1)',
  //   shadowOpacity: 100,
  //   shadowRadius: 100,
  //   elevation: 10,
  // },
  update: {
    position: 'absolute',
    width: 389,
    top: 470,
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
