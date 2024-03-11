import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes> 
        </div> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;