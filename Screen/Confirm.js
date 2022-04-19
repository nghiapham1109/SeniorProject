/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Confirm = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getListDoctor();
    return () => {};
  }, []);
  let getListDoctor = () => {
    const apiURL = `https://jsonplaceholder.typicode.com/users/1`;
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
        <Text style={styles.header}>Confirm Information</Text>
        <Ionicons
          name="arrow-back-outline"
          size={30}
          style={{left: 10, top: 25}}
          onPress={() => navigation.navigate('Appointment')}
        />
        <View style={styles.listInfo}>
          <Text style={styles.text}>Name: {data.name}</Text>
          <Text style={styles.text}>Email: {data.email}</Text>
          <Text style={styles.text}>Phone: {data.phone}</Text>
          <Text style={styles.text}>Company: {data.company.name}</Text>
          <Text style={styles.text}>Phone: {data.company.catchPhrase}</Text>
          <Text style={styles.text}>Phone: {data.company.bs}</Text>
          <Text style={styles.text}>Address: {data.address.street}</Text>
        </View>
        <View>
          <Text style={styles.time}>Time: 14:15 - 15: 15</Text>
        </View>
        <View>
          <Text style={styles.decription}>Decription about symptom: </Text>
          <TextInput placeholder="Input here" style={styles.textInput} />
        </View>
        <MaterialIcons
          onPress={() => navigation.navigate('Profile')}
          name="navigate-next"
          size={50}
          style={{top: 550, left: 360}}
        />
      </View>
    );
  } else {
    return <ActivityIndicator />;
  }
};

export default Confirm;

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
    left: 80,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
    color: 'black',
  },
  listInfo: {
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
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 20,
    padding: 10,
  },
  time: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 20,
    padding: 10,
    top: 370,
    left: 5,
  },
  decription: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 20,
    padding: 10,
    top: 370,
    left: 5,
  },
  textInput: {
    position: 'absolute',
    width: 389,
    height: 100,
    top: 420,
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
