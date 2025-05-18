
import React from 'react';
import './App.css';
import Counter from './Component/Counter';
import User from './Component/User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import API from './Component/API'; // ✅ Corrected import name

function App() {
  return (
    <BrowserRouter>
      <div>
        <API />
      </div>
    </BrowserRouter>
  );
}

export default App;
