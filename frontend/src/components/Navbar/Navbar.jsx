import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">Breno Diniz Correa</Link>
        <ul className="navbar-menu">
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </div>
    </nav>
  );
}
