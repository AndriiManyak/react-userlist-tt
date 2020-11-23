import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export const Header = () => (
  <header className="Header">
    <nav>
      <NavLink
        to="/"
        exact
        activeClassName="Header--active"
      >
        Home
      </NavLink>

      <NavLink
        to="/users"
        activeClassName="Header--active"
      >
        Users
      </NavLink>
    </nav>
  </header>
);
