/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, FlatList, Image, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DetailCountry = ({navigation}) => {
  const [data, setData] = useState({});
  const [arrayHolder, setArrayHolder] = useState([]);
  const [value, setValue] = useState();
  //
  useEffect(() => {
    getListCountry();
    return () => {};
  }, []);
  //
  let getListCountry = () => {
    const apiURL = 'https://disease.sh/v3/covid-19/countries?yesterday=true';
    fetch(apiURL)
      .then(res => res.json())
      .then(resJson => {
        setData(resJson);
        setArrayHolder(resJson);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };
  //
  let searchFilterFunction = text => {
    setValue(text);
    const newData = arrayHolder.filter(item => {
      const itemData = `${item.country.toUpperCase()}`;
      console.log(itemData);
      const textData = text.toUpperCase();
      // console.log(textData);
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>More Country</Text>
      <Ionicons
        name="arrow-back-outline"
        size={30}
        style={{left: 10, top: 25}}
        onPress={() => navigation.navigate('CovidScreen')}
      />
      <TextInput
        style={{
          backgroundColor: 'white',
          // textAlign: 'center',
          margin: 20,
          borderRadius: 10,
          height: 40,
          width: 389,
          left: -10,
          top: 10,
        }}
        placeholder="Search country..."
        onChangeText={text => searchFilterFunction(text)}
        value={value}
      />
      <View style={styles.flagContainer}>
        <FlatList
          removeClippedSubviews={true}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          windowSize={10}
          data={data}
          renderItem={({item}) => (
            <View style={styles.flatCard}>
              <Image
                source={{uri: item.countryInfo.flag}}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                  borderRadius: 20,
                }}
              />
              <Text style={[styles.cardCountry, {width: 100}]}>
                {item.country}
              </Text>
              <View>
                <Text style={[styles.cardText, {color: 'orange'}]}>
                  Total Cases:{item.cases}
                </Text>
                <Text style={styles.cardText}>
                  Today Cases:{item.todayCases}
                </Text>
                <Text style={[styles.cardText, {color: 'red'}]}>
                  Deaths:{item.deaths}
                </Text>
                <Text style={[styles.cardText]}>
                  Today Deaths:{item.todayDeaths}
                </Text>
                <Text style={[styles.cardText, {color: 'green'}]}>
                  Recovered:{item.recovered}
                </Text>
              </View>
            </View>
          )}
          //keyExtractor={item => item.countryInfo.id}
          // key={item => item.countryInfo.id}
        />
      </View>
    </View>
  );
};

export default DetailCountry;

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
  flagContainer: {
    position: 'absolute',
    width: 389,
    height: 650,
    top: 100,
    padding: 10,
    margin: 10,
    backgroundColor: '#F7F3F3',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  flatCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardCountry: {
    fontSize: 14,
    fontWeight: 'bold',
    left: -10,
    textAlign: 'center',
  },
});
