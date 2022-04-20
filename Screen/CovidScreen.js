/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
var moment = require('moment');
const CovidScreen = ({navigation}) => {
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
      <Ionicons
        name="arrow-back-outline"
        size={30}
        style={{left: 10, top: 25}}
        onPress={() => navigation.navigate('AppHome')}
      />
      <View style={styles.covidUpdateContainer}>
        <Text style={styles.text}>
          {moment(data.updated).format('MMM Do YYYY')}
        </Text>
        <Text style={styles.text}>Total cases: {data.updated}</Text>
        <Text style={styles.text}>Coronavirus cases: {data.cases} </Text>
        <Text style={styles.text}>Today cases: {data.todayCases}</Text>
        <Text style={styles.text}>Today deaths: {data.todayDeaths}</Text>
        <Text style={styles.text}>Coronavirus recovered: {data.recovered}</Text>
      </View>
      <Text
        style={styles.labelSeeMore}
        onPress={() => navigation.navigate('DetailCountry')}>
        See more
      </Text>
      <View>
        <MaterialIcons
          name="navigate-next"
          size={30}
          style={{top: 330, left: 375}}
          onPress={() => navigation.navigate('DetailCountry')}
        />
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
    left: 130,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
  },
  covidUpdateContainer: {
    position: 'absolute',
    width: 389,
    height: 265,
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
  text: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 20,
    color: 'black',
    padding: 10,
  },
  labelSeeMore: {
    position: 'absolute',
    margin: 15,
    top: 350,
    left: 300,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 21,
    color: '#2EA1D2',
  },
});
