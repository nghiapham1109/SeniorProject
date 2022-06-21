/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import LottieView from 'lottie-react-native';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.NameDisease}</Text>
  </TouchableOpacity>
);

const Disease = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [arrayHolder, setArrayHolder] = useState([]);
  const [value, setValue] = useState();
  //

  //
  useEffect(() => {
    fetch('http://10.0.2.2:8080/api/disease')
      .then(response => response.json())
      .then(json => {
        setData(json.data);
        setArrayHolder(json.data);
      })
      .catch(error => {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
  });
  //
  let searchFilterFunction = text => {
    setValue(text);
    const newData = arrayHolder.filter(item => {
      const itemData = `${item.NameDisease.toUpperCase()}`;
      console.log('Search Disease', itemData);
      const textData = text.toUpperCase();
      // console.log(textData);
      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };
  //
  const renderItem = ({item, index}) => {
    const backgroundColor =
      item.IDDisease === selectedId ? '#F6F3F3' : '#A4EFE2';
    const color = item.IDDisease === selectedId ? 'black' : 'black';
    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        onPress={() =>
          navigation.navigate('DetailDisease', {id: item.IDDisease})
        }
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  //
  // if (data.length !== 0 && isLoading === true) {   } else {
  //   return <ActivityIndicator />;
  // }
  return (
    <View>
      <View style={styles.eclipse1} />
      <View style={styles.eclipse2} />
      <View style={styles.eclipse3} />
      <View style={styles.eclipse4} />
      <Text style={styles.header}>Disease</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Search disease..."
        onChangeText={text => searchFilterFunction(text)}
        value={value}
      />
      <View style={styles.containerDisease}>
        <FlatList
          nestedScrollEnabled
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.IDDisease}
          extraData={selectedId}
        />
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
    left: 140,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 38,
    color: 'black',
  },
  textInput: {
    position: 'absolute',
    width: 389,
    top: 60,
    padding: 10,
    margin: 10,
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
    width: 389,
    height: 545,
    margin: 10,
    top: 130,
    backgroundColor: '#FEFFFF',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
});
