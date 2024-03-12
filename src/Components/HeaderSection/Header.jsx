// Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="title">Travelicious</h1>
      <nav className="navigation">
        <ul>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
