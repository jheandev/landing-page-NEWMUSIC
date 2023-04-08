import React from 'react'
import {Routes ,Route, BrowserRouter,  } from 'react-router-dom';


import DiscoverMusic from './pages/DiscoverMusic';
import JoinMusic from './pages/JoinMusic';
import Home from './pages/Home';


function App() {
  return(
     
     <BrowserRouter>       
 <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<DiscoverMusic /> } />
         <Route path="/about" element={<JoinMusic /> } />
        
 </Routes>
 </BrowserRouter>

  );

}


export default App;
