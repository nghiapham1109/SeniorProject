/* eslint-disable react-native/no-inline-styles */
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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
//
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={{flex: 1}}>
      <Text style={[styles.title, textColor]}>
        Full name: {item.NameDoctor}
      </Text>
      <Text style={[styles.title, textColor]}>
        Day of birth: {item.DayOfBirth}
      </Text>
      <Text style={[styles.title, textColor]}>Gender: {item.sex}</Text>
      <Text style={[styles.title, textColor]}>Email: {item.Email}</Text>
      <Text style={[styles.title, textColor]}>Phone: {item.Phone}</Text>
      <Text style={[styles.title, textColor]}>
        Specialist: {item.Specialist}
      </Text>
    </View>
    <View style={{flex: 1}}>
      <Image
        source={{uri: item.Image}}
        style={{
          width: 100,
          height: 240,
          resizeMode: 'contain',
          borderRadius: 20,
          left: 50,
        }}
      />
    </View>
  </TouchableOpacity>
);

const Appointment = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [value, setValue] = useState([]);
  const [arrayHolder, setArrayHolder] = useState([]);
  const [value2, setValue2] = useState();
  //
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://10.0.2.2:8080/api/doctor')
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
  }, []);
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
  // const [items, setItems] = useState([
  //   {label: 'Male', value: 'Male'},
  //   {label: 'Female', value: 'Female'},
  // ]);
  // const [Specialist, setSpecialist] = useState([
  //   {label: 'Anatomy', value: 'Anatomy'},
  //   {label: 'Biochemistry', value: 'Biochemistry'},
  //   {label: 'Cardiology', value: 'Cardiology'},
  //   {label: 'Department of psychiatry', value: 'Department of psychiatry'},
  //   {label: 'Dermatology', value: 'Dermatology'},
  //   {label: 'Diagnostic imaging', value: 'Diagnostic imaging'},
  //   {label: 'Forensic science', value: 'Forensic science'},
  // ]);
  //
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
      <TextInput style={styles.textInput} placeholder="Search doctor..." />
      {/* <View style={styles.dropdown}>
        <View style={{flex: 1}}>
          <DropDownPicker
            style={{
              height: 50,
              fontSize: 12,
              fontWeight: 'bold',
              fontFamily: 'Poppins',
              lineHeight: 20,
            }}
            placeholder="Specialist"
            closeAfterSelecting={true}
            open={open1}
            value={value}
            items={Specialist}
            setOpen={setOpen1}
            setValue={setValue}
            setItems={setSpecialist}
          />
        </View>
        <View style={{flex: 1}}>
          <DropDownPicker
            style={{
              height: 50,
              fontSize: 12,
              fontWeight: 'bold',
              fontFamily: 'Poppins',
              lineHeight: 20,
            }}
            placeholder="Sex"
            closeAfterSelecting={true}
            value={value}
            items={items}
            open={open}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            autoScroll={true}
          />
        </View>
      </View> */}
      <View style={styles.listDoctor}>
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
    top: 140,
    margin: 10,
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listDoctor: {
    position: 'absolute',
    width: 389,
    height: 600,
    top: 140,
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
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    padding: 5,
    lineHeight: 20,
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
