import axios from 'axios';

const API_URL = `${process.env.REACT_API_URL}/auth` || 'https://notewall-webapp.onrender.com/api/auth';

interface MailData {
  username: string;
  email: string;
  password: string;
}

interface LogData {
  username: string;
  password: string;
}

export const register = async (formData:MailData ) => {
  console.log(formData)
  const responce = await axios.post(`${API_URL}/register`, formData);
  console.log(responce)
  return responce.data
};

export const login = async (formData:LogData) => {
  const response = await axios.post(`${API_URL}/login`, formData);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};
