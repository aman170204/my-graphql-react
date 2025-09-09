import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import api from './api/axios';

//add request Handler
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if(token){
        config.headers.Authorization= `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
)

//add response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if(error.response?.status ===401){
      //handle unacuthorize access
      console.log('unauthorize access, logging out ...');
    }
    return Promise.reject(error);
  }
);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
