import Header from '../src/components/Header';
import React from 'react';
import Footer from '../src/components/Footer'
import { Outlet } from 'react-router-dom';
import CardFood from '../src/components/CardFood.js'

function App() {
  return (
    <div className='App'>
      <div className='App'>
        <div className='Header'>
          <Header />
        </div>
        <Outlet />

      </div>

    </div>

  );

}

export default App;
