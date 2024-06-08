import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch'; 
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <NavLink to="/" className="nav-link" activeClassName="active-link" exact>
          Home
        </NavLink>
        <NavLink to="/opleiding" className="nav-link" activeClassName="active-link">
          Opleiding
        </NavLink>
        <NavLink to="/programma" className="nav-link" activeClassName="active-link">
          Programma
        </NavLink>
        <NavLink to="/portfolio" className="nav-link" activeClassName="active-link">
          Portfolio
        </NavLink>
        <NavLink to="/blog" className="nav-link" activeClassName="active-link">
          Blog
        </NavLink>
        <NavLink to="/services" className="nav-link" activeClassName="active-link">
          Services
        </NavLink>
        <NavLink to="/team" className="nav-link" activeClassName="active-link">
          Team
        </NavLink>
        <NavLink to="/search" className="nav-link" activeClassName="active-link">
          Search
        </NavLink>
      </div>
      <div className="auth-links">
        <NavLink to="/login" className="nav-link" activeClassName="active-link">
          Login
        </NavLink>
        <NavLink to="/register" className="nav-link" activeClassName="active-link">
          Register
        </NavLink>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavBar;
