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
import Reviews from './Components/Reviews';
import CurrencySelector from './Components/CurrencySelector';
import Today_by_unniyarcha from './Components/Today_By_Unniyarcha';
import Gifting from './Components/Gifting';
import Shopbycategory from './Components/Shopbycategory';
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
            <Route path="/ProductDetail/:productId" element={<ProductDetail />} />
            <Route path="/ReShop" element={<ReShop />} /> 
            <Route path="/Reviews" element={<Reviews />} /> 
            <Route path="/CurrencySelector" element={<CurrencySelector />} /> 
            <Route path="/Today_By_Unniyarcha" element={<Today_by_unniyarcha />} />
            <Route path="/Gifting" element={<Gifting />} />
            <Route path="/Shopbycategory" element={<Shopbycategory/>}/>
          </Routes>
        </div>
        <Footer /> 
      </BrowserRouter>
    </>
  );
}

export default App;
