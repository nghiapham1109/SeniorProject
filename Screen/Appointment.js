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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
//
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.id}</Text>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
    <Text style={[styles.title, textColor]}>{item.email}</Text>
    <Text style={[styles.title, textColor]}>{item.phone}</Text>
  </TouchableOpacity>
);

const Appointment = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  //
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  const renderItem = ({item}) => {
    // const backgroundColor = item.id === selectedId ? '#42A5F5' : '#E1F5FE';
    const color = item.id === selectedId ? 'black' : 'black';
    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        onPress={() => navigation.navigate('Booking', {id: item.id})}
        // backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  //
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [Specialist, setSpecialist] = useState([
    {label: 'Anatomy', value: 'Anatomy'},
    {label: 'Biochemistry', value: 'Biochemistry'},
    {label: 'Cardiology', value: 'Cardiology'},
    {label: 'Department of psychiatry', value: 'Department of psychiatry'},
    {label: 'Dermatology', value: 'Dermatology'},
    {label: 'Diagnostic imaging', value: 'Diagnostic imaging'},
    {label: 'Forensic science', value: 'Forensic science'},
  ]);
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
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <TextInput style={styles.textInput} placeholder="Search doctor..." />
      <View style={styles.dropdown}>
        <View style={{flex: 1}}>
          <DropDownPicker
            style={{
              height: 50,
              fontSize: 12,
              fontWeight: 'bold',
              fontFamily: 'Poppins',
              lineHeight: 20,
            }}
            listMode="FLATLIST"
            placeholder="Ham/ hoc vi"
            closeAfterSelecting={true}
            value={value}
            items={items}
            // open={open}
            // setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
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
            placeholder="Specialist"
            closeAfterSelecting={true}
            open={open}
            value={value}
            items={Specialist}
            setOpen={setOpen}
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
            // open={open}
            // setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
      </View>
      <View style={styles.listDoctor}>
        <FlatList
          nestedScrollEnabled
          data={data}
          renderItem={renderItem}
          // keyExtractor={item => item.id}
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
  },
  listDoctor: {
    position: 'absolute',
    width: 389,
    height: 500,
    top: 220,
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
    marginTop: 10,
    marginBottom: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    fontFamily: 'Poppins',
  },
});
