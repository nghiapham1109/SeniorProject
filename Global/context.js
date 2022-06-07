/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
const AuthContext = React.createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const AuthProvider = ({children}) => {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  axios.defaults.withCredentials = true;
  const [loginStatus, setLoginStatus] = useState('');
  //
  return (
    <AuthContext.Provider value={{token, setToken}}>
      {children}
    </AuthContext.Provider>
  );
};
export {AuthContext, AuthProvider};
