import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; 
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Flashsaless from './Components/Flashsaless';
import Weds from './Components/Weds';
import Lotus from './Components/Lotus';
import Profile from './Components/Profile';
import CreateAccount from './Components/CreateAccount';
import Footer from './Components/Fotter'; 
import ProductDetail from './Components/ProductDetail'; 
import SuiDang from './Components/SuiDang';
import ReShop from './Components/ReShop';


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
            <Route path="/SuiDang" element={<SuiDang />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/ProductDetail" element={<ProductDetail />} />
            <Route path="/ReShop" element={<ReShop />} /> 
          </Routes>
        </div>
        <Footer /> 
      </BrowserRouter>
    </>
  );
}

export default App;
