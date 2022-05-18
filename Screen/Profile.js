/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PracticeProvider, PracticeContext} from '../Global/PracticeContext';
const Profile = ({navigation}) => {
  const {val, setVal, val1, setVal1, val2, setVal2} =
    useContext(PracticeContext);
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>My Profile</Text>
      <Ionicons
        name="arrow-back-outline"
        size={30}
        style={{left: 10, top: 25}}
        onPress={() => navigation.navigate('AppHome')}
      />
      {/* <View style={{alignItems: 'center'}}>
        <View style={styles.image}>
          <Image
            source={require('../asset/picture.jpg')}
            style={styles.profileImage}
            resizeMode="center"
          />
        </View>
      </View> */}
      {/* <View>
        <TextInput style={styles.textInput} placeholder="My result..." />
      </View> */}
      <View style={styles.containerProfile}>
        <Text>{val}</Text>
        <Text>{val1}</Text>
        <Text>{val2}</Text>
        <TouchableOpacity
          onPress={() => {
            setVal(val + 1);
            setVal1(val1 + 1);
            setVal2(val2 + 1);
          }}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

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
    left: 120,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  profileImage: {
    top: 50,
    width: 200,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
  textInput: {
    position: 'absolute',
    width: 320,
    height: 41,
    left: 47,
    top: 270,
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  containerProfile: {
    position: 'absolute',
    width: 317,
    height: 300,
    left: 50,
    top: 70,
    backgroundColor: '#FEFFFF',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
});
