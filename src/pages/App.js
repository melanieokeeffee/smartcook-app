import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';
import Cart from './Cart';
import Pantry from './Pantry';
import Admin from './Admin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
