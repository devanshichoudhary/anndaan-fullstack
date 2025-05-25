import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // backend URL
});

export const postDonation = data => API.post('/donations', data);
export const getNearby = () => API.get('/locations');
