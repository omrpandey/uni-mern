import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; 
import Home from './Pag/Home';
import Navigation from './Components/Navigation';
import Flashsaless from './Components/Flashsaless';
import Weds from './Components/Weds';
import Lotus from './Components/Lotus';
import Profile from './Components/Profile';
import CreateAccount from './Components/CreateAccount';
import Footer from './Components/Fotter'; 
import ProductDetail from './Components/ProductDetail'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/Flashsaless" element={<Flashsaless />} />
            <Route path="/Weds" element={<Weds />} />
            <Route path="/Lotus" element={<Lotus />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/ProductDetail" element={<ProductDetail />} /> {/* Product details page */}
          </Routes>
        </div>
        <Footer /> {/* Directly include Footer here */}
      </BrowserRouter>
    </>
  );
}

export default App;
