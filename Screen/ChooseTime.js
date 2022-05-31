/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
const DATA = [
  {
    id: '1',
    title: '08:00-09:00',
  },
  {
    id: '2',
    title: '09:15-10:00',
  },
  {
    id: '3',
    title: '10:15-11:15',
  },
];
const DATA1 = [
  {
    id: '4',
    title: '13:00-14:00',
  },
  {
    id: '5',
    title: '14:15-15:15',
  },
  {
    id: '6',
    title: '15:30-16:30',
  },
];
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title1, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const ChooseTime = ({navigation}) => {
  const route = useRoute();
  const date = route.params.date;
  const IDDoctor = route.params.IDDoctor;
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate('Confirm', {
            title: item.title,
            date: date,
            IDDoctor: IDDoctor,
          })
        }
      />
    );
  };
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
        <View style={styles.blue}>
          <Text style={styles.emptyHours}>Empty hours</Text>
        </View>
        <Text style={styles.day}>
          {/* {date.day} / {date.month} / {date.year} */}
          {date}
        </Text>
        <View style={styles.gray}>
          <Text style={styles.busyHours}>Busy hours</Text>
        </View>
        <Text style={styles.morning}>Morning</Text>
        <View style={{top: 280}}>
          <FlatList
            horizontal
            nestedScrollEnabled
            data={DATA}
            renderItem={renderItem}
          />
        </View>
        <Text style={styles.afternoon}>Afternoon</Text>
        <View style={{top: 330}}>
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
  blue: {
    position: 'absolute',
    width: 70,
    height: 40,
    left: 25,
    top: 150,
    backgroundColor: '#A6E9F2',
    borderRadius: 10,
  },
  gray: {
    position: 'absolute',
    width: 70,
    height: 40,
    right: 100,
    top: 150,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  emptyHours: {
    position: 'absolute',
    width: 100,
    height: 40,
    left: 80,
    top: 5,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 22,
    color: 'black',
  },
  busyHours: {
    position: 'absolute',
    width: 100,
    height: 40,
    left: 80,
    top: 5,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 22,
    color: 'black',
  },
  morning: {
    position: 'absolute',
    width: 79,
    height: 23,
    left: 25,
    top: 250,
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
    top: 400,
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
  title1: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    textAlign: 'justify',
  },
});
