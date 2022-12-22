import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Quote from './pages/Quote';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/quotes" element={<Quote />} />
    </Routes>
  </>
);

export default App;
