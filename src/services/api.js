import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cine-pass.herokuapp.com',
});

export default api;