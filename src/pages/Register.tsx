import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

interface FormData {
  username: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // await register(formData);
      await register(formData)
      navigate('/login');
    } catch (err) {
      setError('Error registering. Please try again.');
    }
  };

  return (
    <div className='container'>
      <h1>Register</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
          id="username"
            name='username'
            type="email"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            id='password'
            name='password'
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
