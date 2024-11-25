import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Welcome from './pages/Welcome/Welcome';
import "./App.css"


const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/welcome" element={<Welcome />} />
  </Routes>
);

export default App;

