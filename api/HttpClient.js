/* eslint-disable prettier/prettier */
import axios from 'axios';

const BackendAPI = axios.create({
  baseURL: 'http://10.0.2.2:8080',
  withCredentials: false,
});

export default BackendAPI;
