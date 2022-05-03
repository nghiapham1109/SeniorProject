/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
const DetailNew = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const route = useRoute();
  const index = route.params.id;
  console.log(index);
  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d514196c2b7d43b4938414a02371668b',
      )
      .then(response => setData(response.data.articles));
  }, []);
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>Detail News</Text>
      <Ionicons
        name="arrow-back-outline"
        size={30}
        style={{left: 10, top: 25}}
        onPress={() => navigation.navigate('New')}
      />
      <View style={styles.containerNews}>
        {data.length > 0 && (
          <Text style={styles.headerNews}>{data[index].title}</Text>
        )}
        {data.length > 0 && (
          <Text style={styles.bodyNews}>{data[index].author}</Text>
        )}
        {data.length > 0 && (
          <Text style={styles.bodyNews}>{data[index].description}</Text>
        )}
        {data.length > 0 && (
          <Image
            style={{
              width: 'auto',
              height: 200,
              borderRadius: 10,
              margin: 10,
            }}
            source={{
              uri: data[index].urlToImage,
            }}
          />
        )}
        {data.length > 0 && (
          <Text style={styles.bodyNews}>{data[index].publishedAt}</Text>
        )}
      </View>
    </View>
  );
};

export default DetailNew;

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
    left: 125,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
    color: 'black',
  },
  containerNews: {
    position: 'absolute',
    width: 380,
    height: 680,
    margin: 15,
    top: 50,
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
    fontFamily: 'Poppins',
    lineHeight: 20,
  },
  bodyNews: {
    color: '#222',
    fontSize: 14,
    paddingLeft: 20,
    paddingRight: 20,
    height: 80,
    textAlign: 'justify',
    fontFamily: 'Poppins',
    lineHeight: 20,
  },
});
