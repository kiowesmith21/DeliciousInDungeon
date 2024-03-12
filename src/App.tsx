import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Characters from './pages/Characters';
import Monsters from './pages/Monsters';
import Recipes from './pages/Recipes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/monsters" element={<Monsters />} />
                <Route path="/recipes" element={<Recipes />} />
            </Routes> 
        </div> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;