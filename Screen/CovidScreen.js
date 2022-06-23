/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
var moment = require('moment');
const CovidScreen = ({navigation}) => {
  const [data, setData] = useState({});
  const [data1, setData1] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //
  useEffect(() => {
    getListCovid();
    return () => {};
  }, []);
  //
  let getListCovid = () => {
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
  if (data?.length !== 0 && isLoading === false) {
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
          <Text style={styles.text}>
            Coronavirus recovered: {data.recovered}
          </Text>
          <Text style={styles.text}>
            Today recovered: {data.todayRecovered}
          </Text>
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
            style={{top: 370, left: 375}}
            onPress={() => navigation.navigate('DetailCountry')}
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
    color: 'black',
  },
  covidUpdateContainer: {
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
    top: 390,
    left: 300,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 21,
    color: '#2EA1D2',
  },
  flagContainer: {
    position: 'absolute',
    width: 389,
    height: 350,
    top: 395,
    padding: 10,
    margin: 10,
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  flatCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    padding: 20,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
