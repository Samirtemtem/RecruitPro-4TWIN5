import axios from 'axios';

const API_URL =  'http://localhost:5000/api';

export const register = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error : any) {
    console.log('Full error object:', error.response.data);
    if (error.response) {
      return (error.response.data || 'Registration failed');
    }
    return('Network error occurred');
  }
}; 