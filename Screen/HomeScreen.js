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
  Linking,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import DATA from '../data/data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//
const {width} = Dimensions.get('screen');
const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
// flatlist
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d514196c2b7d43b4938414a02371668b',
    )
      .then(response => response.json())
      .then(json => setData(json.articles));
  }, []);

  // const renderItem = ({item}) => {
  //   return <Image source={{uri: item.urlToImage}} />;
  // };
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>Welcome to My Health</Text>
      <Ionicons name="medical" size={50} color="red" style={{padding: 25}} />
      <Text style={styles.introduce}>Have a nice day!</Text>
      <View>
        <View style={styles.containerButtons}>
          <View style={styles.containerUp}>
            <View style={{backgroundColor: 'F8F0F0', flex: 1}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Appointment')}>
                <MaterialCommunityIcons
                  color="#40C4FF"
                  name="doctor"
                  size={50}
                  style={{margin: 15, left: 50}}
                />
                <Text
                  style={{
                    top: -15,
                    left: 40,
                    fontSize: 15,
                    fontWeight: 'bold',
                    fontFamily: 'Poppins',
                  }}>
                  An Appointment
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{backgroundColor: 'F8F0F0', flex: 1}}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Ionicons
                  name="person-circle-outline"
                  size={50}
                  style={{margin: 15, left: 50}}
                  color="#4C75A3"
                />
                <Text
                  style={{
                    top: -15,
                    left: 68,
                    fontSize: 15,
                    fontWeight: 'bold',
                    fontFamily: 'Poppins',
                  }}>
                  Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerDown}>
            <View style={{backgroundColor: 'F8F0F0', flex: 1}}>
              <TouchableOpacity>
                <MaterialIcons
                  name="menu-book"
                  size={50}
                  style={{margin: 15, left: 50}}
                  color="#02B875"
                />
                <Text
                  style={{
                    top: -15,
                    left: 45,
                    fontSize: 15,
                    fontWeight: 'bold',
                    fontFamily: 'Poppins',
                  }}>
                  User Manual
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{backgroundColor: 'F8F0F0', flex: 1}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CovidScreen')}>
                <FontAwesome5
                  name="disease"
                  color="#E91E63"
                  size={50}
                  style={{margin: 15, left: 50}}
                />
                <Text
                  style={{
                    top: -15,
                    left: 50,
                    fontSize: 15,
                    fontWeight: 'bold',
                    fontFamily: 'Poppins',
                  }}>
                  Covid - 19
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text
          style={styles.labelNews}
          onPress={() => navigation.navigate('New')}>
          News
        </Text>
        <Text
          style={styles.labelSeeMore}
          onPress={() => navigation.navigate('New')}>
          See more
        </Text>
        <MaterialIcons
          name="navigate-next"
          size={30}
          style={{top: 212, left: 370}}
          onPress={() => navigation.navigate('New')}
        />
        <View style={styles.containerNews}>
          <FlatList
            nestedScrollEnabled
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                    <Image
                      style={{
                        width: 'auto',
                        height: 200,
                        borderRadius: 10,
                        margin: 10,
                      }}
                      source={{
                        uri: item.urlToImage,
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={3}
                    style={styles.headerNews}>
                    {item.title}
                  </Text>
                  <Text
                    ellipsizeMode="tail"
                    numberOfLines={4}
                    style={styles.bodyNews}>
                    {item.description}
                  </Text>
                </View>
              );
            }}
            keyExtractor={item => item.url}
            extraData={selectedId}
          />
        </View>
      </View>
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
    left: 55,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
    color: 'black',
  },
  introduce: {
    position: 'absolute',
    padding: 20,
    top: 30,
    left: 55,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 38,
  },
  containerButtons: {
    position: 'absolute',
    width: 380,
    height: 200,
    marginLeft: 13,
    backgroundColor: '#F8F0F0',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  containerUp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'F8F0F0',
  },
  containerDown: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'F8F0F0',
  },
  labelNews: {
    position: 'absolute',
    margin: 15,
    top: 200,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 21,
    color: 'black',
  },
  labelSeeMore: {
    position: 'absolute',
    margin: 15,
    top: 200,
    left: 300,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 21,
    color: '#2EA1D2',
  },
  containerNews: {
    position: 'absolute',
    width: 380,
    height: 340,
    margin: 15,
    top: 230,
    backgroundColor: '#F8F0F0',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
    borderRadius: 10,
  },
  headerNews: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    textAlign: 'justify',
  },
  bodyNews: {
    color: '#222',
    fontSize: 14,
    paddingLeft: 20,
    paddingRight: 20,
    height: 80,
    textAlign: 'justify',
  },
});
