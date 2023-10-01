import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import router from './Routes/Routes';
import AuthProvider from './Provaider/AuthProvider';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </AuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
