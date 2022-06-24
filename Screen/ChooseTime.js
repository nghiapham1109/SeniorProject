/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import {AuthContext} from '../Global/context';
import jwt_decode from 'jwt-decode';
import BackendAPI from '../api/HttpClient';
import Toast from 'react-native-simple-toast';
//
const DATA = ['08:00-09:00', '09:15-10:15', '10:30-11:30'];
//
const DATA1 = ['13:00-14:00', '14:15-15:15', '15:30-16:30'];
//
const Item = ({item, onPress, disabled, style}) => (
  <TouchableOpacity disabled={disabled} onPress={onPress} style={style}>
    <Text style={[styles.title1]}>{item}</Text>
  </TouchableOpacity>
);

const ChooseTime = ({navigation}) => {
  //
  const context = useContext(AuthContext);
  const setToken = context.setToken;
  const Token = context.token;
  const decode = jwt_decode(Token);
  const IDPatient = decode.result.IDPatient;
  console.log('Choostime', IDPatient);
  //
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //
  const route = useRoute();
  const date = route.params.date;
  const IDDoctor = route.params.IDDoctor;
  //
  useEffect(() => {
    fetch(`http://10.0.2.2:8080/api/doctor/daybusy/${IDDoctor}`, {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setData(json.data);
      })
      .catch(error => {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
  }, [IDDoctor, Token]);
  //
  useEffect(() => {
    fetch(`http://10.0.2.2:8080/api/booking/${IDDoctor}`, {
      headers: {
        Authorization: 'Bearer ' + Token,
      },
    })
      .then(response => response.json())
      .then(json => {
        setData1(json.data);
        console.log('chooseTime', json.data);
      })
      .catch(error => {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
  }, [IDDoctor, Token]);
  //
  const renderItem = ({item}) => {
    //
    const DayBooked = data1.filter(({DayBooking}) => DayBooking === date);
    console.log('DayBooked', DayBooked);
    const timeBooked = DayBooked.filter(
      ({TimeBooking}) => TimeBooking === item,
    );
    console.log('TimeBooked', timeBooked);
    //
    const filteredRs = data.filter(({DayBusy}) => DayBusy === date);
    const busyDate = filteredRs.filter(({TimeBusy}) => TimeBusy === item);
    console.log('BusyDate', busyDate);
    //
    if (busyDate.length !== 0 || timeBooked.length !== 0) {
      return <Item item={item} disabled={true} style={[styles.itemDisabled]} />;
    } else {
      return (
        <Item
          item={item}
          disabled={false}
          style={styles.item}
          onPress={() =>
            navigation.navigate('Confirm', {
              title: item,
              date: date,
              IDDoctor: IDDoctor,
            })
          }
        />
      );
    }
    //
  };
  if (data?.length !== 0 && isLoading === false) {
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
          <Text style={styles.day}>{date.split('-').reverse().join('-')}</Text>
          <Text style={styles.morning}>Morning</Text>
          <View style={{top: 200}}>
            <FlatList
              horizontal
              nestedScrollEnabled
              data={DATA}
              renderItem={renderItem}
            />
          </View>
          <Text style={styles.afternoon}>Afternoon</Text>
          <View style={{top: 300}}>
            <FlatList
              horizontal
              nestedScrollEnabled
              data={DATA1}
              renderItem={renderItem}
            />
          </View>
          <MaterialIcons
            onPress={() =>
              navigation.navigate('Confirm', {date: date, IDDoctor: IDDoctor})
            }
            name="navigate-next"
            size={50}
            style={{top: 350, left: 325}}
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
  day: {
    position: 'absolute',
    width: 300,
    height: 23,
    left: 25,
    top: 90,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 22,
    color: 'black',
    fontSize: 20,
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
    top: 350,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 22,
    color: 'black',
  },
  item: {
    backgroundColor: '#A6E9F2',
    height: 80,
    width: 87,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemDisabled: {
    backgroundColor: 'gray',
    height: 80,
    width: 87,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title1: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    textAlign: 'justify',
    color: 'black',
  },
});
