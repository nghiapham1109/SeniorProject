/* eslint-disable prettier/prettier */

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {filter} from 'domutils';
import jwt_decode from 'jwt-decode';
import BackendAPI from '../api/HttpClient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={{flex: 1}}>
      <MaterialCommunityIcons
        name="doctor"
        size={25}
        style={{margin: 5, padding: 5, color: '#2196f3'}}>
        <Text style={[styles.title, textColor]}>
          {' '}
          Doctor: {item.NameDoctor}
        </Text>
      </MaterialCommunityIcons>
      <MaterialCommunityIcons
        name="gender-male-female"
        size={25}
        style={{margin: 5, padding: 5, color: 'black'}}>
        <Text style={[styles.title, textColor]}> Gender: {item.sex}</Text>
      </MaterialCommunityIcons>
      <MaterialCommunityIcons
        name="email"
        size={25}
        style={{margin: 5, padding: 5, color: 'black'}}>
        <Text style={[styles.title, textColor]}> Email: {item.Email}</Text>
      </MaterialCommunityIcons>
      <MaterialCommunityIcons
        name="card-account-phone-outline"
        size={25}
        style={{margin: 5, padding: 5, color: 'black'}}>
        <Text style={[styles.title, textColor]}> Phone: {item.Phone}</Text>
      </MaterialCommunityIcons>
      <MaterialCommunityIcons
        name="stethoscope"
        size={25}
        style={{margin: 5, padding: 5, color: 'black'}}>
        <Text style={[styles.title, textColor]}>
          Specialist: {item.Specialist}
        </Text>
      </MaterialCommunityIcons>
    </View>
    <View style={{flex: 1}}>
      <Image
        source={{uri: item.Image}}
        style={{
          width: 150,
          height: 150,
          resizeMode: 'contain',
          right: -10,
          top: 20,
        }}
      />
    </View>
  </TouchableOpacity>
);

const Appointment = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState([]);
  //
  const [Specialist, setSpecialist] = useState([
    {label: 'Pediatrics', value: 'Pediatrics'},
    {label: 'Cardiology', value: 'Cardiology'},
    {label: 'Radiology', value: 'Radiology'},
    {label: 'Pharmacy', value: 'Pharmacy'},
  ]);
  //
  const onChangeValue = async () => {
    // console.log('Specialist', value);
    await getDoctorBySpecialist(value);
  };
  //
  const getDoctorBySpecialist = vlaue => {
    console.log('Vlaue', vlaue);
    BackendAPI.get(`api/doctor/specialist/${vlaue}`)
      .then(json => {
        setData(json.data.data);
      })
      .catch(error => {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        throw error;
      });
  };
  //
  useEffect(() => {
    fetch('http://10.0.2.2:8080/api/doctor')
      .then(response => response.json())
      .then(json => {
        setData(json.data);
        // setSpecialist(json.data.Specialist);
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
  //
  const renderItem = ({item}) => {
    const color = item.IDDoctor === selectedId ? 'black' : 'black';
    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate('Booking', {IDDoctor: item.IDDoctor})
        }
        textColor={{color}}
      />
    );
  };
  //
  if (data?.length !== 0 && isLoading === false) {
    return (
      <View>
        <View style={styles.eclipse1} />
        <View style={styles.eclipse2} />
        <View style={styles.eclipse3} />
        <View style={styles.eclipse4} />
        <Text style={styles.header}>Choose the doctor</Text>
        <Ionicons
          name="arrow-back-outline"
          size={30}
          style={{left: 10, top: 25}}
          onPress={() => navigation.navigate('AppHome')}
        />
        <View style={styles.listDoctor}>
          <DropDownPicker
            style={{
              height: 50,
              fontSize: 12,
              fontFamily: 'Poppins',
              lineHeight: 20,
              backgroundColor: '#F7F3F3',
            }}
            placeholder="Specialist"
            closeAfterSelecting={true}
            open={open}
            value={value}
            items={Specialist}
            setOpen={setOpen}
            setValue={setValue}
            onChangeValue={onChangeValue}
            setItems={setSpecialist}
          />
          <FlatList
            nestedScrollEnabled
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.IDDoctor}
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

export default Appointment;

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
  textInput: {
    position: 'absolute',
    width: 389,
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
  dropdown: {
    position: 'absolute',
    width: 389,
    top: 60,
    margin: 10,
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  listDoctor: {
    position: 'absolute',
    width: 389,
    height: 675,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 12,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    padding: 5,
    lineHeight: 18,
    textAlign: 'justify',
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
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
