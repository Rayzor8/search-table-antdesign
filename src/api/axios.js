import axios from 'axios';

export const api = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com',
   headers: {
      'Content-Type': 'application/json',
   },
});

export const getPost = async () => {
   const response = await api.get('/posts');
   return response.data;
};
