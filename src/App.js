import React from 'react';
import './css/App.css';
import {Route, Link, Routes} from 'react-router-dom';
import Header from './template-parts/Header';

import Home from './template-parts/Home';
import About from './template-parts/About';
import Video from './template-parts/Video';
import Weddings from './template-parts/Weddings';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/weddings" element={<Weddings />}></Route>
      <Route exact path="/video" element={<Video />}></Route>
      </Routes>
    </div>
  );
}

export default App;
