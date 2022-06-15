/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import {useWindowDimensions} from 'react-native';
// import RenderHtml from 'react-native-render-html';
import RenderHTML from 'react-native-render-html';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const DetailDisease = ({navigation}) => {
  const {width} = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState({});
  const route = useRoute();
  const index = route.params.id;
  //
  useEffect(() => {
    fetch(`http://10.0.2.2:8080/api/disease/${index}`)
      .then(response => response.json())
      .then(json => setData(json.data[0]))
      .catch(error => {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
  }, [index]);
  if (data.length !== 0 && isLoading === true) {
    return (
      <View>
        <View style={styles.eclipse1} />
        <View style={styles.eclipse2} />
        <View style={styles.eclipse3} />
        <View style={styles.eclipse4} />
        <Text style={styles.header}>Detail Disease</Text>
        <Ionicons
          name="arrow-back-outline"
          size={30}
          style={{left: 10, top: 25}}
          onPress={() => navigation.navigate('AppHome')}
        />
        <Text style={styles.nameOfDisease}>{data.NameDisease}</Text>
        <View style={styles.containerDetailDisease}>
          <ScrollView style={{flex: 1}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontFamily: 'Poppins',
                lineHeight: 20,
                fontSize: 20,
                textAlign: 'justify',
                margin: 5,
                padding: 10,
                color: 'blue',
              }}>
              Description:
            </Text>
            {data && (
              <RenderHTML
                baseStyle={{
                  top: -40,
                  fontSize: 15,
                  textAlign: 'justify',
                  margin: 5,
                  padding: 10,
                  fontWeight: 'normal',
                  fontFamily: 'Poppins',
                  lineHeight: 20,
                }}
                contentWidth={width}
                source={{html: data.Decription}}
              />
            )}
            <Text
              style={{
                top: -75,
                fontWeight: 'bold',
                fontFamily: 'Poppins',
                lineHeight: 20,
                fontSize: 20,
                textAlign: 'justify',
                margin: 5,
                padding: 10,
                color: 'blue',
              }}>
              Symptoms:
            </Text>
            {data && (
              <RenderHTML
                baseStyle={{
                  top: -113,
                  fontSize: 15,
                  textAlign: 'justify',
                  margin: 5,
                  padding: 10,
                  fontWeight: 'normal',
                  fontFamily: 'Poppins',
                  lineHeight: 20,
                }}
                contentWidth={width}
                source={{html: data.Symptoms}}
              />
            )}
            <Text
              style={{
                top: -148,
                fontWeight: 'bold',
                fontFamily: 'Poppins',
                lineHeight: 20,
                fontSize: 20,
                textAlign: 'justify',
                margin: 5,
                padding: 10,
                color: 'blue',
              }}>
              Cause:
            </Text>
            {data && (
              <RenderHTML
                baseStyle={{
                  top: -188,
                  fontSize: 15,
                  textAlign: 'justify',
                  margin: 5,
                  padding: 10,
                  fontWeight: 'normal',
                  fontFamily: 'Poppins',
                  lineHeight: 20,
                }}
                contentWidth={width}
                source={{html: data.Cause}}
              />
            )}
            <Text
              style={{
                top: -222,
                fontWeight: 'bold',
                fontFamily: 'Poppins',
                lineHeight: 20,
                fontSize: 20,
                textAlign: 'justify',
                margin: 5,
                padding: 10,
                color: 'blue',
              }}>
              Preparing:
            </Text>
            {data && (
              <RenderHTML
                baseStyle={{
                  top: -258,
                  fontSize: 15,
                  textAlign: 'justify',
                  margin: 5,
                  padding: 10,
                  fontWeight: 'normal',
                  fontFamily: 'Poppins',
                  lineHeight: 20,
                }}
                contentWidth={width}
                source={{html: data.Preparing}}
              />
            )}
          </ScrollView>
        </View>
      </View>
    );
  } else {
    return <ActivityIndicator />;
  }
};

export default DetailDisease;

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
    left: 110,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
    color: 'black',
  },
  nameOfDisease: {
    position: 'absolute',
    width: 500,
    height: 30,
    left: 39,
    top: 70,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 30,
    color: 'black',
  },
  item: {
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
    padding: 10,
    marginTop: 25,
    height: 70,
    marginVertical: 8,
    marginHorizontal: 16,
    fontFamily: 'Poppins',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDetailDisease: {
    position: 'absolute',
    width: 389,
    height: 650,
    margin: 10,
    top: 100,
    backgroundColor: '#FEFFFF',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
});
