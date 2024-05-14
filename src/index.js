import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

import Content from './components/Content'

import Search from './components/Searchpage.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Register from './components/Register.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Content />} />

          <Route path="/search" element={<Search />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
