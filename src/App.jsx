import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Login from './componentes/Login/Login';



function App() {
  

  return (
    <>
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        <Footer />
      </BrowserRouter>      
    </div>
      
    </>
  )
}

export default App
