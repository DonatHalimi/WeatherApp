import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <WeatherApp />
    </div>
  );
}

export default App;