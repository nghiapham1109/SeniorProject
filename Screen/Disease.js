/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
//import LottieView from 'lottie-react-native';
import LottieView from 'lottie-react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Chlamydia',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Cold urticaria',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Colorectal Cancer',
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);


const Disease = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? '#F6F3F3' : '#A4EFE2';
      const color = item.id === selectedId ? 'black' : 'black';
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
    };
  return (
    <View>
        <View style={styles.eclipse1} />
        <View style={styles.eclipse2} />
        <View style={styles.eclipse3} />
        <View style={styles.eclipse4} />
        <Text style={styles.header}>Disease</Text>
        <TextInput style={styles.textInput}
        placeholder="Search disease..." />
        <View style={styles.containerDisease}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId} />
        </View>
        <View>
            <LottieView style={styles.footer}
            source={require('../lottie/43749-mask-wear-lt-gray.json')}
            autoPlay />
            <Text style={[styles.footerText]}>Wear a mask to prevent COVID-19</Text>
        </View>
        <View style={styles.taskbar}>
            <LottieView style={styles.iconHome}
                source={require('../lottie/56502-home-location.json')}
                autoPlay/>
            <Text style={styles.textHome}>Home</Text>
            <LottieView style={styles.iconDisease}
                source={require('../lottie/21910-category-icon-animation.json')}
                autoPlay/>
            <Text style={styles.textDisease}>Disease</Text>
            <LottieView style={styles.iconPredict}
                source={require('../lottie/94901-disease.json')}
                autoPlay/>
            <Text style={styles.textPredict}>Predict</Text>
            <LottieView style={styles.iconProfile}
                source={require('../lottie/88222-id-card-profile-card.json')}
                autoPlay/>
            <Text style={styles.textProfile}>Profile</Text>
        </View>
    </View>
  );
};

export default Disease;

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
        width: 200,
        height:38,
        left: 150,
        top: 74,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 35,
        lineHeight: 38,
        color: 'black',
    },
    textInput: {
        position: 'absolute',
        width: 299,
        height: 41,
        left: 60,
        top: 150,
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
        marginTop: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        fontFamily: 'Poppins',
    },
    containerDisease: {
        position: 'absolute',
        width: 326,
        height: 350,
        left: 40,
        top: 210,
        backgroundColor: '#FEFFFF',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 1)',
        shadowOpacity: 100,
        shadowRadius: 100,
        elevation: 10,
    },
    footer: {
        position: 'absolute',
        width: 64,
        height: 50,
        left: 30,
        top: 350,
    },
    footerText: {
        position: 'absolute',
        width: 263,
        height: 23,
        left: 120,
        top: 710,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 22,
    },
    taskbar: {
        position: 'absolute',
        width: 326,
        height: 99,
        left: 45,
        top: 580,
        backgroundColor: '#73E4FD',
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
    iconHome: {
        position: 'absolute',
        width: 100,
        height: 70,
        marginTop: 5,
        left: -5,
    },
    textHome: {
        position: 'absolute',
        width: 46,
        height: 23,
        left: 20,
        top: 70,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 22,
        color: 'white',
    },
    iconDisease: {
        position: 'absolute',
        width: 100,
        height: 70,
        marginTop: 5,
        left: 35,
    },
    textDisease: {
        position: 'absolute',
        width: 50,
        height: 23,
        left: 95,
        top: 70,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 22,
        color: 'white',
    },
    iconPredict: {
        position: 'absolute',
        width: 100,
        height: 70,
        marginTop: 5,
        left: 75,
    },
    textPredict: {
        position: 'absolute',
        width: 50,
        height: 23,
        left: 175,
        top: 70,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 22,
        color: 'white',
    },
    iconProfile: {
        position: 'absolute',
        width: 100,
        height: 70,
        marginTop: 5,
        left: 113,
    },
    textProfile: {
        position: 'absolute',
        width: 50,
        height: 23,
        left: 255,
        top: 70,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 22,
        color: 'white',
    },
});
