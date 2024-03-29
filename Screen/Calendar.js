/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Agenda, CalendarList} from 'react-native-calendars';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';

const CalendarItem = ({IDDoctor}) => {
  console.log('calendarItem', IDDoctor);
  const navigation = useNavigation();
  return (
    <View>
      <CalendarList
        horizontal={true}
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={0}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        // disabled={true}
        onDayPress={date => {
          if (date.timestamp < new Date().getTime()) {
            Toast.showWithGravity(
              "Can't choose this day!",
              Toast.LONG,
              Toast.BOTTOM,
            );
            console.log("Too late, can't booking calendar");
          } else {
            console.log(date.dateString);
            console.log(IDDoctor);
            navigation.navigate('ChooseTime', {
              date: date.dateString,
              IDDoctor: IDDoctor,
            });
          }
        }}
      />
    </View>
  );
};

export default CalendarItem;

const styles = StyleSheet.create({});
