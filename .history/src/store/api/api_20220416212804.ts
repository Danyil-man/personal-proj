import axios from 'axios';

export const instanceAPI = axios.create({
    baseURL: 'http://localhost:3001'
})