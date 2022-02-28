import './App.css';
import Header from './components/Header/Header';

import Footer from './components/Footer';
import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,  
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';

import Home from './components/Home';
import AllMov from './components/AllMov';
import SingleM from './SingleM';
import UserReg from './UserReg';

function App() {
  return (
    
    <Router>
    
      <Header/>
      
      
      <Routes>
        
          <Route  path="/" element={<Home />} />
            
          

          <Route  path="/movies" element={<AllMov />} />
            
          
          <Route  path="/movies/:movid" element={<SingleM />} />
            
          
          <Route  path="/register" element={<UserReg />} />
            
          
      </Routes>
      
      <Footer/>
    
    </Router>
  );
}

export default App;
