import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import './css/App.css';

import Header from './template-parts/Header';
import Footer from './template-parts/Footer';
import Home from './template-parts/Home';
import Occassions from './template-parts/Occassions';
import bg_img from './assets/camera-white.svg';
import Video from './template-parts/Video';
import Photography from './template-parts/Photography';

window.pageVariations = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
    transition: { duration: .4 }
  },
  in: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: { duration: .4, staggerChildren: .1 }
  },
  out: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: { duration: .4 }
  }
}

window.pageTransition = {
  type: 'easeInOut',
  duration: .25,
}


function App() {
  const location = useLocation();

  return (
    <div className="App" style={{ backgroundImage:`url(${bg_img})` }}>
      
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/occassions" element={<Occassions />}></Route>
          <Route exact path="/photography" element={<Photography />}></Route>
          <Route exact path="/video" element={<Video />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
