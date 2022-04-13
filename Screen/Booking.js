/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import CalendarItem from './Calendar';

const Booking = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const route = useRoute();
  const id = route.params.id;
  useEffect(() => {
    getListDoctor();
    return () => {};
  }, []);
  let getListDoctor = () => {
    const apiURL = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(resJson);
        setTimeout(() => setIsLoading(false), 1000);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };
  //console.log(data);
  if (data.length !== 0 && isLoading === false) {
    return (
      <View>
        <View style={styles.eclipse1} />
        <View style={styles.eclipse2} />
        <View style={styles.eclipse3} />
        <View style={styles.eclipse4} />
        <Text style={styles.header}>Booking</Text>
        <View style={styles.listInfo}>
          <Text>Name: {data.name}</Text>
          <Text>Email: {data.email}</Text>
          <Text>Phone: {data.phone}</Text>
          <Text>Phone: {data.company.name}</Text>
          <Text>Phone: {data.company.catchPhrase}</Text>
          <Text>Phone: {data.company.bs}</Text>
          <Text>Phone: {data.address.street}</Text>
        </View>
        {/* <View>
          <Text styles={styles.dayOff}>Day off</Text>
        </View> */}
        <View style={styles.calendar}>
          <CalendarItem />
        </View>
      </View>
    );
  } else {
    return <ActivityIndicator />;
  }
};

export default Booking;

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
    backgroundColor: '#4FC3F7',
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
  },
  listInfo: {
    position: 'absolute',
    width: 389,
    height: 200,
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
  dayFree: {},
  dayOff: {
    position: 'absolute',
    width: 50,
    height: 30,
    left: 30,
    top: 600,
    backgroundColor: '#588DDB',
  },
  calendar: {
    position: 'absolute',
    width: 389,
    height: 380,
    top: 350,
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
