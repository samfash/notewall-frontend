import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

interface FormData {
  username: string;
  password: string;
}

export const register = async (formData:FormData ) => {
  console.log(formData)
  const responce = await axios.post(`${API_URL}/register`, formData);
  console.log(responce)
  return responce.data
};

export const login = async (formData:FormData) => {
  const response = await axios.post(`${API_URL}/login`, formData);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};
