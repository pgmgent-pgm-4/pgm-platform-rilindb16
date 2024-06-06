// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Opleiding from './pages/Opleiding';
import Programma from './pages/Programma';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog'; // Make sure Blog component is imported
import Services from './pages/Services';
import Team from './pages/Team';
import Search from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/main.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/opleiding" element={<Opleiding />} />
            <Route path="/programma" element={<Programma />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} /> {/* Ensure Blog route is here */}
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer /> 
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
