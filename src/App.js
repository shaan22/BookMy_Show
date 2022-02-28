import './App.css';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImages';
import Cardslider from './components/Cardslider';
import Cardslider2 from './components/CardSlider2'
import Premeier from './components/Premeier';
import Stream from './components/Stream';
import Events from './components/Events';
import Footer from './components/Footer';
import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,  
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import AllMovies from './components/AllMovies';
import SingleMovie from './components/SingleMovie';
import UserRegistration from './components/UserRegistration';
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
