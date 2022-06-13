/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
const AuthContext = React.createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const AuthProvider = ({children}) => {
  const [token, setToken] = useState('');
  axios.defaults.withCredentials = true;
  useEffect(() => {
    AsyncStorage.getItem('storeToken').then(token => {
      console.log(token);
      if (token) {
        setToken(token);
      }
    });
  }, []);
  //
  return (
    <AuthContext.Provider value={{token, setToken}}>
      {children}
    </AuthContext.Provider>
  );
};
export {AuthContext, AuthProvider};
