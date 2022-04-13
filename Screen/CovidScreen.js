/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
var moment = require('moment');
const CovidScreen = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    getListTodo();
    return () => {};
  }, []);
  let getListTodo = () => {
    const apiURL = 'https://disease.sh/v3/covid-19/all';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(resJson);
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
      <Text style={styles.header}>Covid-19</Text>
      <View style={styles.covidUpdateContainer}>
        <Text>{moment(data.updated).format('MMM Do YYYY')}</Text>
        <Text>Total cases: {data.updated}</Text>
        <Text>Coronavirus cases: {data.cases} </Text>
        <Text>Today cases: {data.todayCases}</Text>
      </View>
    </View>
  );
};

export default CovidScreen;

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
    left: 150,
    top: 70,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
    color: 'black',
  },
  covidUpdateContainer: {
    position: 'absolute',
    width: 326,
    height: 80,
    left: 45,
    top: 124,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: {
      //   width: 1000,
      //   height: 1000,
    },
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
});
