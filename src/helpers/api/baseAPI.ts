import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const baseAPI: AxiosInstance = axios.create({
  baseURL: 'https://my-api.com'
});

baseAPI.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  const token = 'mytoken';
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

baseAPI.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle successful responses
    return response.data;
  },
  (error: any) => {
    if(error.response == 'Session Id expired' && error.response.status === 401){
      // redirect to the login page or refresh the token
      const router = useRouter();
      router.push('/');
    }
    // Handle error responses
    return Promise.reject(error);
  }
);

export default baseAPI;
