/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box'

const Predict = () => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    getListTodo();
    return () => {};
  }, []);
  let getListTodo = () => {
    const apiURL = 'https://jsonplaceholder.typicode.com/todos';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(resJson);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };
  let renderItem = ({item, index}) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>Predict with Symptoms</Text>
      <Text style={styles.title}>
        You need to choose one or more the Symptoms below
      </Text>
      <View style={styles.scrollViewContainer}>
        <FlatList
          nestedScrollEnabled
          data={data}
          renderItem={renderItem}
          keyExtractor={item => `key-${item.id}`}
        />
      </View>
      <TouchableOpacity style={styles.predictButton}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            color: 'white',
            fontWeight: 'bold',
          }}>
          Get Predict
        </Text>
      </TouchableOpacity>
      <Text style={[styles.labelResult]}>Result: </Text>
      <View style={[styles.result]}></View>
      <View>
        <Text style={[styles.textAdvanced]}>
          These results are for reference only. May not be correct. You should
          see your doctor to know more about your condition.
        </Text>
      </View>
      <View>
        <LottieView
          style={styles.footer}
          source={require('../lottie/43749-mask-wear-lt-gray.json')}
          autoPlay
        />
        <Text style={[styles.footerText]}>Wear a mask to prevent COVID-19</Text>
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
  header: {
    position: 'absolute',
    width: 296,
    height: 35,
    left: 78,
    top: 70,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
    color: 'black',
  },
  title: {
    position: 'absolute',
    width: 358,
    height: 20,
    left: 45,
    top: 115,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 20,
    color: 'black',
  },
  scrollViewContainer: {
    position: 'absolute',
    width: 326,
    height: 165,
    left: 45,
    top: 150,
    backgroundColor: '#FFFFFF',
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
  list: {
    flex: 1,
    padding: 8,
  },
  predictButton: {
    position: 'absolute',
    width: 328,
    height: 40,
    left: 45,
    top: 333,
    backgroundColor: '#73E4FD',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    width: 64,
    height: 50,
    left: 30,
    top: 345,
  },
  footerText: {
    position: 'absolute',
    width: 263,
    height: 23,
    left: 120,
    top: 700,
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
    height: 110,
    left: 45,
    top: 420,
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
    top: 495,
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
});
