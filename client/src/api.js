import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:8000/memes' });
export default API;