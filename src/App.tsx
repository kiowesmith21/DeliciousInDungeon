import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Characters from './pages/Characters';
import Monsters from './pages/Monsters';
import Recipes from './pages/Recipes';
import Dish from './pages/Dish';
import { DishContextProvider } from './config/DishContext';
import Games from './pages/Games';

function App() {


  return (
    <div className="App">
      <DishContextProvider>
        <BrowserRouter>
          <Navbar />
          <div className='pages'>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/characters" element={<Characters />} />
                  <Route path="/monsters" element={<Monsters />} />
                  <Route path="/recipes" element={<Recipes />} />
                  <Route path="/dish" element={<Dish />} />
                  <Route path="/games" element={<Games />} />
              </Routes> 
          </div> 
          <Footer />
        </BrowserRouter>
      </DishContextProvider>
    </div>
  );
}

export default App;