import axios from 'axios';
import { config } from 'process';

export const instanceAPI = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
})

export const publicAPI = axios.create({
  baseURL: 'http://localhost:5000/'
})

export const signedAPI = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})