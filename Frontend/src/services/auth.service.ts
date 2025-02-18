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
    if (error.response) {
      throw new Error(error.response.data.message || 'Registration failed');
    }
    throw new Error('Network error occurred');
  }
}; 