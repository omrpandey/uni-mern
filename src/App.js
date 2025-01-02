import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; 
import Home from './Pag/Home';
import Navigation from './Components/Navigation';
import Flashsaless from './Components/Flashsaless';
import Weds from './Components/Weds';
import Lotus from './Components/Lotus'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/Flashsaless" element={<Flashsaless />} />
          <Route path="/Weds" element={<Weds />} />
          <Route path="/Lotus" element={<Lotus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
