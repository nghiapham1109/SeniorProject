/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import DATA from '../data/data';
const {width} = Dimensions.get('screen');
const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>Welcome to My Health</Text>
      <Text style={styles.introduc}>Have a nice day!</Text>
      <View>
        <LottieView
          style={styles.imageNews}
          source={require('../lottie/29447-global-mobile-news-network.json')}
          autoPlay
        />
        <TouchableOpacity style={styles.buttonNews}>
          <Text
            style={{
              fontSize: 15,
              color: '#000000',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 10,
              fontFamily: 'Poppins',
            }}>
            News
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <LottieView
          style={styles.imageCovid19}
          source={require('../lottie/30328-corona-virus.json')}
          autoPlay
        />
        <TouchableOpacity style={styles.buttonCovid19}>
          <Text
            style={{
              fontSize: 15,
              color: '#000000',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 10,
              fontFamily: 'Poppins',
            }}>
            Covid-19
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerCarousel}>
        <FlatList
          data={DATA}
          keyExtractor={(_, index) => String(index)}
          horizontal
          renderItem={({item, index}) => {
            return (
              <View>
                <Image
                  source={{uri: item.poster}}
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    resizeMode: 'cover',
                    borderRadius: 20,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
      <View>
        <LottieView
          style={styles.footer}
          source={require('../lottie/43749-mask-wear-lt-gray.json')}
          autoPlay
        />
        <Text style={[styles.footerText]}>Wear a mask to prevent COVID-19</Text>
      </View>
      {/* <View style={styles.taskbar}>
            <LottieView style={styles.iconHome}
                source={require('../lottie/56502-home-location.json')}
                autoPlay/>
            <Text style={styles.textHome} onPress={() => navigation.navigate('HomeScreen')}>Home Screen</Text>
            <LottieView style={styles.iconDisease}
                source={require('../lottie/21910-category-icon-animation.json')}
                autoPlay/>
                <Text style={styles.textDisease} onPress={() => navigation.navigate('Disease')}>Disease</Text>
            <LottieView style={styles.iconPredict}
                source={require('../lottie/94901-disease.json')}
                autoPlay/>
            <Text style={styles.textPredict} onPress={() => navigation.navigate('Predict')}>Predict</Text>
            <LottieView style={styles.iconProfile}
                source={require('../lottie/88222-id-card-profile-card.json')}
                autoPlay/>
            <Text style={styles.textProfile}>Profile</Text>
        </View> */}
    </View>
  );
};

export default HomeScreen;

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
    width: 288,
    height: 38,
    left: 30,
    top: 62,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
  },
  introduc: {
    position: 'absolute',
    width: 200,
    height: 400,
    left: 30,
    top: 90,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 38,
  },
  buttonNews: {
    position: 'absolute',
    width: 70,
    height: 40,
    left: 90,
    top: 150,
    backgroundColor: 'rgba(214, 150, 216, 0.83)',
    borderRadius: 10,
  },
  buttonCovid19: {
    position: 'absolute',
    width: 90,
    height: 40,
    left: 290,
    top: 150,
    backgroundColor: 'rgba(237, 60, 113, 0.83)',
    borderRadius: 10,
  },
  imageNews: {
    position: 'absolute',
    width: 70,
    height: 70,
    left: 10,
    top: 66,
  },
  imageCovid19: {
    position: 'absolute',
    width: 70,
    height: 70,
    left: 110,
    top: 66,
  },
  containerCarousel: {
    position: 'absolute',
    width: 317,
    height: 320,
    left: 50,
    top: 220,
    backgroundColor: '#F8F0F0',
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: {
      //   width: 1000,
      //   height: 1000,
    },
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  footer: {
    position: 'absolute',
    width: 64,
    height: 50,
    left: 30,
    top: 320,
  },
  footerText: {
    position: 'absolute',
    width: 263,
    height: 23,
    left: 120,
    top: 655,
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
    backgroundColor: '#1FCAF0',
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
