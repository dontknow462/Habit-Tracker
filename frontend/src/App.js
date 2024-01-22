// import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';
import Guest from './navbar/guest';
import AuthUser from './components/AuthUser.js';
import Auth from './navbar/auth';
import HabitTable from './components/HabitTable.js';
// frontend/src/components/AuthUser.js

function App() {
  const {getToken} = AuthUser();
  if(!getToken()){
    return <Guest/>
  }
  return (
      <Auth />
  );
}




export default App;