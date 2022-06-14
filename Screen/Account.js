/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../Global/context';
import jwt_decode from 'jwt-decode';
import BackendAPI from '../api/HttpClient';
//
const Account = props => {
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
      <View>
        <View style={styles.eclipse1} />
        <View style={styles.eclipse2} />
        <View style={styles.eclipse3} />
        <View style={styles.eclipse4} />
        <Text style={styles.header}>About your information</Text>
        <View style={styles.containerAccount}>
          <TextInput
            placeholder="Name Patient"
            defaultValue={namePatient}
            onChangeText={setNamePatient}
          />
          <TextInput
            placeholder="Day Of Birth"
            defaultValue={dayOfBirth}
            onChangeText={setDayOfBirth}
          />
          <TextInput
            placeholder="Sex"
            defaultValue={sex}
            onChangeText={setSex}
          />
          <TextInput
            placeholder="Phone"
            defaultValue={phone}
            onChangeText={setPhone}
          />
          <TextInput
            placeholder="Home Address"
            defaultValue={homeAddress}
            onChangeText={setHomeAddress}
          />
          <TextInput
            placeholder="Email"
            defaultValue={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Password"
            defaultValue={password}
            secureTextEntry
            onChangeText={setPassword}
          />
          {/* <TextInput
          value={idAdmin.toString()}
          placeholder="IDAdmin"
          defaultValue={idAdmin}
          onChange={e => setIDAdmin(e.target.value)}
        /> */}
        </View>

        <View>
          <TouchableOpacity
            style={styles.test}
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
  } else {
    return <ActivityIndicator />;
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
