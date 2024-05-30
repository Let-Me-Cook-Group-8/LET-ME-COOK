import Header from '../src/components/Header';
import React from 'react';
import Footer from '../src/components/Footer'
import { Outlet } from 'react-router-dom';
import CardFood from '../src/components/CardFood.js'
import  { useState } from 'react';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
      setIsLoggedIn(true);
  }
  return (
    <div className='App'>
      <div className='App'>
        <div className='Header'>
        <Header isLoggedIn={isLoggedIn} />
        </div>
        <Outlet />

      </div>

    </div>

  );

}


