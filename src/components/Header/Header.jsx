import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <nav className="nav">
      <Link to="/">
        Home
      </Link>

      <Link to="/users">
        Users
      </Link>
    </nav>
  </header>
);
