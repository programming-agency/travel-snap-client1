import { useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { SERVER_URL } from './config/constant';
 

function App() {

  useEffect(() => {
    axios.defaults.baseURL = SERVER_URL
  }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
