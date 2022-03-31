/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Predict = () => {
  return (
    <View>
        <View style={styles.eclipse1} />
        <View style={styles.eclipse2} />
        <View style={styles.eclipse3} />
        <View style={styles.eclipse4} />
        <View>
            <LottieView style={styles.footer}
            source={require('../lottie/43749-mask-wear-lt-gray.json')}
            autoPlay />
            <Text style={[styles.footerText]}>Wear a mask to prevent COVID-19</Text>
        </View>
        <Text style={[styles.labelResult]}>Result: </Text>
        <View style={[styles.result]}></View>
        <View>
            <Text style={[styles.textAdvanced]}>These results are for reference only. May not be correct. You should see your doctor to know more about your condition.</Text>
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

export default Predict;

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
    labelResult: {
        position: 'absolute',
        width: 51,
        height: 23,
        left: 45,
        top: 380,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 15,
        lineHeight: 22,
        color: 'black',
    },
    result: {
        position: 'absolute',
        width: 326,
        height: 99,
        left: 45,
        top: 410,
        backgroundColor: '#FEFEFE',
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
    textAdvanced: {
        position: 'absolute',
        // width: 354,
        // height: 34,
        // left: 20,
        top: 475,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 11,
        lineHeight: 16,
        color: 'red',
        padding: 50,
        justifyContent: 'center',
        textAlign: 'center',
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
